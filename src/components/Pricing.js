import React from 'react'
import {Link} from 'react-router-dom'
import './PricingStyles.css'

const Pricing = () => {
  return (
    <div className='pricing'>
    <div className='card-container'>
        <div className='card'>
            <h3>- Free Trial -</h3>
            <span className='bar'></span>
            <p className='btc'>Free</p>
            <p>- 7 Days -</p>
            <p>- Featured -</p>
            <p>     </p>
            <p>     </p>
            <Link to='/contact' className='btn'>Start</Link>
        </div>
        <div className='card'>
            <h3>- Basic -</h3>
            <span className='bar'></span>
            <p className='btc'>1$</p>
            <p>- 1 Year -</p>
            <p>- Support -</p>
            <p>- Featured -</p>
            <Link to='/contact' className='btn'>Start</Link>
        </div>
        <div className='card'>
            <h3>- Executive -</h3>
            <span className='bar'></span>
            <p className='btc'>10$</p>
            <p>- 5 Years -</p>
            <p>- Support -</p>
            <p>- Featured -</p>
            <Link to='/contact' className='btn'>Start</Link>
        </div>
    </div>
</div>
  )
}

export default Pricing