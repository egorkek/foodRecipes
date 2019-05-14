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
            </section>
            {/*<div>*/}
            {/*    <span>{props.totalTime}</span>*/}
            {/*    <span>{props.totalWeight}</span>*/}
            {/*</div>*/}



        </div>
    )
}
export default Recipe
