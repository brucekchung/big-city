import React from 'react'
import './Footer.css'

const Footer = ({ donators }) => {
  const allDonators = () => donators.map(donator => <p key={donator}>{donator}</p>)

  return (
    <div className="Footer">
      { allDonators() }
    </div>
  )
}

export default Footer
