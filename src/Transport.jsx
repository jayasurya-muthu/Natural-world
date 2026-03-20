import React, { useState } from "react";

export default function Transport() {
  const addToCart = (item) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(item);

    alert("Adding"+" "+item.name)

    localStorage.setItem("cart", JSON.stringify(existingCart));

  };

  const products = [

    { name: "Rice", price: "80 / Kg", img: "/rice.jpg" },
    { name: "Wheat", price: "60 / Kg", img: "/wheat2.jpg" },
    { name: "Ragi Millet", price: "90 / Kg", img: "/ragi2.webp" },
    { name: "Corn", price: "45 / Kg", img: "/corn.webp" },
    { name: "Fruits", price: "200 / Kg", img: "/fruits.jfif" },
    { name: "Vegetables", price: "100 / Kg", img: "/vegetable.jpg" },
    { name: "Coconut", price: "80 / Piece", img: "/coconut.jpg" },
    { name: "Natural Drink", price: "50", img: "/drinknatural.webp" },
    { name: "Mize", price: "50", img: "/maize.webp" },
    { name: "Sugarcan", price: "50 / Piece", img: "/sugarcan.webp" },
    { name: "Groundnut", price: "190 / 1Kg", img: "/groundnut.webp" },
    { name: "Cotton", price: 9890 , img: "/cooton.webp" },
    { name: "Tomato", price: "100 / Kg", img: "/tomato.webp" },
    { name: "Watermelon", price: "70 / Kg", img: "/watermilon.webp" },
    { name: "Cabbage", price: "70 / Kg", img: "/cabage.webp" },
    { name: "Onion", price: "90 / KG", img: "/onion.webp" },
    { name: "Potato", price: "75 / Kg", img: "/potato.webp" },
    { name: "Cauliflower", price: "70 / Kg", img: "/cauliflower.webp" },
    { name: "Turmeric", price: "350 / Kg", img: "/manjal.webp" }
  ];

  return (
    <div className="transporting-container">
      <h2>Select Your Orders</h2>

      <div className="transporting-grid">
        {products.map((item, index) => (
          <div className="transporting-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <p>₹{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

    </div>
  );
}