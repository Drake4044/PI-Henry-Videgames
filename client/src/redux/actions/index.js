import axios from "axios";

export const GET_ALL_GAMES  = "GET_ALL_GAMES" 
export const GET_GAME_DETAIL  = "GET_GAME_DETAIL" 

export const getVideogames = () => {
    return async dispatch => {
            const games = await 
            axios("http://localhost:3001/videogames");
            dispatch({
                type: GET_ALL_GAMES,
                payload: games.data
            });
        } 
}

export const getGameDetail = (id) => {
    return async dispatch => {
        const gameDetail = await 
        axios(`http://localhost:3001/videogames/${id}`)
        dispatch({
            type: GET_GAME_DETAIL,
            payload: gameDetail.data
        })
    }
}