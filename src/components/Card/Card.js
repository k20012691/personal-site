import { Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import ContainedButton from '../Button/ContainedButton'

function PortfolioCard({ title, description, link }) {
  const Mobile = useMediaQuery('(max-width: 600px)')

  return (
    <Container maxWidth='100%' sx={{ backgroundColor: '#e8f1ff', borderRadius: '10px', padding: '1.5rem 2rem' }}>
        <Typography 
            sx={{ 
                fontWeight: 500, 
                fontSize: Mobile ? '18px' : '20px', 
                marginBottom: '6px' }}>
                {title}
        </Typography>
        <Typography 
            sx={{ 
                fontWeight: 400, 
                fontSize: Mobile ? '12px' : '16px', 
                color: '#555', 
                maxWidth: '60%', 
                marginBottom: '6px' }}>
                    {description}
        </Typography>
        <ContainedButton label='Case Study' link={link} />
    </Container>
  )
}

export default PortfolioCard