import React from "react"
import './App.css';
import data from "./components/data.json"
import SuperHero from "./components/SuperHero"

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      heroes: data
    }
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick (a) {
    alert(a)
  }
  render(){
    const heroes = this.state.heroes.map(hero => <SuperHero key={hero.id} handleClick={this.handleClick} catchPhrase={hero.catchPhrase} imageName={hero.imageName} name={hero.name} show={hero.show}/>)
    return (
      <div>
        {heroes}
      </div>
    )
  }
}

export default App;
