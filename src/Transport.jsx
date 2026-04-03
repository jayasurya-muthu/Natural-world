import React, { useState } from "react";

export default function Transport() {

  const [toastMessage, setToastMessage] = useState("");
  const [show, setShow] = useState(false);

  const showToast = (message) => {
    setToastMessage(message);
    setShow(true);

    setTimeout(() => {
      setShow(false);
    }, 1000);
  };

  const addToCart = (item) => {
    let existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    existingCart.push(item);

    localStorage.setItem("cart", JSON.stringify(existingCart));

    showToast("Added To Cart: " + item.name);
  };

  const products = [
    { name: "Rice", price: "80 / Kg", img: "/rice.jpg", category: "Grains" },
    { name: "Wheat", price: "60 / Kg", img: "/wheat2.jpg", category: "Grains" },
    { name: "Ragi Millet", price: "90 / Kg", img: "/ragi2.webp", category: "Grains" },
    { name: "Corn", price: "45 / Kg", img: "/corn.webp", category: "Grains" },

    { name: "Grapes", price: "200 / Kg", img: "/grapes.webp", category: "Fruits" },
    { name: "Watermelon", price: "70 / Kg", img: "/watermilon.webp", category: "Fruits" },
    { name: "Apple", price: "120 / Kg", img: "/apple.webp", category: "Fruits" },
    { name: "Orange", price: "100 / Kg", img: "/orange.webp", category: "Fruits" },
    { name: "Strawberry", price: "170 / Kg", img: "/stawberry.webp", category: "Fruits" },
    { name: "Pineapple", price: "180 / Kg", img: "/pineapple.webp", category: "Fruits" },
    { name: "Pomegranate", price: "190 / Kg", img: "/mathulai.webp", category: "Fruits" },
    { name: "Mango", price: "150 / Kg", img: "/mango.webp", category: "Fruits" },
    { name: "Coconut", price: "80 / Piece", img: "/coconut.jpg", category: "Fruits" },

    { name: "Beetroot", price: "100 / Kg", img: "/beetroot.webp", category: "Vegetables" },
    { name: "Tomato", price: "100 / Kg", img: "/tomato.webp", category: "Vegetables" },
    { name: "Cabbage", price: "70 / Kg", img: "/cabage.webp", category: "Vegetables" },
    { name: "Onion", price: "90 / Kg", img: "/onion.webp", category: "Vegetables" },
    { name: "Potato", price: "75 / Kg", img: "/potato.webp", category: "Vegetables" },
    { name: "Cauliflower", price: "70 / Kg", img: "/cauliflower.webp", category: "Vegetables" },
    { name: "Ladiesfinger", price: "80 / Kg", img: "/ladiesfinger.jpg", category: "Vegetables" },
    { name: "Carrot", price: "120 / Kg", img: "/carrot.webp", category: "Vegetables" },

    { name: "Groundnut", price: "190 / Kg", img: "/groundnut.webp", category: "Others" },
    { name: "Sugarcane", price: "50 / Piece", img: "/sugarcan.webp", category: "Others" },
    { name: "Turmeric", price: "350 / Kg", img: "/manjal.webp", category: "Others" },
    { name: "Cotton", price: "9890", img: "/cooton.webp", category: "Others" },
    { name: "Natural Drink", price: "50", img: "/drinknatural.webp", category: "Others" }
  ];

  const categories = ["Grains", "Fruits", "Vegetables", "Others"];

  return (
    <div className="transporting-container">

      {/* ✅ Toast Message */}
      {show && <div className="toast show">{toastMessage}</div>}

      <h2>Select Your Orders</h2>

      {categories.map((cat) => (
        <div key={cat}>
          <h2>{cat}</h2>

          <div className="transporting-grid">
            {products
              .filter((item) => item.category === cat)
              .map((item, index) => (
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
      ))}
    </div>
  );
}