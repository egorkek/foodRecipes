import React from 'react'
import classes from './App.css'
import {connect} from 'react-redux'
import {Header, Layout} from './components/components'
import {getRecipes} from "./store/actions";
import RecipesList from "./components/RecipesList/RecipesList";
import {APP_ID, API_KEY} from './store/actionTypes'
class App extends React.Component{
    componentDidMount(){
        this.props.getRecipes(APP_ID, API_KEY)
    }
    render(){
        return(
            <Layout>
                <Header/>
                <div className={classes.App}>
                    <h1 className={classes.Head}> "{this.props.state.recipeType}"</h1>
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
