import React, { Component } from 'react';
import Ninjas from './Ninjas'
import AddNinja from './AddNinja'

class App extends Component {
  state = {
    ninjas: [
      { name: 'Mai', age: 40, belt: 'black', id: 1 },
      { name: 'Joe', age: 15, belt: 'green', id: 2 },
      { name: 'Don', age: 30, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
    this.setState({
      ninjas: ninjas
    });
  }

  deleteNinja = (id) => {
    let ninjas = this.state.ninjas.filter(element => element.id !== id);
    this.setState({
      ninjas: ninjas
    });
  }

  render() {
    return (
      <div className="App">
        <h1>React app</h1>
        <Ninjas ninjas={this.state.ninjas} deleteNinja={this.deleteNinja}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}

export default App;