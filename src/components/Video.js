import React from 'react'
import { Link } from 'react-router-dom'
import './VideoStyles.css'
import spaceVideo from '../assets/videodata.mp4'



const Video = () => {
  return (
    <div className='hero'>
    <video autoPlay loop muted id='video'>
        <source src={spaceVideo} type='video/mp4' />
    </video>
    <div className='content'>
        <h1>TAM Solutions</h1>
        <p>Data Solutions Providers</p>
        <div>
            <Link to='/training' className='btn'>Services</Link>
            <Link to='/contact' className='btn btn-light'>Learn More</Link>
        </div>
    </div>
</div>  )
}

export default Video