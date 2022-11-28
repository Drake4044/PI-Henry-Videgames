import "./gameDetail.css";
import React, { useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { getGameDetail } from "../../redux/actions";

const GameDetail = (props) => {

    const id = props.match.params.id

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGameDetail(id))
    },[dispatch,id])

    const game = useSelector(state => state.gameDetail)

    return(
        <div className="container">
            <img src={game.image} alt="Imagen del juego" />
            <h1>{game.name}</h1>
            <h3>{game.genre}</h3>
            <p>{game.description}</p>
            <h3>{game.platforms}</h3>
        </div>
    )
}


export default GameDetail