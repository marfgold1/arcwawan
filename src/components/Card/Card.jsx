import React from "react";
import "./Card.scss";

export const Card = (props) => {
    return (
        <div className={props.className || "card"} style={
            props.image && {backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.9)), url(${props.image})`}
        }>
            <button></button>
            <div className="card-body">
                {props.title && (
                    <h1><small>{props.title}</small></h1>
                )}
                {props.body && (
                    <p>{props.body}</p>
                )}
            </div>
        </div>
    )
}