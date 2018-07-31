import React from 'react'
import './Banner.css'
import BCH_logo from '../../assets/BCH_logo.png'

const Banner = () => (
  <div className="Banner">
    <div className="top-bar">
      <img className="logo" alt="logo" src={BCH_logo} />
      <nav>
        <ul>element</ul>
        <ul>element</ul>
        <ul>element</ul>
        <ul>search icon</ul>
      </nav>
    </div>
    <div className="title">
      <h2>American Red Cross</h2>
    </div>
  </div>
)

export default Banner
