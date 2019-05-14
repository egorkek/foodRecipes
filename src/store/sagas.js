import {getRecipesStart, getRecipesSuccess} from './actions.js'
import {put, takeEvery, call, select} from 'redux-saga/effects'
import {GET_RECIPES} from "./actionTypes";

export function* Watcher() {
    yield takeEvery(GET_RECIPES, fetchRecipes)

}
const getProject = (state) => state.currentPage
export function* fetchRecipes(info) {
   yield put(getRecipesStart());
   const x = yield select(getProject)
    console.log(x)

   const data = yield call(()=>{
       return fetch(`https://api.edamam.com/search?q=popular&app_id=${info.appid}&app_key=${info.apikey}`)
           .then(res=>res.json())
    });

    console.log(data)
    yield put(getRecipesSuccess(data))

}
