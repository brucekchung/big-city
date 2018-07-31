import React, { Component } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Description from '../Description/Description'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Description />
      </div>
    )
  }
}

export default App
