
import './App.css'

import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact/:id/:name' element={<Contact/>}/>

      </Routes>
      
    </BrowserRouter>
  )
}
export default App
