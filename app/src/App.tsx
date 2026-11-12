import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { Rates } from './components/Rates'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { ScrollBackground } from './components/ScrollBackground'
import { ScrollProgressNav } from './components/ScrollProgressNav'
import { useSmoothScroll } from './lib/useSmoothScroll'

export default function App() {
  useSmoothScroll()

  return (
    <>
      <ScrollBackground />
      <NavBar />
      <ScrollProgressNav />
      <main>
        <Hero />
        <Services />
        <Work />
        <Skills />
        <Rates />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
