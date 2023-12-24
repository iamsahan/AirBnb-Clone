import React from "react";
import grid from "../images/photo-grid.png"
import './index.css'

function Hero() {
    return (
        <section className="hero">
            <img src={grid} alt="image-grid" className="hero-img"/>
            <h1 className="hero-header">Online Experiences</h1>
            <p className="hero-text">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home. 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsum, eum veritatis nulla impedit incidunt porro 
            facere et eaque aperiam?</p>
        </section>
    )
}

export default Hero;