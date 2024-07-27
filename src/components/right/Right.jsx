import React from 'react'
import './right.css'
import Articles from '../articles/articles'

const Right = () => (
 <div className="right--container">
  <h1 id="main-right-headline">More Headlines</h1> <br />

  <div className="right--headlines">
   <a href="#article4">
    <p className='headline'>4. Microstrategy Buys More Bitcoin — Company's Crypto Holdings Grow to 132,500 BTC<br /><br /></p>
   </a>

   <a href="#article5">
    <p className='headline'>5. Bitcoin Miners' Revenue Hits $9.55 Billion in 2022<br /><br /></p>
   </a>
  </div>
 </div>
)

export default Right