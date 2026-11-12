import { NavBar } from './components/NavBar'
import { Hero } from './components/Hero'
import { Services } from './components/Services'
import { Work } from './components/Work'
import { Skills } from './components/Skills'
import { Rates } from './components/Rates'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'

export default function App() {
  return (
    <>
      <NavBar />
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
