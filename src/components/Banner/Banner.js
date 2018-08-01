import React from 'react'
import './Banner.css'
import BCH_logo from '../../assets/BCH_logo.png'
import search_icon from '../../assets/search.svg'
import red_cross_logo from '../../assets/red_cross_logo.png'
// import earth_map from '../../assets/red_cross_logo.png'

const Banner = () => (
  <div className="Banner">
    <div className="top-bar">
      <img className="logo" alt="logo" src={BCH_logo} />
      <nav>
        <ul>how it works</ul>
        <ul>find hunts</ul>
        <ul>team building</ul>
        <ul>get tickets</ul>
        <ul><img className="search" src={search_icon} alt="search" /></ul>
      </nav>
    </div>
    <div className="title">
      <p>Welcome to a charity event for: </p>
      <h2><img className="red-cross" alt="logo" src={red_cross_logo} />American Red Cross</h2>
    </div>
  </div>
)

export default Banner
