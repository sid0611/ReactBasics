import React from 'react'
import { Link } from 'react-router-dom'

function Contact() {
  return (
    <div>
        <h1>Contact Page</h1>
      <Link to="/about">Go to About</Link>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default Contact
