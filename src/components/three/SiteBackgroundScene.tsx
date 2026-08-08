import { useEffect, useMemo, useRef } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import * as THREE from "three"
import { orbVertexShader, orbFragmentShader } from "./orb-shader"

const FAR = 9999

/**
 * The background canvas keeps `pointer-events: none` (see SiteBackground.tsx)
 * so it never blocks a real click on page content. To still let people play
 * with it, this raycasts manually against `window` pointer events instead of
 * relying on the canvas's own (blocked) DOM events — a click that lands on a
 * button also "pokes" the sphere behind it, which is harmless and, if
 * anything, a nice bonus rather than a conflict.
 */
function DistortedOrb({ reducedMotion }: { reducedMotion: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null)
  const { camera } = useThree()

  const rotationY = useRef(0.4)
  const parallax = useRef({ x: 0, z: 0 })
  const parallaxTarget = useRef({ x: 0, z: 0 })

  const dragOffset = useRef({ x: 0, y: 0 })
  const dragVelocity = useRef({ x: 0, y: 0 })
  const isDragging = useRef(false)
  const lastPointer = useRef({ x: 0, y: 0 })

  const hoverTarget = useRef(0)
  const hoverPoint = useRef(new THREE.Vector3(FAR, FAR, FAR))
  const rippleOrigin = useRef(new THREE.Vector3(FAR, FAR, FAR))
  const rippleStart = useRef(-FAR)

  const raycaster = useMemo(() => new THREE.Raycaster(), [])
  const ndc = useMemo(() => new THREE.Vector2(FAR, FAR), [])

  const uniforms = useMemo(
    () => ({
      uTime: { value: 0 },
      uIntensity: { value: 0.22 },
      uColorA: { value: new THREE.Color("#FF6B2C") },
      uColorB: { value: new THREE.Color("#4E6BAE") },
      uPointer: { value: new THREE.Vector3(FAR, FAR, FAR) },
      uHover: { value: 0 },
      uRippleOrigin: { value: new THREE.Vector3(FAR, FAR, FAR) },
      uRippleTime: { value: FAR },
    }),
    []
  )

  useEffect(() => {
    function hitTest(clientX: number, clientY: number) {
      if (!meshRef.current) return null
      ndc.x = (clientX / window.innerWidth) * 2 - 1
      ndc.y = -(clientY / window.innerHeight) * 2 + 1
      raycaster.setFromCamera(ndc, camera)
      return raycaster.intersectObject(meshRef.current, false)[0] ?? null
    }

    function onPointerDown(e: PointerEvent) {
      const hit = hitTest(e.clientX, e.clientY)
      if (!hit || !meshRef.current) return

      isDragging.current = true
      lastPointer.current = { x: e.clientX, y: e.clientY }
      dragVelocity.current = { x: 0, y: 0 }

      rippleOrigin.current.copy(meshRef.current.worldToLocal(hit.point.clone()))
      rippleStart.current = uniforms.uTime.value
    }

    function onPointerMove(e: PointerEvent) {
      parallaxTarget.current.x = (-(e.clientY / window.innerHeight) * 2 + 1) * 0.18
      parallaxTarget.current.z = ((e.clientX / window.innerWidth) * 2 - 1) * 0.12

      if (isDragging.current) {
        const dx = e.clientX - lastPointer.current.x
        const dy = e.clientY - lastPointer.current.y
        lastPointer.current = { x: e.clientX, y: e.clientY }
        const vx = dy * 0.006
        const vy = dx * 0.006
        dragOffset.current.x += vx
        dragOffset.current.y += vy
        dragVelocity.current = { x: vx, y: vy }
        return
      }

      const hit = hitTest(e.clientX, e.clientY)
      if (hit && meshRef.current) {
        hoverTarget.current = 1
        hoverPoint.current.copy(meshRef.current.worldToLocal(hit.point.clone()))
      } else {
        hoverTarget.current = 0
      }
    }

    function onPointerUp() {
      isDragging.current = false
    }

    window.addEventListener("pointerdown", onPointerDown)
    window.addEventListener("pointermove", onPointerMove)
    window.addEventListener("pointerup", onPointerUp)
    return () => {
      window.removeEventListener("pointerdown", onPointerDown)
      window.removeEventListener("pointermove", onPointerMove)
      window.removeEventListener("pointerup", onPointerUp)
    }
  }, [camera, ndc, raycaster, uniforms.uTime])

  useFrame((_state, delta) => {
    if (!meshRef.current) return

    if (!reducedMotion) {
      uniforms.uTime.value += delta
      rotationY.current += delta * 0.06
    }

    if (!isDragging.current) {
      dragOffset.current.x += dragVelocity.current.x
      dragOffset.current.y += dragVelocity.current.y
      const decay = reducedMotion ? 0 : 0.92
      dragVelocity.current.x *= decay
      dragVelocity.current.y *= decay
    }

    parallax.current.x = THREE.MathUtils.lerp(parallax.current.x, parallaxTarget.current.x, 0.04)
    parallax.current.z = THREE.MathUtils.lerp(parallax.current.z, parallaxTarget.current.z, 0.04)

    meshRef.current.rotation.y = rotationY.current + dragOffset.current.y
    meshRef.current.rotation.x = parallax.current.x + dragOffset.current.x
    meshRef.current.rotation.z = parallax.current.z

    uniforms.uHover.value = THREE.MathUtils.lerp(uniforms.uHover.value, hoverTarget.current, 0.15)
    uniforms.uPointer.value.copy(hoverPoint.current)
    uniforms.uRippleOrigin.value.copy(rippleOrigin.current)
    uniforms.uRippleTime.value = reducedMotion ? FAR : uniforms.uTime.value - rippleStart.current
  })

  return (
    <mesh ref={meshRef} position={[1.5, 0.1, -1]}>
      <icosahedronGeometry args={[1.85, 3]} />
      <shaderMaterial
        uniforms={uniforms}
        vertexShader={orbVertexShader}
        fragmentShader={orbFragmentShader}
        wireframe
        transparent
      />
    </mesh>
  )
}

export function SiteBackgroundScene({ reducedMotion }: { reducedMotion: boolean }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 42 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
      style={{ width: "100%", height: "100%" }}
    >
      <DistortedOrb reducedMotion={reducedMotion} />
    </Canvas>
  )
}
