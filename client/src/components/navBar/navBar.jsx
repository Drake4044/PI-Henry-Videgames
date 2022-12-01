import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { getGamesByName, filterGenre } from "../../redux/actions";


const NavBar = () => {

    const [ game, setGame ] = useState({ name: "" })

    const dispatch = useDispatch()

    const handleChange = (e) => {
        setGame({ name: e.target.value })
        // filtrado()
    }

    const filtrado = () => {
        dispatch(filterGenre(game.name))
    }

    return (
        <div>
            <input type="search" placeholder="Nombre de juego a buscar" value={game.name} onChange={handleChange} />
            <button onClick={filtrado} > Buscar/ Refrescar </button>

        </div>
    )
}

export default NavBar