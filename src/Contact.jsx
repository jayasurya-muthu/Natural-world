import React, { useRef } from 'react'
import emailjs from '@emailjs/browser';

export default function Contact() {
  const form=useRef();

  const sendContact=(e)=>{
    e.preventDefault();

    emailjs
    .sendForm('service_mj41wqq','template_gioqctf',form.current,{
      publicKey:'62yPGzFtGmgryS0lt',
    })
    .then(
      ()=>{
        alert("SUCCESS!")
      },
      (error)=>{
        alert("FAILED...",error.text)

      }
    )
  }
  return (
    <div className="contact" style={{backgroundImage:"url('contactimageback.jpg')",backgroundSize:"cover",height:"100%",width:"100%"}}>
      <div className="contact-header">
        <br/>
        <small>Contact Surya...</small>
        <br/>
        <br/>
        <h1>Contact Us</h1>
        <b>We would love to hear from you about our farming products.</b>
      </div>

      <div className="contact-container" style={{paddingRight:"20px"}}>

        <div className="contact-form" style={{backgroundColor:"black",opacity:"0.6",color:"white"}}>

          <h2>Send Message</h2>

          <form ref={form} onSubmit={sendContact} style={{opacity:"1.7"}}>

            <input type="text" name="contact-username" placeholder="Your Name" required />

            <input type="email" name="contact-useremail" placeholder="Your Email" required />

            <input type="text" name="contact-usersubject" placeholder="Subject" required />

            <input placeholder="Your Message" name="contact-usermessage" rows="5"></input>

            <button type="submit">Send Message</button>

          </form>

        </div>


        <div className="contact-info" style={{opacity:0.7}}>

          <h2>Our Office</h2>

          <p><strong>Address:</strong> Chennai, Tamil Nadu, India</p>

          <p><strong>Phone:</strong> +91 6385529199</p>

          <p><strong>Email:</strong> suryaexport@gmail.com</p>

          <p>
            We export fresh agricultural products such as vegetables,
            fruits, grains, and organic farming products worldwide.
          </p>

        </div>
        <br/>
        <br/>

      </div>
      <footer className="tfooter">

        <div className="footer-container">

          {/* Company Info */}
          <div className="footer-section">
            <h2>AgroExport</h2>
            <p>
              Supplying fresh agricultural products worldwide with
              quality assurance and fast delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About</li>
              <li>Products</li>
              <li>Contact</li>
            </ul>
          </div>

          {/* Services */}
          <div className="footer-section">
            <h3>Services</h3>
            <ul>
              <li>Order Management</li>
              <li>Shipment Tracking</li>
              <li>Export Analytics</li>
            </ul>
          </div>

          {/* Contact */}
          <div className="footer-section">
            <h3>Contact</h3>
            <p>Email: surya@agroexport.com</p>
            <p>Phone: +91 6385529199</p>
            <p>Location: India</p>
          </div>

        </div>

        <div className="footer-bottom">
          <p>© 2026 SuryaExport. All Rights Reserved.</p>
        </div>

      </footer>

    </div>
    

  )
}
