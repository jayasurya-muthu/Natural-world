import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
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
            <Link to="/Login"><button>Login</button></Link>
            <Link to="/Signup"><button>Signup</button></Link>
        </ul>

      </div>

    </div>
  )
}
