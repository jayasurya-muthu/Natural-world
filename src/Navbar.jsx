import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCart } from "react-icons/pi";

export default function Navbar() {
    const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = JSON.parse(localStorage.getItem("user"));
    setUser(loggedUser);
  }, []);

  return (
    <div>

      <div className='navbar'>
        <ul>
          <h1>Farming Products</h1>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/About">About</Link></li>
            <li><Link to="/Products">Products</Link></li>
            <li><Link to="/Transport">Selection</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
            <div>
              <li><Link to="/Cart"><PiShoppingCart/>Cart</Link></li>
            </div>
            <Link to="/Login"><button>Login</button></Link>
        </ul>

      </div>

    </div>
  )
}
