import {getRecipesStart, getRecipesSuccess} from './actions.js'
import {put, takeEvery, call, select} from 'redux-saga/effects'
import {GET_RECIPES} from "./actionTypes";

export function* Watcher() {
    yield takeEvery(GET_RECIPES, fetchRecipes)

}
const getPage = (state) => state.currentPage
export function* fetchRecipes(info) {
    const currentPage = yield select(getPage)

    yield put(getRecipesStart());

   const data = yield call(()=>{
       return fetch(`https://api.edamam.com/search?q=popular&from=${currentPage}&app_id=${info.appid}&app_key=${info.apikey}`)
           .then(res=> res.json())
           .then(res=>res.hits)
    });

    console.log(data)
    yield put(getRecipesSuccess(data))

}
