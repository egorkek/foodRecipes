import React, {useState, useEffect, Fragment} from 'react'
import classes from './Header.css'
import {Input, MenuBtn} from "../components";

const Header = props =>{
    const [inpValue, setInp] = useState('');
    const [active, setActive] = useState(false);
    const [val, setSize] = useState('');;
    useEffect(()=>{
        if (window.innerWidth < 550){
            setSize('mobile')
        }
        window.innerWidth < 550 ? setSize('mobile') : setSize('desktop')
    })
    function clicked() {
        active === true ? setActive(false) : setActive(true)
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
                            <Input value={inpValue} onChange={(e) => setInp(e.target.value)}/>
                        </li>
                        <li><i className="fas fa-user-alt"/>
                        </li>
                    </ul> : null}

                </Fragment>
                :
                <ul className={classes[val]}>
                    <li>
                        <Input value={inpValue} onChange={(e) => setInp(e.target.value)}/>
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
export default Header
