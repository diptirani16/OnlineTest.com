import React from 'react'
import logo from './images/onlineTestlogo.png'

export default function Header() {
    return (
        <div>
            <nav class="navbar bg-light p-3 fixed-top">
                
                    <img src={logo} width="150px" alt="Logo"/>
                
            </nav>
        </div>
    )
}
