import React from "react";
import fondo from "../../images/fondo.png"
import blockCoin from "../../images/blockCoin.png"
import { Link } from "react-router-dom";



const InitialPage = () => {

    return (
        <div>
            <img src={fondo} alt="Imagen no encontrada" />
            <Link to="/videogames">
                <img src={blockCoin} alt="Aqui el boton Start" />
            </Link>
        </div>
    )
}

export default InitialPage