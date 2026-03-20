import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCart } from "react-icons/pi";

export default function Navbar() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    window.location.reload();
  };

  return (
    <div className='navbar'>
      <ul>

        <h1>
          {user ? (
            <small>Welcome!, {user.username} </small>
          ) : (
            <small>Farming Products</small>
          )}
        </h1>

        <li><Link to="/">Home</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Products">Products</Link></li>
        <li><Link to="/Transport">Selection</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        <li><Link to="/Cart"><PiShoppingCart /> Cart</Link></li>
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link to="/Login"><button>Login</button></Link>
        )}

      </ul>
    </div>
  );
}