import React from 'react'
import classes from './App.css'
import {connect} from 'react-redux'
import {Header, Layout, Loader} from './components/components'
import {getRecipes} from "./store/actions";
import RecipesList from "./components/RecipesList/RecipesList";
export const APP_ID = '129401a1';
export const API_KEY='0e32cfd7e1f81e84eab471ae5deb3237';


class App extends React.Component{
    componentDidMount(){
        this.props.getRecipes(APP_ID, API_KEY)
    }
    render(){
        return(
            <Layout>
                <Header/>
                <div className={classes.App}>
                     <RecipesList/>
                </div>
            </Layout>
        )
    }
}

function mapStateToProps(state) {
    return{
        state: state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        getRecipes: (appkey, appid)=>dispatch(getRecipes(appkey, appid))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
