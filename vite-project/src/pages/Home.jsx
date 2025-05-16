import { use } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function Home() {
  const navigate =useNavigate();
  const clickedLogin=()=>{
    navigate('/about')
  }
  return (
    <div>
      <h1>Home Page</h1>
      <button onClick={clickedLogin}>Login</button>
    </div>
  );
}
export default Home
