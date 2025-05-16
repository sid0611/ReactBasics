import React from 'react'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router-dom'
function Contact() {
    const { sname,sid } = useParams();
    console.log(`ID: ${sid}`);
    console.log(`Name: ${sname}`);

  return (
    <div>
        <h1>Contact Page</h1>
    </div>
  )
}

export default Contact
