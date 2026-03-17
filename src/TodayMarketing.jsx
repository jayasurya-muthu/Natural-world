import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";



export default function TodayMarketing() {

    const [search, setSearch] = useState("");

    const marketPrices = [
        { crop: "Rice", price: "₹2200 / Quintal", market: "Chennai Market" },
        { crop: "Wheat", price: "₹2100 / Quintal", market: "Delhi Market" },
        { crop: "Ragi", price: "₹1800 / Quintal", market: "Bangalore Market" },
        { crop: "Maize", price: "₹1700 / Quintal", market: "Hyderabad Market" },
        { crop: "Sugarcane", price: "₹300 / Ton", market: "Coimbatore Market" },
        { crop: "Cotton", price: "₹6500 / Quintal", market: "Gujarat Market" },
        { crop: "Groundnut", price: "₹5500 / Quintal", market: "Madurai Market" },
        { crop: "Millets", price: "₹2400 / Quintal", market: "Salem Market" }
    ];

    const filtered = marketPrices.filter((item) =>
        item.crop.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <div className="dashboard" style={{backgroundRepeat:"no-repeat"}}>

            <h1>🌾 Agricultural Marketing Level</h1>

            <input
                type="text"
                placeholder="Search crop..."
                className="search"
                onChange={(e) => setSearch(e.target.value)}
            />

            <div className="market-grid">

                {filtered.map((item, index) => (
                    <div className="market-card" key={index}>

                        <h2>{item.crop}</h2>

                        <p className="price">{item.price}</p>

                        <p className="market">📍 {item.market}</p>

                    </div>
                ))}

            </div>
            <br />

            <div>
                <MarketChartDashboard />
            </div>

        </div>
    );
}

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

function MarketChartDashboard() {

    const data = {
        labels: ["Rice", "Wheat", "Ragi", "Maize", "Cotton", "Groundnut", "Millets"],
        datasets: [
            {
                label: "Daily Market Price (₹ per Quintal)",
                data: [2200, 2100, 1800, 1700, 6500, 5500, 2400],
                backgroundColor: [
                    "#2e7d32",
                    "#388e3c",
                    "#43a047",
                    "#66bb6a",
                    "#81c784",
                    "#a5d6a7",
                    "#c8e6c9"
                ],
                borderRadius: 6
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: "top"
            },
            title: {
                display: true,
                text: "🌾 Agricultural Daily Market Prices"
            }
        }
    };

    return (

        <div className="chart-dashboard">

            <h1>Agricultural Market Price </h1>

            <div className="chart-container">
                <Bar data={data} options={options} />
            </div>

        </div>

    );

}