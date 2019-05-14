import React,{useState} from 'react'
import classes from './MenuBtn.css'

const MenuBtn = props =>{
    const [clicked, changeClicked] = useState('')
    function changeBtn(e) {
        e.preventDefault();
        clicked === '' ? changeClicked('active') : changeClicked('')
    }
    return(
        <div className={classes.MenuBtn} onClick={props.onClick}>
            <a href="#" className={classes[clicked]} onClick={(e)=>changeBtn(e)}>
                <span></span>
            </a>

        </div>
    )
}
export default MenuBtn
