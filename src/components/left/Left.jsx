import React from 'react'
import './left.css'
import Articles from '../articles/articles'

const Left = () => (
  <div className='left--container'>
    <h1 id='main-left-headline'>Headlines of Today</h1>
    <br />

    <div className='left--headlines'>
      <a href="#article1">
        <p className='headline'>
          1. PayPal enables transfer of digital currencies to external wallets{' '}
          <br /> <br />
        </p>
      </a>

      <a href="#article2">
       <p className='headline'>
         2. Prime Minister Giorgia Meloni's new bill also includes an incentive
         for those declaring crypto for tax purposes
         <br />
         <br />
       </p>
      </a>

      <a href="#article3">
       <p className='headline'>
         3. Bitcoin miners' revenue dropped in 2022
         <br />
         <br />
       </p>
      </a>
    </div>
  </div>
)

export default Left