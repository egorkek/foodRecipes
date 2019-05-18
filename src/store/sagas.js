import {getRecipesStart, getRecipesSuccess} from './actions.js'
import {put, takeEvery, call, select} from 'redux-saga/effects'
import {GET_RECIPES, CHANGE_TYPE, APP_ID, API_KEY} from "./actionTypes";

export function* Watcher() {
    yield takeEvery(GET_RECIPES, fetchRecipes)
    yield takeEvery(CHANGE_TYPE, fetchRecipes)

}
const getPage = (state) => state.currentPage;
const getType = (state)=> state.recipeType
export function* fetchRecipes(info) {
    const currentPage = yield select(getPage)
    const currentType = yield select(getType)
    yield put(getRecipesStart());
   const data = yield call(()=>{
       return fetch(`https://api.edamam.com/search?q=${currentType}&from=${currentPage}&app_id=${APP_ID}&app_key=${API_KEY}`)
           .then(res=> res.json())
           .then(res=>res.hits)
    });
    console.log(data)
    yield put(getRecipesSuccess(data))

}
