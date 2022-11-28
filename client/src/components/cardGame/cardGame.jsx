import "./cardGame.css";
import React from "react";
import { Link } from "react-router-dom";


const CardGames = ({ id, image, name, platforms }) => {

    const idUrl = id.split(" ").splice(1).join()

    return (
        <div className="card">
            <Link to={`/videogames/${idUrl}`}>
                <img src={image} alt="imagen del juego" />
                <h1>{name}</h1>
                <p>{platforms}</p>
            </Link>
        </div>  
    )
}


export default CardGames