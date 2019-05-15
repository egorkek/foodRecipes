import React from 'react'
import classes from './Recipe.css'

const Recipe = props=>{
    return(
        <div className={classes.Recipe}>
            <img src={props.image} alt=""/>
            <section>
                <div>
                    {props.healthLabels.map((obj,index)=>{
                        return(
                            <span key={index}>{obj} </span>
                        )
                    })}
                </div>
                <h1>{props.label}</h1>
                <p>Source: {props.source}</p>
                <div className={classes.Info}>
                    <p>Ingridients: {props.ingredients.length}</p>
                    <p>Calories: {Math.round(props.calories)}</p>
                    <p>Total weight: {Math.round(props.totalWeight)}</p>
                    <p>{props.totalTime === 0 ? null : (<span>Total time: {props.totalTime} min </span>)}</p>

                </div>
            </section>
        </div>
    )
}
export default Recipe
