import React from 'react'
import "../Styles/Hero.scss"
import { WebsiteName } from '../Utils/api'
import { Link } from 'react-router-dom'
function Hero() {
  return (
    <div className='heroPage'>
      <div className="container-fluid">
        <div className="container">
          <div className="heroWrapper">
            <h2>
              Unforgattable Stays, Unbeatable Prices
            </h2>

            <p>
              Welcome to <WebsiteName /> , your gateway to unforgatable hostel experience, Explore our curated selection of unique hostels, and enjoy unbeatable prices.
            </p>

            <button className='stay'>

              <Link to="/listing">
                Book A Stay
              </Link>


            </button>
            <button className='learnM'>
              <Link to="/contact">
                Learn More
              </Link>
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Hero