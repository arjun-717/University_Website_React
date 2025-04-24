import React from "react";
import './Hero.css';
import dark_arrow from'../../assets/images/dark-arrow.png';

export default function Hero(){
    return <div className="hero container">
        <div className="hero-text">
            <h1>We ensure better education for a better world</h1>
            <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
            <button className="btn">Explore More <img src={dark_arrow} alt="arrow"/> </button>
        </div>
    </div>
}