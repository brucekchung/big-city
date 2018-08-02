import React, { Component } from 'react'
import './App.css'
import Banner from '../Banner/Banner'
import Description from '../Description/Description'
import Photos from '../Photos/Photos'
import Sales from '../Sales/Sales'
import Instructions from '../Instructions/Instructions'
import Footer from '../Footer/Footer'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      endDate: 'August 3',
      price: 30,
      donators: ['Godzilla', 'Batman', 'Bill Clinton']
    }
  }

  addDonator = name => {
    this.setState({ donators: [...this.state.donators, name] })
  }

  render() {
    return (
      <div className="App">
        <Banner />
        <Description />
        <Photos />
        <Sales sales={this.state} addDonator={this.addDonator} />
        <Instructions />
        <Footer donators={this.state.donators} />
      </div>
    )
  }
}

export default App
