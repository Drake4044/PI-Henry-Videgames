import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { createGame } from "../../redux/actions"


const CreateGame = () => {

    const dispatch = useDispatch()

    const [game, setGame] = useState({
        name: "",
        released: 0,
        description: "",
        platforms: ""
    })

    const handleChange = e => {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        dispatch(createGame(setGame))
    }

    return (
        <div>
            <form onSubmit={onSubmit} >
                <label>Nombre del juego: </label>
                <input type="text" name="name" value={game.name} onChange={handleChange} />
                <label>Fecha de lanzamiento: </label>
                <input type="text" name="released" value={game.released} onChange={handleChange} />
                <label>Descripcion del juego: </label>
                <input type="text" name="description" value={game.description} onChange={handleChange} />
                <label>Plataformas: </label>
                <input type="text" name="platforms" value={game.platforms} onChange={handleChange} />
                <button type="submit">Create Game</button>
            </form>
        </div>
    )
}

export default CreateGame