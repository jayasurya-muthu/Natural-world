import React from "react";

export default function About() {
  return (
    <div className="about-page">

      <div className="about-hero">
        <h1>About Our Farming Agriculture</h1>
        <p>
          We provide high-quality farm products directly from farmers.
          Our mission is to deliver fresh, natural, and organic agricultural
          products to customers worldwide.
        </p>
      </div>

      <section className="about-farming">

        <div className="about-text">
          <h2>Our Farming</h2>

          <p>
            Our farms grow a variety of agricultural products including rice,
            wheat, vegetables, fruits, flowers, and coconuts. We focus on
            natural farming methods to ensure healthy food.
          </p>

          <p>
            Farmers carefully cultivate crops using sustainable techniques.
            This ensures high-quality harvests and supports the environment.
          </p>

        </div>

        <div className="about-image">
          <img
            src="https://images.unsplash.com/photo-1500595046743-cd271d694d30"
            alt="Farming"
          />
        </div>

      </section>

      <section className="about-transport">

        <div className="transport-image">
          <img
            src="https://wallpaperbat.com/img/916792-digital-transformation-in-transportation-and-logistics.jpg"
            alt="Transport"
          />
        </div>

        <div className="transport-text">

          <h2>Transport & Export</h2>

          <p>
            We provide fast and secure transport services for agricultural
            products. Our logistics network ensures that products are delivered
            fresh and on time.
          </p>

          <ul>
            <li>🚚 Road Transport for local delivery</li>
            <li>🚂 Train Transport for bulk products</li>
            <li>✈️ Flight Export for international shipping</li>
            <li>📦 Safe packaging for long-distance transport</li>
            <li>🚢 Marine transport for international shipping</li>
          </ul>

        </div>

      </section>

    </div>
  );
}
