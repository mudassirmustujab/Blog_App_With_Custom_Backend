import React from "react";
import { Link, useNavigate } from "react-router-dom";

function Nav() {

    const nav =useNavigate()
    const handleClick =()=>{

        localStorage.clear()

        nav('/')

    }

  return (

    <nav>
      <ul>
        <li>
            {
                !localStorage.getItem('myToken')
                &&   
                <Link to="/register">Register</Link>}
            {
                !localStorage.getItem('myToken')
                &&   
                <Link to="/login">Login</Link>
            }
          {localStorage.getItem('myToken')  &&<button onClick={()=>{handleClick()}} >Logout</button>}
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
