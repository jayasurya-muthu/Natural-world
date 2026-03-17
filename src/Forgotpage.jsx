import React, { useState } from 'react'

export default function Forgotpage() {

    const [email, setEmail] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Password reset link sent to " + email);
    }

    return (
        <div className="forgot-container"style={{backgroundImage:"url('/image1.jpg')"}}>
            <div className="forgot-box">
                <h2>Forgot Password</h2>

                <form onSubmit={handleSubmit}>

                    <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} required />

                    <br /><br />

                    <button type="submit">
                        Reset Password
                    </button>

                </form>
            </div>

        </div>
    )
}
