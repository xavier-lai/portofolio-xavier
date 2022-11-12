import './css/App.css'
import './css/Banner.css'
import './css/NavBar.css'
import './css/Skills.css'
import './css/Projects.css'
import './css/Contact.css'
import './css/Footer.css'
import './css/Modal.css'

import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div >
  );
}

export default App;
