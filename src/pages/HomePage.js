import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import ImgGrid from '../components/ImgGrid/ImgGrid'
import { Container, Typography, useMediaQuery } from '@mui/material'
import Flag from 'react-world-flags'
import PortfolioGrid from '../components/PortfolioGrid/PortfolioGrid'
import ContainedButton from '../components/Button/ContainedButton'
import Footer from '../components/Footer/Footer'

function Homepage() {
  const Mobile = useMediaQuery('(max-width: 600px)')

  return (
    <div>
        <Navbar />
        <Container 
          maxWidth='100%' 
          className='page-container'
          sx={{ 
            marginBottom: '4rem',
            '@media (min-width: 600px)': {
              padding: '1.2rem 20%'
            },
            '@media (max-width: 600px)': {
              padding: '1rem 10%'
            }
          }}
        >
          <ImgGrid />
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '20px' : '30px', 
              maxWidth: '85%',
            }}>
            I'm a frontend engineer and experience designer based in <Flag code='GB' height={ Mobile ? '12' : '18' } /> London.
            Currently, I'm building virtual reality environments at bp.
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '14px' : '20px',  
              maxWidth: '55%', 
              color: '#555', 
              marginTop: '2rem' 
            }}>
            I like Rubik's cubes, rollerblading, and people willing
            to watch sports with me.
          </Typography>
          <div style={{
            position: 'relative',
            height: '26rem',
            overflow: 'hidden',
          }}>
            <PortfolioGrid />
            <div style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '34%',
              background: "linear-gradient(to bottom, rgba(255, 255, 255, 0), rgba(255, 255, 255, 1))"
            }} />
    </div>
          <Container sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ContainedButton label='View Full Portfolio' isCta={true} link='/projects' />
          </Container>
        </Container>
        <Footer />
    </div>
  )
}

export default Homepage