import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(true)

  return (
    <>
      <div>
        <button onClick={()=>{setShow(!show)}}>Toggle</button>
        {show? <div>Showing</div> : <div>Not Showing</div>}
      </div>
    </>
  )
}

export default App
