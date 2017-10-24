import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
    this.getCars = this.getCars.bind(this)
  }

  getCars() {
    axios.get('https://joes-autos.herokuapp.com/api/vehicles')
    .then(res => {
      console.log(res.data)
      this.setState({
        cars: res.data
      })
    })
  }

  render() {
    return (
      <div className="App">
        <button onClick={this.getCars}>Get cars</button>
        {this.state.cars.map(car=>{
          return (<div>{car.model} {car.model} {car.year} {car.price} </div>)
        })}
      </div>
    );
  }
}

export default App;
