import "./gameDetail.css";
import React, { useEffect } from "react";  
import { useDispatch, useSelector } from "react-redux";
import { clearGameDetail, getGameDetail } from "../../redux/actions";
import { Link } from "react-router-dom";

const GameDetail = (props) => {

    const id = props.match.params.id
    console.log(props);

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getGameDetail(id))
        return () => {
            dispatch(clearGameDetail())
        }
    },[dispatch,id])

    const game = useSelector(state => state.gameDetail)

    return(
        <div className="container">
            <Link to="/videogames">
                <button>ATRAS</button>
                </Link>
            <img src={game.image} alt="Imagen del juego" />
            <h1>{game.name}</h1>
            <h3>{game.genre}</h3>
            <p>{game.description}</p>
            <h3>{game.platforms}</h3>
        </div>
    )
}


export default GameDetail