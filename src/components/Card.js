import React from "react";
import photo from "../images/katie-zaferes.png";
import star from "../images/star.png";
import './index.css'

function Card(props) {
    return(
        <div className="card">
            <span className="card-status">sold out</span>
            <img src={props.img} className="card-img"/>
            <div className="card-stat">
                <img src={star} className="card-star"/>
                <span>{props.rating}</span>
                <span className="grey">{props.views}</span>
                <span className="grey">{props.country}</span>
            </div>
            <p>{props.text}</p>
            <p><span className="bold">From {props.price}</span> / person</p>
        </div>
    )
}

export default Card;