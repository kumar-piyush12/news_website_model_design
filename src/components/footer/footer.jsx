import React from 'react'
import './footer.css'
import { title } from '../../assets/image'

const Footer = () => (
 <div className="footer--container">
  <div className="foothead">The New York Times
  <br /> 
  <p id="since"> Since 1851</p>
  </div>

  <div className="logo">
  <img src={title} id='title-img' />
  </div>
 </div>
)

export default Footer
