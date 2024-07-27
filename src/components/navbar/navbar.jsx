import React from 'react'
import { title } from '../../assets/image'
import './navbar.css';


const Navbar = () => (
  <div className='container'>
     <div className='navbar'>
       <img src={title} id='title-img' />

       <div className='set'>
           <p id='title'>The New York Times</p>

         <div className='buttons'>
           <div className='search'>
             <button id='search'>India</button>
           </div>
           <div className='search'>
             <button id='search'>Elections</button>
           </div>
           <div className='search'>
             <button id='search'>World</button>
           </div>
           <div className='search'>
             <button id='search'>Science</button>
           </div>
           <div className='search'>
             <button id='search'>Sports</button>
           </div>
         </div>
       </div>
     </div>
   </div>
)

export default Navbar
