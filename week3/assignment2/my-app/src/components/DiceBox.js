import React from "react"
import Die from "./Die"

let count = 0;


class DiceBox extends React.Component {
    constructor(){
    super()
    this.state = {
        num1: 0,
        num2: 0,
        num3: 0,
        num4: 0,
        num5: 0

    }

        this.handleClick = this.handleClick.bind(this)

}

handleClick(){
    count += 1;

    if (count <= 3){
        this.setState((prevState) => {
            return (
                prevState.num1 = Math.floor(Math.random()*4+1),
                prevState.num2 = Math.floor(Math.random()*4+1),
                prevState.num3 = Math.floor(Math.random()*4+1),
                prevState.num4 = Math.floor(Math.random()*4+1),
                prevState.num5 = Math.floor(Math.random()*4+1)
                )
            }  
        )

    } else if (count > 3){
        count = 0;
        this.setState((prevState) => {
            return(
                prevState.num1 = 0,
                prevState.num2 = 0,
                prevState.num3 = 0,
                prevState.num4 = 0,
                prevState.num5 = 0
                )
            }
        )
    }
}

    render(){   
        /* console.log(box1) */
        return (
            <div>
                <h1>ROLL THE DICE! All numbers will RESET after 3 rolls.</h1>
                <Die id="box1" handleClick={this.handleClick} num={this.state.num1}/>
                <Die id="box2" handleClick={this.handleClick} num={this.state.num2}/>
                <Die id="box3" handleClick={this.handleClick} num={this.state.num3}/>
                <Die id="box4" handleClick={this.handleClick} num={this.state.num4}/>
                <Die id="box5" handleClick={this.handleClick} num={this.state.num5}/>
                <button onClick={this.handleClick}>Roll The Dice!</button>
            </div>
        )
    }
}

export default DiceBox