import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Transport() {
  const navigate=useNavigate();

  const ConvertKartPage=()=>{
    navigate("/kart")

  }

  const [status, setStatus] = useState("");

  
  const products = [
    {name:"Rice",price:80 ,img:"/rice.jpg"},
    {name:"Wheat",price:60,img:"/wheat2.jpg"},
    {name:"Ragi Millet",price:90,img:"/ragi2.webp"},
    {name:"Corn",price:45,img:"/corn.webp"},
    {name:"Fruits",price:200,img:"/fruits.jfif"},
    {name:"Vegetables",price:100,img:"/vegetable.jpg"},
    {name:"Coconut",price:80,img:"/coconut.jpg"},
    {name:"Natural Drink",price:50,img:"/drinknatural.webp"},
    {name:"Mize",price:50,img:"/maize.webp"},
    {name:"Sugarcan",price:50,img:"/sugarcan.webp"},
    {name:"Groundnut",price:190,img:"/groundnut.webp"},
    {name:"Cotton",price:9890,img:"/cooton.webp"},
    {name:"Tomato",price:100,img:"/tomato.webp"},
    {name:"Watermelon",price:70,img:"/watermilon.webp"},
    {name:"Cabbage",price:70,img:"/cabage.webp"},
    {name:"Onion",price:90 ,img:"/onion.webp"},
    {name:"Potato",price:75 ,img:"/potato.webp"},
    {name:"Cauliflower",price:70,img:"/cauliflower.webp"},
    {name:"Turmeric",price:350,img:"/manjal.webp"}
  ];

  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (

    <div className="Selectcart-container" style={{backgroundImage:"url('')"}}>

      <h2>Select Your Orders</h2>

      <div className="Selectproduct-grid">

        {products.map((item, index) => (

          <div className="Selectproduct-card" key={index}>

            <img src={item.img} alt={item.name} />

            <h3>{item.name}</h3>

            <p>₹{item.price} per kg</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>

          </div>

        ))}

      </div>

      <div className="Selectcart-box">

        <h3>Selected Products</h3>

        {cart.length === 0 ? (
          <p>No products selected</p>
        ) : (
          cart.map((item, index) => (
            <div className="Selectcart-item" key={index}>
              {item.name} - ₹{item.price}
            </div>
          ))
        )}

        <h3>Total Price : ₹{totalPrice}</h3>

        <button onClick={ConvertKartPage}>Pay Amount</button>

      </div>



    </div>


  );

}