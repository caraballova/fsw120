import './App.css';
import React, {Component} from "react"
import Entry from "./components/Entry"

class App extends Component {
  constructor() {
    super()
    this.state = {
        name: "",
        list: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleChange(event) {
    const {name, value} = event.target
    this.setState({
      name: value
    })
    event.preventDefault();
  }
  
  handleClick(event) {
    this.setState(prevState => ({
      list: [...prevState.list, this.state.name]
    })
  )
    event.preventDefault();
}

  render () {
    const people = this.state.list.map(x => <Entry name={x} />)
    return (
      <div>
        <form>
            <input 
                type="text" 
                name="name" 
                placeholder="Name" 
                onChange={this.handleChange} 
            />
            <br />
            <br />
            <button onClick={this.handleClick}>Submit</button>
            <h1>{this.state.name}</h1>
            {people}
        </form>
      </div>
    )
  }
}


export default App;
