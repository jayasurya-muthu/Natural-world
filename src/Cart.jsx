import React, { useEffect, useState } from "react";

export default function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(data);

        const updatedData = data.map(item => ({
            ...item,
            qty: item.qty || 1
        }));
        setCart(updatedData);
    }, []);

    const getPriceValue = (price) => {
        if (!price) return 0;

        const num = price.toString().match(/\d+/);
        return num ? parseInt(num[0]) : 0;
    };

    const increaseQty = (index) => {
        const updatedCart = [...cart];
        updatedCart[index].qty += 1;
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };


    const decreaseQty = (index) => {
        const updatedCart = [...cart];

        if (updatedCart[index].qty > 1) {
            updatedCart[index].qty -= 1;
        }

        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const removeItem = (index) => {
        const updatedCart = cart.filter((_, i) => i !== index);
        setCart(updatedCart);
        localStorage.setItem("cart", JSON.stringify(updatedCart));
    };

    const totalPrice = cart.reduce(
        (total, item) => total + getPriceValue(item.price) * item.qty,
        0
    );

    const handlePayment = () => {
        alert(`Total Amount to Pay: ₹${totalPrice}`);
    };

    return (
  <div className="cart-container">
    <h2 className="cart-title">Shopping Cart</h2>

    {cart.length === 0 ? (
      <p className="empty">Your cart is empty</p>
    ) : (
      <div className="cart-layout">

        <div className="cart-left">
          {cart.map((item, index) => (
            <div key={index} className="cart-item">

              <img src={item.img} alt={item.name} />

              <div className="item-info">
                <h3>{item.name}</h3>
                <p className="price">₹{getPriceValue(item.price)}</p>

                <div className="qty-box">
                  <button onClick={() => decreaseQty(index)}>-</button>
                  <span>{item.qty}</span>
                  <button onClick={() => increaseQty(index)}>+</button>
                </div>
                <button
                  className="remove-btn"
                  onClick={() => removeItem(index)}
                >
                  REMOVE
                </button>
              </div>

            </div>
          ))}
        </div>
        <div className="cart-right">
          <h3>PRICE DETAILS</h3>

          <div className="price-row">
            <span>Price ({cart.length} items)</span>
            <span>₹{totalPrice}</span>
          </div>

          <div className="price-row">
            <span>Delivery Charges</span>
            <span className="free">FREE</span>
          </div>

          <hr />

          <div className="price-total">
            <span>Total Amount</span>
            <span>₹{totalPrice}</span>
          </div>

          <button className="pay-btn" onClick={handlePayment}>
            PLACE ORDER
          </button>
        </div>

      </div>
    )}
  </div>
);
}