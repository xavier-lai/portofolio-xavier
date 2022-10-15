import './css/App.css'
import './css/Banner.css'
import './css/NavBar.css'
import './css/Skills.css'

import { NavBar } from './components/NavBar'
import { Banner } from './components/Banner'
import { Skills } from './components/Skills'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Banner></Banner>
      <Skills></Skills>
    </div >
  );
}

export default App;
