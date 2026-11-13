import { NavBar } from './components/NavBar'
import { Intro } from './components/Intro'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
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
        <Intro />
        <Services />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
