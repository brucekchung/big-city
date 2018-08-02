import React from 'react'
import './Sales.css'
import { Route } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Purchase from '../Purchase/Purchase'
import Thanks from '../Thanks/Thanks'

const Sales = ({ sales, addDonator }) => {
  return (
    <div className="Sales">
      <div className="goal">
        <h4>Goal: $100,000</h4>
        <div className="graph"></div>
      </div>
      <Route exact path='/' render={() => (
        <div className="purchase">
          <NavLink to='purchase'><button>Tickets ${ sales.price }</button></NavLink>
          <p>Last to day to purchase: { sales.endDate }</p>
          <p className="countdown">2 days 13 hrs 41 sec</p>
        </div>
      )} />
      <Route path='/purchase' render={() => <Purchase addDonator={addDonator} /> } /> 
      <Route path='/thanks' render={() => <Thanks /> } /> 
    </div>
  )
}

export default Sales
