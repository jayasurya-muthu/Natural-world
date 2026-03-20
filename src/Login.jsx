import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate=useNavigate();

  const createAccount=()=>{
    navigate("/Singup")
  }


  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Check, setCheck] = useState(false);

  const [TotalData, setTotalData] = useState([])

const dataLogin = async (e) => {
  e.preventDefault();

  try {
    const res = await axios.get(
      "https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact"
    );

    const users = res.data;

    const validUser = users.find(
      (item) =>
        item.Email === Email && item.Password === Password
    );

    if (validUser) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          username: validUser.Name
        })
      );

      alert("Login Successful");
      navigate("/");
      window.location.reload();
    } else {
      alert("Invalid Email or Password");
    }
  } catch (error) {
    alert("Login Failed");
  }
};
  const getdata = async () => {
    try {
      const responsive = await axios.get(`https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact`)
      setTotalData(responsive.data)
    }
    catch (error) {
      alert('Failed to get data inlogin page ')
    }
  }
  useEffect(() => {
    getdata();
  }, [])
  return (
    <div>
      <div style={{backgroundImage:"url('/login-image-1.jpg')",
        backgroundSize:"cover",
      }} className="login-page">
        <div className="person-login">
          <h1>USER LOGIN</h1>
          <br />
          <div>
            <IoPersonCircleSharp/>
            
          </div>
          <input type="text" placeholder='Email' onChange={(e) => { setEmail(e.target.value) }} required/>
          <br />
          <input type="password" placeholder='Password' onChange={(e) => { setPassword(e.target.value) }} required/>
          <br />
          <label><input type="checkbox" onChange={(e) => { setCheck(e.target.checked) }} />Remember Me</label>
          <br />
          <button onClick={dataLogin}>Login</button>
          <br />
          <span><Link to='/Forgotpage'>Forgot Password</Link></span>
          <br/>
          <div className="create-account">
            <button onClick={createAccount}>Create New Account</button>
          </div>

        </div>
      </div>

    </div>
  )
}
