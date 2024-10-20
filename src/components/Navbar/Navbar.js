import { Container, useMediaQuery } from '@mui/material'
import './Navbar.css'
import React from 'react'
import PageLink from '../Link/Link'
import FidelitySlider from '../Slider/FidelitySlider'
import SharkToothMini from '../../img/SharkToothMini.png'

function Navbar() {
  const Mobile = useMediaQuery('(max-width: 600px)');

  return (
    <Container
        maxWidth='100%'
        className='navbar-container'
        disableGutters
        sx={{ 
            display: 'flex',
            padding: Mobile ? '1rem 10%' : '1.2rem 20%',
            marginBottom: '5rem'
        }}
    >
        <div className='nav-menu' style={{ alignItems: 'center', justifyContent: 'center' }}>
          <div className='icon-box' style={{ fontSize: '1.2rem' }}>
            <img src={SharkToothMini} alt='Shark Tooth' height='70%' />
          </div>
          <PageLink link={'/#'} label='Vedeesh Bali' underline='none' />
        </div>
        <div className='nav-menu' style={{ 
          gap: Mobile ? '1.5rem' : '3rem'
        }}>
        <PageLink link={'/about/#'} label='About' underline='none' />
        <PageLink link={'/projects/#'} label='Projects' underline='none' />
        </div>
        <FidelitySlider />
    </Container>
  )
}

export default Navbar