import React from 'react'
import { useNavigate } from 'react-router-dom'

const products = [
  {
    name: "Rice",
    material: [
      { name: "White Rice", img: "/whiterice.webp" },
      { name: "Brown Rice", img: "/brownrice.webp" },
      { name: "Basmati", img: "/basmati.webp" },
      { name: "Black Rice", img: "/blackrice.webp" },
      { name: "Jasmine Rice", img: "/jasminerice.webp" },
      { name: "Sticky Rice", img: "/stickyrice.jpg" },
      { name: "Carolina Gold Rice", img: "/carolgold.webp" }
    ],
    img: "/rice.jpg"
  },
  {
    name: "Wheat",
    material: [
      { name: "Hard Red", img: "/hadredwheat.webp" },
      { name: "Soft Red", img: "/softred.webp" },
      { name: "Soft White", img: "/softwhite.webp" },
      { name: "Hard White", img: "/hardwhite.webp" },
      { name: "Durum", img: "/durum.webp" },
      { name: "Kamut", img: "/kamut.webp" },
      { name: "Emmer", img: "/emmer.webp" },
      { name: "Einkorn", img: "/einkorn.webp" },
      { name: "Spelt", img: "/spelt.webp" }
    ],
    img: "/wheat2.jpg"
  },
  {
    name: "Ragi Millet",
    material: [
      { name: "Finger Millet (Ragi)", img: "/Finger Millet (Ragi).webp" },
      { name: "Brown Ragi", img: "/Brown Ragi.webp" },
      { name: "White Ragi", img: "/White Ragi.jpg" },
      { name: "Organic Ragi", img: "/Organic Ragi.webp" }
    ],
    img: "/ragi2.webp"
  },
  {
    name: "Corn",
    material: [
      { name: "Sweet Corn", img: "/Sweet Corn.webp" },
      { name: "Dent Corn", img: "/Dent Corn.webp" },
      { name: "Flint Corn", img: "/Flint Corn.jfif" },
      { name: "Popcorn", img: "/Popcorn.webp" },
      { name: "Baby Corn", img: "/Baby Corn.webp" }
    ],
    img: "/corn.webp"
  },
  {
    name: "Fruits",
    material: [
      { name: "Apple", img: "/apple.webp" },
      { name: "Banana", img: "/banana.webp" },
      { name: "Mango", img: "/mango.webp" },
      { name: "Orange", img: "/orange.webp" },
      { name: "Grapes", img: "/grapes.webp" },
      { name: "Pineapple", img: "/pineapple.webp" },
      { name: "Papaya", img: "/papaya.webp" },
      { name: "Guava", img: "/guva.webp" }
    ],
    img: "/fruits.jfif"
  },
  {
    name: "Vegetables",
    material: [
      { name: "Cabbage", img: "/Cabbage.jpg" },
      { name: "Cauliflower", img: "/Cauliflower1.webp" },
      { name: "Onion", img: "/onionveg.webp" },
      { name: "Pumpkin", img: "/Pumpkin.webp" },
      { name: "Cucumber", img: "/Cucumber.webp" },
      { name: "Tomato", img: "/Tomatoveg.webp" },
      { name: "Brinjal", img: "/Brinjal.webp" },
      { name: "Capsicum", img: "/Capsicum.webp" }
    ],
    img: "/vegetable.jpg"
  },
  {
    name: "Coconut",
    material: [
      { name: "Tender Coconut", img: "/Tender Coconut.webp" },
      { name: "Mature Coconut", img: "/Mature Coconut.webp" },
      { name: "Copra", img: "/Copra.webp" },
      { name: "Coconut Milk", img: "/Coconut Milk.webp" },
      { name: "Coconut Powder", img: "/Coconut Powde.webp" }
    ],
    img: "/coconut.jpg"
  },
  {
    name: "Natural Drink",
    material: [
      { name: "Sugarcane Juice", img: "/Sugarcane Juice.webp" },
      { name: "Tender Coconut Water", img: "/Tender Coconut Water.webp" },
      { name: "Fruit Juices", img: "/Fruit Juices.webp" },
      { name: "Herbal Drinks", img: "/Herbal Drinks.webp" },
      { name: "Buttermilk", img: "/Buttermilk.webp" }
    ],
    img: "/drinknatural.webp"
  },

  {
    name: "Sugarcane",
    material: [
      { name: "Red Sugarcane", img: "/Red Sugarcane.webp" },
      { name: "White Sugarcane", img: "/White Sugarcane.webp" },
      { name: "Organic Sugarcane", img: "/Organic Sugarcane.webp" }
    ],
    img: "/sugarcan.webp"
  },
  {
    name: "Groundnut",
    material: [
      { name: "Bold Groundnut", img: "/Bold Groundnut.webp" },
      { name: "Java Groundnut", img: "/Java Groundnut.webp" },
      { name: "Raw Groundnut", img: "/Raw Groundnut.webp" },
      { name: "Roasted Groundnut", img: "/Roasted Groundnut.webp" }
    ],
    img: "/groundnut.webp"
  },
  {
    name: "Cotton",
    material: [
      { name: "Upland Cotton", img: "/Upland Cotton.webp" },
      { name: "Egyptian Cotton", img: "/Egyptian Cotton.webp" },
      { name: "Organic Cotton", img: "/Organic Cotton.webp" },
      { name: "Pima Cotton", img: "/Pima Cotton.webp" }
    ],
    img: "/cooton.webp"
  },
  {
    name: "Tomato",
    material: [
      { name: "Cherry Tomato", img: "/Cherry Tomato.webp" },
      { name: "Roma Tomato", img: "/Roma Tomato.webp" },
      { name: "Beefsteak Tomato", img: "/Beefsteak Tomato.webp" },
      { name: "Plum Tomato", img: "/Plum Tomato.webp" }
    ],
    img: "/tomato.webp"
  },
  {
    name: "Watermelon",
    material: [
      { name: "Seedless Watermelon", img: "/Seedless Watermelon.webp" },
      { name: "Seeded Watermelon", img: "/Seeded Watermelon.webp" },
      { name: "Yellow Watermelon", img: "/Yellow Watermelon.webp" },
      { name: "Mini Watermelon", img: "/Mini Watermelon.webp" }
    ],
    img: "/watermilon.webp"
  },
  {
    name: "Cabbage",
    material: [
      { name: "Green Cabbage", img: "/Green Cabbage.webp" },
      { name: "Red Cabbage", img: "/Red Cabbage.webp" },
      { name: "Savoy Cabbage", img: "/Savoy Cabbage.webp" },
      { name: "Napa Cabbage", img: "/Napa Cabbage.webp" }
    ],
    img: "/cabage.webp"
  },
  {
    name: "Onion",
    material: [
      { name: "Red Onion", img: "/redonion.webp" },
      { name: "White Onion", img: "/whiteonion.webp" },
      { name: "Yellow Onion", img: "/yelloonion.webp" },
      { name: "Spring Onion", img: "/spring.webp" },
      { name: "Shallots", img: "/Shallots.webp" }
    ],
    img: "/onion.webp"
  },
  {
    name: "Potato",
    material: [
      { name: "Russet Potato", img: "/Russet Potato.webp" },
      { name: "Red Potato", img: "/Red Potato.webp" },
      { name: "White Potato", img: "/White Potato.webp" },
      { name: "Sweet Potato", img: "/Sweet Potato.webp" },
      { name: "Fingerling Potato", img: "/Fingerling Potato.webp" }
    ],
    img: "/potato.webp"
  },
  {
    name: "Cauliflower",
    material: [
      { name: "White Cauliflower", img: "/White Cauliflower.webp" },
      { name: "Purple Cauliflower", img: "/Purple Cauliflower.webp" },
      { name: "Orange Cauliflower", img: "/Orange Cauliflower.webp" },
    ],
    img: "/cauliflower.webp"
  },
  {
    name: "Turmeric",
    material: [
      { name: "Fresh Turmeric", img: "/Fresh Turmeric.webp" },
      { name: "Dry Turmeric", img: "/Dry Turmeric.webp" },
      { name: "Powdered Turmeric", img: "/Powdered Turmeric.webp" },
      { name: "Organic Turmeric", img: "/Organic Turmeric.webp" }
    ],
    img: "/manjal.webp"
  }
]

export default function Products() {
  const navigate = useNavigate()

  const viewMaterials = (item) => {
    navigate('/ViewMaterials', { state: { name: item.name, material: item.material } })
  }

  return (
    <div className="products-body">
      <h2>Our Products</h2>
      <div className="product-grid">
        {products.map((item, index) => (
          <div className="product-card" key={index}>
            <img src={item.img} alt={item.name} />
            <h3>{item.name}</h3>
            <button onClick={() => viewMaterials(item)}>
              View Materials
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}