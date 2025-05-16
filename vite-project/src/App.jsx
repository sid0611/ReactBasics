
import './App.css'

// import About from './pages/About'
import Home from './pages/Home'
// import Contact from './pages/Contact'
import { BrowserRouter as Router, Routes, Route, BrowserRouter } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
function App(){
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/a' element={<Login/>}/>
        <Route path='/dashboard' element={<Dashboard/>}/>

      </Routes>
      
    </BrowserRouter>
  )
}
export default App
