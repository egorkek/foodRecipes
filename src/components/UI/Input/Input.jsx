import React from 'react'
import classes from './Input.css'
import image from '../../../images/icon-loupe.svg'

const Input = props =>{
    return(
        <div className={classes.Input}>
            <input type="text" placeholder='Search recipe' value={props.value} onChange={props.onChange}/>
            <img src={image}/>
        </div>
    )
}
export default Input
