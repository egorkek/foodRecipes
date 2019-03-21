import React from 'react'
import classes from './App.css'

class App extends React.Component{
    lol = ()=>{
        console.log('asdas')
    }
    render(){
        return(
            <div className={classes.App} onClick={this.lol}>
                asdas
            </div>
        )
    }
}

export default App