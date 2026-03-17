import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Home() {
  const navigate=useNavigate();

  const converMarketingPage=()=>{
    navigate("/TodayMarketing")

  }
  return (
    <div className="home">

      {/* HERO SECTION */}
      <section className="hero">
        <div className="hero-content">
          <h1>Global Agriculture Export</h1>
          <p>
            Delivering fresh and high quality agricultural products
            to customers around the world.
          </p>

          <button className="btn" onClick={converMarketingPage}>Explore Today Marketing Products</button>
        </div>
      </section>


      {/* SERVICES */}
      <section className="services">

        <h2>Our Export Services</h2>

        <div className="service-grid">

          <div className="service-card">
            <h3>Order Management</h3>
            <p>Easy management of customer orders.</p>
          </div>

          <div className="service-card">
            <h3>Shipment Tracking</h3>
            <p>Track product transportation worldwide.</p>
          </div>

          <div className="service-card">
            <h3>Export Analytics</h3>
            <p>View export statistics and charts.</p>
          </div>

        </div>

      </section>

      <footer className="footer">

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
