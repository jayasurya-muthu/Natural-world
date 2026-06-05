import axios from "axios";
import React, { useEffect, useState } from "react";
import { IoPersonCircleSharp } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const createAccount = () => {
    navigate("/Singup");
  };

  // Empty by default
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Check, setCheck] = useState(false);

  const [TotalData, setTotalData] = useState([]);

  const dataLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.get(
        "https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact"
      );

      const users = res.data;

      const validUser = users.find(
        (item) =>
          item.Email === Email &&
          item.Password === Password
      );

      if (validUser) {
        localStorage.setItem(
          "user",
          JSON.stringify({
            username: validUser.Name,
          })
        );

        // Clear fields after login
        setEmail("");
        setPassword("");

        alert("Login Successful");
        navigate("/");
        window.location.reload();
      } else {
        alert("Invalid Email or Password");
      }
    } catch (error) {
      alert("Login Failed");
      console.log(error);
    }
  };

  const getdata = async () => {
    try {
      const response = await axios.get(
        "https://69afb59ec63dd197feb9e489.mockapi.io/farmingcontact"
      );
      setTotalData(response.data);
    } catch (error) {
      alert("Failed to get data in login page");
    }
  };

  useEffect(() => {
    getdata();

    // Clear fields when page loads
    setEmail("");
    setPassword("");
  }, []);

  return (
    <div>
      <div
        className="login-page"
        style={{
          backgroundImage: "url('/login-image-1.jpg')",
          backgroundSize: "cover",
          minHeight: "100vh",
        }}
      >
        <div className="person-login">
          <h1>USER LOGIN</h1>

          <div>
            <IoPersonCircleSharp />
          </div>

          <input
            type="email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="off"
            required
          />

          <br />

          <input
            type="password"
            placeholder="Password"
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="new-password"
            required
          />

          <br />

          <label>
            <input
              type="checkbox"
              checked={Check}
              onChange={(e) => setCheck(e.target.checked)}
            />
            Remember Me
          </label>

          <br />

          <button onClick={dataLogin}>Login</button>

          <br />

          <span>
            <Link to="/Forgotpage">Forgot Password</Link>
          </span>

          <br />

          <div className="create-account">
            <button onClick={createAccount}>
              Create New Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}