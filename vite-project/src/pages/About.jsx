import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div>
        <h1>About Page</h1>
      <Link to="/contact">Go to Contact</Link>
      <Link to="/">Go to Home</Link>
      
    </div>
  )
}

export default About
