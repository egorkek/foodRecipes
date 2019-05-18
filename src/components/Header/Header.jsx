import React, {useState, useEffect, Fragment} from 'react'
import classes from './Header.css'
import {Input, MenuBtn} from "../components";
import {connect} from 'react-redux'
import {changeType} from '../../store/actions'

const Header = props =>{
    const [inpValue, setInp] = useState('');
    const [active, setActive] = useState(false);
    const [val, setSize] = useState('');
    useEffect(()=>{
        if (window.innerWidth < 550){
            setSize('mobile')
        }
        window.innerWidth < 550 ? setSize('mobile') : setSize('desktop')
    })
    function clicked() {
        active === true ? setActive(false) : setActive(true)
    }
    function onSearchHandler(){
        props.changeType(inpValue)
        setInp('')
    }
    function onChangeInputHandler(e){
        setInp(e.target.value)
    }
    return(
        <div className={classes.Header}>
            {active === false ? <h1>Recipes</h1> : null }
            {val === 'mobile' ?
                <Fragment>
                    <MenuBtn onClick={()=>{
                        clicked()
                    }
                        }/>
                    {active ===true ?
                    <ul className={classes[val]}>
                        <li>
                            <Input value={inpValue} onSearch={()=>onSearchHandler()} onChange={(e)=>onChangeInputHandler(e)}/>
                        </li>
                        <li><i className="fas fa-user-alt"/>
                        </li>
                    </ul> : null}

                </Fragment>
                :
                <ul className={classes[val]}>
                    <li>
                        <Input value={inpValue} onSearch={()=>onSearchHandler()} onChange={(e)=>onChangeInputHandler(e)}/>
                    </li>
                    <li>My recipes</li>
                    <li>All recipes</li>
                    <li><i className="fas fa-user-alt"/>
                    </li>
                </ul>
            }
            {}

        </div>
    )
}

function mapDispatchToProps(dispatch) {
    return{
        changeType: (newType)=>dispatch(changeType(newType)),
    }

}

export default connect(null,mapDispatchToProps)(Header)
