import { GET_ALL_GAMES, GET_GAME_DETAIL } from "../actions"


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
                gameDetail: action.payload
            }
        default: return {...state}
    }
}

export default rootReducer;