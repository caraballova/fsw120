import React from 'react'
import Squares from "./components/Squares"
import "./App.css"

class App extends React.Component {
  constructor() {
    super()
    this.state = {squares: ["white, white, white, white"]}
    this.Step1 = this.Step1.bind(this)
    this.Step2 = this.Step2.bind(this)
    this.Step3 = this.Step3.bind(this)
    this.Step4 = this.Step4.bind(this)
    this.Step5 = this.Step5.bind(this)
    this.Step6 = this.Step6.bind(this)
    this.Step7 = this.Step7.bind(this)
    this.Step8 = this.Step8.bind(this)
  }

  Step1() {
    this.state.squares.map(block => {
      if (block === "white") {
        return (
          this.setState(prevState => { 
            return ({squares: ["black", "black", "black", "black"]})
        }
        )
        )} else {
          return (
            this.setState(prevState => {
              return (
                ({squares: ["white", "white", "white", "white"]})
              )
            })
          )
        }
    })
  }

  Step2() {
    this.setState(prevState => {
      return ({squares: ["purple", "purple", prevState.squares[2], prevState.squares[3]]})
    })}

  Step3() {
    this.setState(prevState => {
      return ({squares: [prevState.squares[0], prevState.squares[1], "blue", prevState.squares[3]]})
    })}

  Step4() {
    this.setState(prevState => {
      return ({squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], "blue"]})
    })}

  Step5() {
    this.setState(prevState => {
      return ({squares: ["brown", prevState.squares[1], prevState.squares[2], prevState.squares[3]]})
  })}

  Step6() {
    this.setState(prevState => {
      return ({squares: [prevState.squares[0], "aqua", prevState.squares[2], prevState.squares[3]]})
    })}

  Step7() {
    this.setState(prevState => {
      return ({squares: [prevState.squares[0], prevState.squares[1], "red", prevState.squares[3]]})
    })}  
  
  Step8() {
    this.setState(prevState => {
      return ({squares: [prevState.squares[0], prevState.squares[1], prevState.squares[2], "green"]})
    })}
  
  render(){
    return (
      <div style={{textAlign: "center"}}>
        <h1>DJ React</h1>
        <Squares squares={this.state.squares} />
        <button onClick={this.Step1}>Step 1</button><br></br>
        <button onClick={this.Step2}>Step 2</button><br></br>
        <button onClick={this.Step3}>Step 3</button><br></br>
        <button onClick={this.Step4}>Step 4</button><br></br>
        <button onClick={this.Step5}>Step 5</button><br></br>
        <button onClick={this.Step6}>Step 6</button><br></br>
        <button onClick={this.Step7}>Step 7</button><br></br>
        <button onClick={this.Step8}>Step 8</button>
      </div>
    )
  }
      

}

export default App;
