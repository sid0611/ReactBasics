import React from 'react'
import { Link } from "react-router-dom";
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link to='/a'>Go to Login Page</Link>
    </div>
  )
}

export default Home
