import React, { useEffect } from "react";
import fondo from "../../images/fondo.png"
import blockCoin from "../../images/blockCoin.png"
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getVideogames } from "../../redux/actions";

const InitialPage = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getVideogames())
    },[dispatch])

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