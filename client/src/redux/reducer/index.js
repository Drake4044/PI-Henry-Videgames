import { GET_ALL_GAMES, GET_GAME_DETAIL, CLEAR_GAME_DETAIL, GET_GAMES_BY_NAME, DELETE_GAME } from "../actions"


const initialState = {
    games: [],
    gameDetail: {},
}

const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_ALL_GAMES:
            return {
                ...state,
                games: action.payload   
            }
        case GET_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case CLEAR_GAME_DETAIL:
            return {
                ...state,
                gameDetail: action.payload
            }
        case GET_GAMES_BY_NAME:
            return {
                ...state,
                games: action.payload
            }
        case DELETE_GAME:
            return {
                ...state,
                games: state.games.filter( g => g.id !== action.payload)
            }
        default: return {...state}
    }
}

export default rootReducer;