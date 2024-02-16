import React from 'react'
import {Button} from 'react-bootstrap'
import TwitterIcon from '../assets/svgs/twitter.svg'
import LinkedinIcon from '../assets/svgs/linkedin.svg'
import InstagramIcon from '../assets/svgs/instagram.svg'

const Footer = () => {
  return (
    <footer>
        <div><Button>Download Resume</Button></div>
        <div className='d-flex justify-content-center align-items-center gap-2'>
            <img src={InstagramIcon} alt='image'/>
            <img src={TwitterIcon} alt='image'/>
            <img src={LinkedinIcon} alt='image'/>
        </div>
    </footer>
  )
}

export default Footer