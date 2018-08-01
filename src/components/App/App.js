import React, { Component } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Description from '../Description/Description'
import Photos from '../Photos/Photos'
import Sales from '../Sales/Sales'
import Instructions from '../Instructions/Instructions'


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      endDate: 'August 3',
      price: '$30'
    }
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Description />
        <Photos />
        <Sales sales={this.state} />
        <Instructions />
      </div>
    )
  }
}

export default App
