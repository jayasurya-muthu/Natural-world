import axios from 'axios';
import React, { useEffect, useState } from 'react'

export default function Singup() {
  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [phonenumber, setUserPhone] = useState("");
  const [userpassword, setUserPassword] = useState("");

  const [totalData, setTotalData] = useState([]);

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact`,
        {
          Name: username,
          Phone: phonenumber,
          Email: useremail,
          Password: userpassword
        }
      )
      alert("Signup Successfull")
      getdata();
    }
    catch (error) {
      alert("Failed to Signup page")
    }
  }

  const getdata = async () => {
    try {
      const responsive = await axios.get(`https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact`)
      setTotalData(responsive.data)
    }
    catch (error) {
      alert("Failet to get Data in Singup page")
    }

  }
  useEffect(() => {
    getdata();
  }, [])
  return (
    <div>
      <div style={{ backgroundImage: "url('/signup-image.jpg')", backgroundSize: "cover" }} className='signup-form'>
        <h1>SINGUP</h1>
        <div>
          <form onSubmit={sendEmail} className='signup-details' style={{ backgroundColor: "white", backgroundSize: "cover", opacity: "0.7" }}>
            <input type="text" placeholder="Name" onChange={(e) => setUserName(e.target.value)} required/>
            <br />
            <input type="number" placeholder="Phone" onChange={(e) => setUserPhone(e.target.value)} required />
            <br />
            <input type="text" placeholder="Email" onChange={(e) => setUserEmail(e.target.value)} required />
            <br />
            <input type="password" placeholder="Password" onChange={(e) => setUserPassword(e.target.value)} required/>
            <br />
            <button type="submit">Signup</button>
          </form>
        </div>
      </div>


    </div>
  )
}

