import {GET_RECIPES_START, GET_RECIPES_SUCCESS, GET_RECIPES} from './actionTypes'
export function getRecipesStart() {
    return{
        type: GET_RECIPES_START,
    }
}
export function getRecipes(appid, apikey) {
    return{
        type: GET_RECIPES,
        appid,
        apikey

    }
}

export function getRecipesSuccess(recipes) {
    return{
        type: GET_RECIPES_SUCCESS,
        payload: recipes,
    }

}
