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
    const { name, value } = e.target;
    this.setState({[name]:value});
  }

  render() {
    return (
      <div className="Purchase">
        <form type="submit" className="purchase-form">
          <input
            className="leader"
            name="leader"
            type="text"
            placeholder="ex. John Smith"
            value={this.state.leader}
            onChange={this.handleChange}
          />
          <input
            className="participants"
            name="participants"
            type="number"
            placeholder="ex. 15"
            value={this.state.participants}
            onChange={this.handleChange}
          />
        </form>
      </div>
    )
  }
}

export default Purchase
