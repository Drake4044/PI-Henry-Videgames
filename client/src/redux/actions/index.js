import axios from "axios";

export const GET_ALL_GAMES  = "GET_ALL_GAMES" 
export const GET_GAME_DETAIL  = "GET_GAME_DETAIL" 
export const CLEAR_GAME_DETAIL = "CLEAR_GAME_DETAIL"
export const GET_GAMES_BY_NAME = "GET_GAMES_BY_NAME"
export const DELETE_GAME = "DELETE_GAME"


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


export const clearGameDetail = () => {
    return {
        type: CLEAR_GAME_DETAIL,
        payload: {}
    }
} 

export const getGamesByName = (name) => {
    return async dispatch => {
        try {
            const games = await
            axios(`http://localhost:3001/videogames?name=${name}`)
            dispatch({
            type: GET_GAMES_BY_NAME,
            payload: games.data
        })
        } catch (error) {
            console.log(error.response.data);
        }
        
    }
}

export const deleteGame = (id) =>{
    return {
        type: DELETE_GAME,
        payload: id
    }
}

