import {GET_RECIPES_START, GET_RECIPES_SUCCESS} from "./actionTypes";

const initialState = {
    recipes:[
        {
            label: "Fish Tikka Kebab Recipe recipes",
            totalTime: 35,
            totalWeight: 1775.0917876106746,
            image: "https://www.edamam.com/web-img/18b/18bfc39b58811d878514eea33bd981ea",
        }
    ],
    currentPage: 0,
    isLogged: false,
    loading: true
};

export default function reducer(state= initialState, action) {
    switch (action.type) {
        case GET_RECIPES_SUCCESS:
            return {
                ...state,
                recipes: action.payload,
                loading: false
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
