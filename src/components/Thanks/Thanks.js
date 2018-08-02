import React from 'react'
import './Thanks.css'
import { NavLink } from 'react-router-dom'

const Thanks = () => (
  <div className="Thanks">
    <h2>Thank you for donating!</h2>
    <NavLink to='/purchase'><button>Tickets</button></NavLink>
  </div>
)

export default Thanks
