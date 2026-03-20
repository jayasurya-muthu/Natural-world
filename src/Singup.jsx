import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();

  const [username, setUserName] = useState("");
  const [useremail, setUserEmail] = useState("");
  const [phonenumber, setUserPhone] = useState("");
  const [userpassword, setUserPassword] = useState("");
  const [repassword, setRepassword] = useState("");

  const [totalData, setTotalData] = useState([]);

  const sendEmail = async (e) => {
    e.preventDefault();

    if (userpassword !== repassword) {
      alert("Password and Confirm Password do not match");
      return;
    }

    try {
      await axios.post(
        "https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact",
        {
          Name: username,
          Phone: phonenumber,
          Email: useremail,
          Password: userpassword
        }
      );

      alert("Signup Successful");
      navigate("/Login")
      getdata();

    } catch (error) {
      alert("Failed to Signup");
    }
  };

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact"
      );
      setTotalData(response.data);
    } catch (error) {
      alert("Failed to get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div>
      <div
        className="signup-form"
        style={{
          backgroundImage: "url('/signup-image.jpg')",
          backgroundSize: "cover"
        }}
      >
        <h1>SIGNUP</h1>

        <form
          onSubmit={sendEmail}
          className="signup-details"
          style={{
            backgroundColor: "white",
            opacity: "0.9",
            padding: "20px",
            borderRadius: "10px"
          }}
        >

          <input type="text" placeholder="Name"
            onChange={(e) => setUserName(e.target.value)} required />
          <br />

          <input type="number" placeholder="Phone"
            onChange={(e) => setUserPhone(e.target.value)} required />
          <br />

          <input type="email" placeholder="Email"
            onChange={(e) => setUserEmail(e.target.value)} required />
          <br />

          <input type="password" placeholder="Password"
            onChange={(e) => setUserPassword(e.target.value)} required />
          <br />

          <input type="password" placeholder="Confirm Password"
            onChange={(e) => setRepassword(e.target.value)} required />
          <br />

          {repassword && userpassword !== repassword && (
            <p style={{ color: "red", fontSize: "14px" }}>
              Passwords do not match
            </p>
          )}

          <button type="submit" disabled={userpassword !== repassword}>
            Signup
          </button>

        </form>
      </div>
    </div>
  );
}