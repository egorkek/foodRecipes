import React, {useState} from 'react'
import classes from './RecipesList.css'
import {connect} from 'react-redux'
import Recipe from "../Recipe/Recipe";
import Button from "../UI/Button/Button";
import {getRecipes} from '../../store/actions'
import {API_KEY, APP_ID} from '../../App'
import {Loader} from "../components";

const RecipesList = props=>{
    const [firstLoading, setFirstLoading] = useState(true)
    function moreContent() {
        setFirstLoading(false)
        props.showMore(APP_ID, API_KEY);
    }
    function renderList(){
        if (props.state.loading && firstLoading){
            return (<Loader main={true}/>)
        }
        else {
            return (
                <div className={classes.RecipesList}>
                    {
                        props.state.recipes.map((el, index) => {
                            if (el.recipe.image)
                            return (
                                <Recipe
                                    label={el.recipe.label}
                                    image={el.recipe.image}
                                    totalTime={el.recipe.totalTime}
                                    totalWeight={el.recipe.totalWeight}
                                    healthLabels={el.recipe.healthLabels}
                                    source={el.recipe.source}
                                    ingredients={el.recipe.ingredients}
                                    calories={el.recipe.calories}
                                    key={el.recipe.label}
                                />
                            )
                        })
                    }
                    {props.state.loading ? <Loader/> : <Button onClick={() => {
                        moreContent()
                    }}>Show more</Button>
                    }

                </div>
            )
        }
    }
    return(
        <React.Fragment>
            {renderList()}
        </React.Fragment>

    )
}

function mapStateToProps(state) {
    return{
        state: state
    }
}
function mapDispatchToProps(dispatch) {
    return{
        showMore: (appid, appkey)=>dispatch(getRecipes(appid, appkey))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesList)
