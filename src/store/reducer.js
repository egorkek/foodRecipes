import {GET_RECIPES_START, GET_RECIPES_SUCCESS, CHANGE_TYPE} from "./actionTypes";

const initialState = {
    recipes:[],
    currentPage: 0,
    isLogged: false,
    loading: true,
    recipeType: 'Popular'
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
        case CHANGE_TYPE:
            return {
                ...state,
                recipes: [],
                recipeType: action.payload,
                currentPage:0
            }
        default:
            return state

    }

}
