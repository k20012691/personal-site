import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'
import { Container, Typography, useMediaQuery } from '@mui/material'
import PortfolioGrid from '../components/PortfolioGrid/PortfolioGrid'

function PortfolioPage() {
  const Mobile = useMediaQuery('(max-width: 600px)')

  return (
    <div>
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
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '20px' : '30px', 
              maxWidth: '85%',
            }}>
              Projects
            </Typography>
          <PortfolioGrid />
        </Container>
        <Footer />
    </div>
    </div>
  )
}

export default PortfolioPage