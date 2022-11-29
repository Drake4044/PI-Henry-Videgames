import "./cardGame.css";
import React from "react";
import { Link } from "react-router-dom";


const CardGames = ({ id, image, name, platforms }) => {

    return (
        <div className="card">
            <Link to={`/videogames/${id}`}>
                <img src={image} alt="imagen del juego" />
                <h1>{name}</h1>
                <p>{platforms}</p>
            </Link>
        </div>  
    )
}


export default CardGames