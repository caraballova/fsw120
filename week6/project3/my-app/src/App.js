import React from "react"
import Calculator from "./components/Calculator"
import './App.css';


class App extends React.Component {
  constructor () {
    super()
    this.state = ({
      num1: "",
      num2: "",
      operator: ""
    })
    this.handleClick = this.handleClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }
  handleClick(e) {
    this.setState ({
      operator: e.target.id
    })
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: Number(value)
    })
  }

  calc = () => {
    return (<Calculator id="calc" num1={this.state.num1} num2={this.state.num2} operator={this.state.operator}/>)
  }

  render () {

    return (
      <div>
        <h1 id="title">React Calculator</h1>

      <div id="box1">
        <input
          required={true}
          type= "number"
          placeholder= "Please Enter a Number"
          onChange = {this.handleChange}
          value = {this.state.num1} 
          name = "num1"
          >
      </input>
    </div>

    <div id="box2">
      <input
        required={true}
        type= "number"
        placeholder = "Please Enter a Number"
        onChange = {this.handleChange}
        value = {this.state.num2}
        name = "num2"
        >
      </input>
    </div>

    <div id="buttons">
      <button onClick = {this.handleClick} id="add">+</button>
      <button onClick = {this.handleClick} id="subtract">-</button>
      <button onClick = {this.handleClick} id="multiply">*</button>
      <button onClick = {this.handleClick} id="divide">/</button>
    </div>

    {
    this.state.operator === "add" ||
    this.state.operator === "subtract" ||
    this.state.operator === "multiply" ||
    this.state.operator === "divide" ?
    (this.calc()) : ""
    }

      </div>
    )
  }

}

export default App