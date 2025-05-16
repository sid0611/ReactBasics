import React from 'react'
import { useNavigate } from 'react-router-dom'
function Login() {
    const navigate = useNavigate();
    const handleLogin=()=>{
        alert ("User logged In");
        navigate('/dashboard')
    }
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  )
}

export default Login
