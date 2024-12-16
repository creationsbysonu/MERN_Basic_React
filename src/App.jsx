
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import About from './About'
import Home from './Home'
import Contact from './Contact'

function App() {

  return (
  <BrowserRouter>
  <Routes>
  <Route path='/' element={<Home />}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/contact' element={<Contact />}/>

  </Routes>
  </BrowserRouter>
  )
}

export default App
