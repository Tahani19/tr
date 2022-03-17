import React from 'react'
import './TrainingStyles.css'

import {Link} from 'react-router-dom'

import Pod from '../assets/v.svg'
import Moon from '../assets/undraw_data_processing_yrrv.svg'

const Training = () => {
  return (
    <div className='training'>
    <div className='left'>
        <h1>Services</h1>
        <p>Every business is ambitious about its growth. The few businesses that are able to actualize this mighty vision successfully, leverage realistic, actionable insights obtained through big data analytics to understand market trends, buying patterns, and the subsequent changes they may need to implement.</p>
        <Link to='/contact'><button className='btn'>Contact</button></Link>
    </div>
    <div className='right'>
        <div className='img-container'>
            <div className='image-stack top'>
                <img src={Moon} className='img' alt='' />
            </div>
            <div className='image-stack bottom'>
                <img src={Pod} className='img' alt='' />
            </div>
        </div>
    </div>
</div>
  )
}

export default Training