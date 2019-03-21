import React from 'react'
import classes from './App.css'
import image from './img/day.jpg'

class App extends React.Component{
    lol = ()=>{
        console.log('asdas')
    }
    render(){
        return(
            <div className={classes.App} onClick={this.lol}>
                <img src={image} alt=""/>
                asdas
            </div>
        )
    }
}

export default App