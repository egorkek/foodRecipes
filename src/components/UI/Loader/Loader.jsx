import React from 'react'
import classes from './Loader.css'

const Loader = props =>{
    const addedClasses = [classes.Loader, props.main ? classes.Main : null];
    console.log(addedClasses.join(' '))
    return(
        <div className={addedClasses.join(' ')}>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    )
}
export default Loader
