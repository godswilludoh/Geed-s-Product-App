import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import { FaInstagramSquare } from 'react-icons/fa'

function Footer() {
    return (
        <div>
            <p>copyright @2021</p>
            <div className="social">
                <FaFacebook />
                <FaInstagramSquare />
            </div>
        </div>
    )
}

export default Footer;
