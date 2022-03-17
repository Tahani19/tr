import React from 'react'
import './FooterStyles.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
    <div className='footer-container'>
        <div className='left'>
            <div className='location'>
                <FaSearchLocation size={20} style={{ color: '#ffffff', marginRight: '2rem' }} />
                <div>
                    <p>12723 ABD St.</p>
                    <h4>Riyadh, SA</h4>
                </div>
            </div>
            <div className='phone'>
                <h4><FaPhone size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> 966-000-000-000</h4>
            </div>
            <div className='email'>
                <h4><FaMailBulk size={20} style={{ color: '#ffffff', marginRight: '2rem' }} /> TAMSP@TAM.com</h4>
            </div>
        </div>
        <div className='right'>
            <h4>About the company</h4>
            <p>"Every business is ambitious about its growth. The few businesses that are able to actualize this mighty vision successfully, leverage realistic, actionable insights obtained through big data analytics to understand market trends, buying patterns, and the subsequent changes they may need to implement."</p>
            <div className='social'>
                <FaFacebook size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                <FaTwitter size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
                <FaLinkedin size={30} style={{ color: '#ffffff', marginRight: '1rem' }} />
            </div>
        </div>

    </div>
</div>
  )
}

export default Footer