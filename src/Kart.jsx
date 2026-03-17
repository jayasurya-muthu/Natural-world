import React, { useState } from 'react'

export default function Kart() {
    const [method, setMethod] = useState("");
    const [pin, setPin] = useState("");

    const addNumber = (num) => {
        if (pin.length < 4) {
            setPin(pin + num);
        }
    };

    const makePayment = () => {

        if (method === "") {
            alert("Please select payment method");
            return;
        }

        if (pin.length < 4) {
            alert("Enter 4 digit PIN");
            return;
        }

        if (pin === "1234") {
            alert("Payment Successful ✅");
            setPin("");
        } 
        else {
            alert("Payment Failed ❌ Wrong PIN");
            setPin("");
        }

    };
    return (
        <div className="body-Kart">
            <div>
                <h2>Payment Process</h2>

            </div>
            <div className="Kart-container">

                <h2>Select Payment Option</h2>

                <div className="payment-buttons">
                    <button onClick={() => setMethod("GPay")}>GPay</button>
                    <button onClick={() => setMethod("PhonePe")}>PhonePe</button>
                    <button onClick={() => setMethod("Paytm")}>Paytm</button>
                </div>

                <div className="pin-number">
                    {[0, 1, 2, 3].map((i) => (
                        <input
                            key={i}
                            type="password"
                            value={pin[i] || ""}
                            readOnly
                        />
                    ))}
                </div>

                <div className="number-pad">

                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
                        <button key={num} onClick={() => addNumber(num)}>
                            {num}
                        </button>
                    ))}

                </div>

                <button className="pay-btn" onClick={makePayment}>
                    Pay Now
                </button>

            </div>

        </div>
    )
}

