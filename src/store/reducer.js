import {GET_RECIPES_START, GET_RECIPES_SUCCESS} from "./actionTypes";

const initialState = {
    recipes:[],
    currentPage: 0,
    isLogged: false,
    loading: true
};

export default function reducer(state= initialState, action) {
    switch (action.type) {
        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: state.recipes.concat(action.payload),
                loading: false,
                currentPage: state.currentPage +10
            }
        case GET_RECIPES_START:
            return {
                ...state,
                loading: true
            }
        default:
            return state

    }

}
