import React from 'react'
import './Sales.css'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Purchase from '../Purchase/Purchase'

const Sales = ({ sales }) => {
  return (
    <div className="Sales">
      <div className="goal">
        <h4>Goal: $100,000</h4>
        <p>diagram</p>
      </div>
      <Route exact path='/' render={() => (
        <div className="purchase">
          <NavLink to='purchase'><button>Tickets ${ sales.price }</button></NavLink>
          <p>Last to day to purchase: { sales.endDate }</p>
          <p className="countdown">time remaining: countdown</p>
        </div>
      )} />
      <Route path='/purchase' component={ Purchase } />
    </div>
  )
}

export default Sales
