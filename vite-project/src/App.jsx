import { use, useState } from 'react'
import { useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [show, setShow] = useState(true)
  const [data,setData] = useState(null);
  useEffect(()=>{
    alert("UseEffect")
  },[])
  return (
    <>
      {/* <div>
        <button onClick={()=>{setShow(!show)}}>Toggle</button>
        {show? <div>Showing</div> : <div>Not Showing</div>}
      </div> */}
      {/* <div>Hey all</div> */}
      
      <ul>
        {data && data.map(item=> <li key={item.id}>{item.name}</li>)}
      </ul>

    </>
  )
}

export default App
