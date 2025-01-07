import './PriceCardStyles.css'

import React from 'react'
import { Link } from 'react-router-dom'

const PriceCard = () => {
    return (
        <div className='pricing'>
            <div className='card-container'>
                <div className='card'>
                    <h3>Basics</h3>
                    <span className='bar'></span>
                    <p className='btc'>$100</p>
                    <p>3 Days</p>
                    <p>3 Pages</p>
                    <p>Featchured</p>
                    <p>Responseive Design</p>
                    <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                </div>


                <div className='card'>
                    <h3>Premium</h3>
                    <span className='bar'></span>
                    <p className='btc'>$250</p>
                    <p>2 Days</p>
                    <p>5 Pages</p>
                    <p>Featchured</p>
                    <p>Responseive Design</p>
                    <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                </div>


                <div className='card'>
                    <h3>Advanced</h3>
                    <span className='bar'></span>
                    <p className='btc'>$500</p>
                    <p>3 Days</p>
                    <p>8 Pages</p>
                    <p>Featchured</p>
                    <p>Responseive Design</p>
                    <Link to="/contact" className='btn'>PURCHASE NOW</Link>
                </div>

            </div>
        </div>
    )
}

export default PriceCard