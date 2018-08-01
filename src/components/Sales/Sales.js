import React from 'react'
import './Sales.css'
// import Sektor from 'sektor'
// const Sektor = require('sektor/js/sektor.js')
// require('sektor')
// const sektor = new Sektor-circle()

// console.log('sektor: ', Sektor)

// const thing = new Sektor('.sektor', {
//   angle: 30
// })

const Sales = ({ sales }) => {
  // const chart = new Sektor('.goal', {angle: 30})
  // console.log('chart: ', chart)

  return (
    <div className="Sales">
      <div className="goal">
        <h4>Goal: $100,000</h4>
        <p>diagram</p>
      </div>
      <div className="purchase">
        <button>Tickets { sales.price }</button>
        <p>Last to day to purchase: { sales.endDate }</p>
        <p className="countdown">time remaining: countdown</p>
      </div>
    </div>
  )
}

export default Sales
