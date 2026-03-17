import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Products() {
  const navigate=useNavigate();

  const[selectProducts,setSelectProducts]=useState(null);
  const[payment,setPayment]=useState("");
  const[name,setName]=useState();
  const[phoneNumber,setPhoneNumber]=useState();
  const[upiId,setUpiId]=useState();
  const[pin,setPin]=useState("");

  const products=[
    {name:"Rice",price:"80 / Kg",img:"/rice.jpg"},
    {name:"Wheat",price:"60 / Kg",img:"/wheat2.jpg"},
    {name:"Ragi Millet",price:"90 / Kg",img:"/ragi2.webp"},
    {name:"Corn",price:"45 / Kg",img:"/corn.webp"},
    {name:"Fruits",price:"190-200 / Kg",img:"/fruits.jfif"},
    {name:"Vegetables",price:"70-100 / Kg",img:"/vegetable.jpg"},
    {name:"Coconut",price:"60-80 / Piece",img:"/coconut.jpg"},
    {name:"Natural Drink",price:"50-60",img:"/drinknatural.webp"},
    {name:"Mize",price:"50",img:"/maize.webp"},
    {name:"Sugarcan",price:"50-70 / Piece",img:"/sugarcan.webp"},
    {name:"Groundnut",price:"170-190 / 1Kg",img:"/groundnut.webp"},
    {name:"Cotton",price:"9,890 / Quintal",img:"/cooton.webp"},
    {name:"Tomato",price:"50-100 / Kg",img:"/tomato.webp"},
    {name:"Watermelon",price:"70 / Kg",img:"/watermilon.webp"},
    {name:"Cabbage",price:"70 / Kg",img:"/cabage.webp"},
    {name:"Onion",price:"90 / KG",img:"/onion.webp"},
    {name:"Potato",price:"75 / Kg",img:"/potato.webp"},
    {name:"Cauliflower",price:"70 / Kg",img:"/cauliflower.webp"},
    {name:"Turmeric",price:"350 / Kg",img:"/manjal.webp"}
  ]
  const confirmPayment=()=>{
    const id=Math.floor(100+Math.random()*900)

    alert(
      "Payment Successfull ✔"+"Buyer:"+name+ "Payment Method:"+payment+"Order Id:"+id
    )
    navigate("/Transport")
  }

  const pinfillinradio=(num)=>{
    if(pin.length<4){
      setPin(pin+num)
    }
  }
  return (

    <div  className="products-body">
      <section className="products-body">

        <h2>Our Products</h2>

        <div className="seperate-1">
          <b>Agricultural - Food Crops Products</b>
          <div className="product-grid">

            {products.map((item,index)=>(
              <div className='product-card' key={index}>
                <img src={item.img} alt={item.name}/>

                <h3>{item.name}</h3>

                <p>${item.price}</p>

                
              </div>
            ))} 
          </div>

          <div>
            {selectProducts && (
              <div className="order-popup">
                <div className="order-box">
                  <h3>{selectProducts.name}</h3>
                  <p>Total Amount:${selectProducts.price}</p>

                  {payment ==="" &&(
                    <>
                    <h4>Select Payment Method</h4>
                    <button onClick={()=>setPayment("Gpay")}>Pay With Gpay</button>
                    <button onClick={()=>setPayment("Phonepay")}>Pay With Phonepay</button>
                    <button onClick={()=>setPayment("Paytm")}>Pay With Paytm</button>
                    </>
                  )}

                  {payment !=="" && (
                    <>
                    <h4>{payment} Payment</h4>

                    <input type="text" placeholder='Buyer Name' onChange={(e)=>setName(e.target.value)}/>
                    <input type="number" placeholder='Phone Number'onChange={(e)=>setPhoneNumber(e.target.value)}></input>
                    <input type="text" placeholder='UP ID' onChange={(e)=>setUpiId(e.target.value)}/>

                    <button onClick={confirmPayment}>Pay Now</button>

                    </>
                  )}

                  {payment ==="" && (
                    <>
                    <h4>Enter Your PIN</h4>

                    <div clasName="pin-hiden">
                      <input type="radio"checked={pin.length >=1}/> <input type="radio"checked={pin.length >=2}/> <input type="radio" checked={pin.length >=3}/> <input type="radio"checked={pin.length >=4}/>
                    </div>

                    <div className="pin-button">
                      <button onClick={()=>pinfillinradio("1")}>1</button> <button onClick={()=>pinfillinradio("1")}>2</button> <button onClick={()=>pinfillinradio("3")}>3</button>
                      <button onClick={()=>pinfillinradio("4")}>4</button> <button onClick={()=>pinfillinradio("5")}>5</button> <button onClick={()=>pinfillinradio("6")}>6</button>
                      <button onClick={()=>pinfillinradio("7")}>7</button> <button onClick={()=>pinfillinradio("8")}>8</button> <button onClick={()=>pinfillinradio("9")}>9</button>
                      <button onClick={()=>pinfillinradio("0")}>0</button>

                      <button onClick={()=>setPin("")}>Clear</button>
                    </div>
                    </>
                  )}





                </div>
              </div>
            )}
          </div>

        </div>



      </section>

    </div>
  )
}
