import { Container, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import './Card.css'

function CardQuant({label, number}) {
  return (
    <Container sx={{ 
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      borderRight: '1px solid #e8f1ff',
      '@media (min-width: 600px)': {
        padding: 0,
      },
      ':last-child': {
        borderRight: 0
      }
    }}>
        <Typography sx={{ fontSize: '12px', color: '#777' }}>{label}</Typography>
        <Typography sx={{ fontSize: '28px', color: '#0e6bf1', fontWeight: 500 }}>{number}</Typography>
    </Container>
  )
}

export default CardQuant

export function CardQuantLayout() {
  const Mobile = useMediaQuery('(max-width: 600px)');

  return (
    <Container sx={{ 
      display: 'flex', 
      flexDirection: Mobile ? 'column' : 'row', 
      border: '1px solid #e8f1ff', 
      borderRadius: '5px',
      padding: '1rem 0 1rem 0', 
      width: '90%',
      margin: '1.6rem 0 0 0',
      '@media (min-width: 600px)': {
        padding: '1rem 0 1rem 0',
      }
    }}>
      <CardQuant label='Games' number='11' />
      <CardQuant label='Wickets' number='20' />
      <CardQuant label='Economy' number='4.58' />
      <CardQuant label='Average' number='21.7' />
      <CardQuant label='BBI' number='3/11' />
    </Container>
  )
}