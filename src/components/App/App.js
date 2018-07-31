import React, { Component } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Description from '../Description/Description'
import Photos from '../Photos/Photos'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Banner />
        <Description />
        <Photos />
      </div>
    )
  }
}

export default App
