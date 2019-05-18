import React, {useState} from 'react'
import classes from './Recipe.css'

const Recipe = props=>{
    const [arrow, setArrow] = useState('Arrow')
    function changeArrowHandler(){
        arrow === 'Arrow' ? setArrow('ArrowTop') : setArrow('Arrow')
    }
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
                    <p onClick={()=>changeArrowHandler()}>Ingridients: {props.ingredients.length} <i className={classes[arrow]} title="arrow icon"></i></p>
                    <p>Calories: {Math.round(props.calories)}</p>
                    <p>Total weight: {Math.round(props.totalWeight)}</p>
                    <p>{props.yield} <i className="fas fa-user-alt"/></p>
                    <p>{props.totalTime === 0 ? null : (<span><i className="fas fa-clock"></i>   {props.totalTime} min </span>)}</p>
                </div>
            </section>
        </div>
    )
}
export default Recipe
