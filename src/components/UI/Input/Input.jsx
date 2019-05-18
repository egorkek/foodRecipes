import React from 'react'
import classes from './Input.css'
import image from '../../../images/icon-loupe.svg'

const Input = props =>{
    function onEnter(e) {
        if (e.key === 'Enter'){
            props.onSearch()
        }

    }
    return(
        <div onKeyDown={(e)=>{onEnter(e)}} className={classes.Input}>
            <input type="text" placeholder='Search recipe' value={props.value} onChange={props.onChange}/>
            <img onClick={props.onSearch} src={image}/>
        </div>
    )
}
export default Input
