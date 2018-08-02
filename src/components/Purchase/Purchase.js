import React, { Component } from 'react'
import './Purchase.css'

class Purchase extends Component {
  constructor(props) {
    super(props)
    this.state = {
      participants: 0,
      leader: ''
    }
  }

  handleChange = e => {
    const { name, value } = e.target

    this.setState({[name]:value})
  }

  handlePurchase = e => {
    e.preventDefault()
    this.props.addDonator(this.state.leader)

    this.setState({ leader: '', participants: 0 })
  }

  render() {
    return (
      <div className="Purchase">
        <form type="submit" className="purchase-form">
          <p>leader name</p>
          <input
            className="leader"
            name="leader"
            type="text"
            placeholder="ex. John Smith"
            value={this.state.leader}
            onChange={this.handleChange}
          />
          <p>number of participants</p>
          <input
            className="participants"
            name="participants"
            type="number"
            placeholder="ex. 15"
            value={this.state.participants}
            onChange={this.handleChange}
          />
          <p>total ${this.state.participants * 30}</p>
          <button
            className="purchase-btn"
            onClick={this.handlePurchase}
            type="submit">
          Purchase
          </button>
        </form>
      </div>
    )
  }
}

export default Purchase
