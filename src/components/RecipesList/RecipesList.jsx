import React from 'react'
import classes from './RecipesList.css'
import {connect} from 'react-redux'
import Recipe from "../Recipe/Recipe";
import Button from "../UI/Button/Button";

const RecipesList = props=>{

    console.log(props)
    return(
        <div className={classes.RecipesList}>
                {
                    props.state.recipes.hits.map((el,index)=>{
                        return(
                            <Recipe
                                label={el.recipe.label}
                                image={el.recipe.image}
                                totalTime={el.recipe.totalTime}
                                totalWeight={el.recipe.totalWeight}
                                healthLabels={el.recipe.healthLabels}
                                key={el.recipe.label}
                            />
                        )
                    })
                }
            <Button>Show more</Button>

        </div>
    )
}

function mapStateToProps(state) {
    return{
        state: state
    }
}

export default connect(mapStateToProps)(RecipesList)
