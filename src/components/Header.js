import React from 'react'
import Mylogo from '../assets/images/EURISKO-MOBILITY.png'
import './Header.css'
function Header() {
    return (

        <div>
            <nav className="navbar navbar-light ">
       
            <img src={Mylogo} width="190" height="100" class="d-inline-block align-top" alt=""/>
            <h2 className='text-danger text-left '>EURISKO-FLIX</h2>
        </nav>
        </div>

        
    )
}

export default Header
