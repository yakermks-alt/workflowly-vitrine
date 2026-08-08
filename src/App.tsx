import { Nav } from "./components/Nav"
import { Hero } from "./components/Hero"
import { Problem } from "./components/Problem"
import { Offers } from "./components/Offers"
import { Roi } from "./components/Roi"
import { Steps } from "./components/Steps"
import { Trust } from "./components/Trust"
import { Faq } from "./components/Faq"
import { Contact } from "./components/Contact"
import { Footer } from "./components/Footer"
import { MobileCta } from "./components/MobileCta"
import { SiteBackground } from "./components/three/SiteBackground"

function App() {
  return (
    <div className="overflow-x-hidden bg-background pb-[72px] md:pb-0">
      <SiteBackground />
      <div className="relative z-10">
        <Nav />
        <Hero />
        <Problem />
        <Offers />
        <Roi />
        <Steps />
        <Trust />
        <Faq />
        <Contact />
        <Footer />
        <MobileCta />
      </div>
    </div>
  )
}

export default App
