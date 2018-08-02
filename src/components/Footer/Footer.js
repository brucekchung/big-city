import React from 'react'
import './Footer.css'

const Footer = ({ donators }) => {
  const allDonators = () => donators.map(donator => <p key={donator}>{donator}</p>)

  return (
    <div className="Footer">
      <div className="social-media"></div>
      <h3>Please share</h3>
      <h3>Thank you to all our supporters</h3>
      { allDonators() }
    </div>
  )
}

export default Footer
