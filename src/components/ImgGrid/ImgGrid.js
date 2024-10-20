import { Container, Grid, Typography, useMediaQuery } from '@mui/material'
import React from 'react'
import SharkTooth from '../../img/SharkToothRegular.png'
import Headshot from '../../img/headshot2.jpeg'
import HomeOffice from '../../img/home-office.jpeg'

const Intro = () => {
    return(
        <Container sx={{
            backgroundColor: '#e8f1ff',
            display: 'flex',
            flexDirection: 'row',
            padding: '0.7rem',
            borderRadius: '10px',
            '@media (min-width: 600px)': {
                padding: '0.8rem'
            }
        }}>
            <div style={{ 
                backgroundColor: '#2a64f625', 
                padding: '0.8rem', 
                borderRadius: '5px' 
            }}>
                <img src={SharkTooth} alt='Shark Tooth' />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', padding: '0 2rem 0 1rem' }}>
                <Typography sx={{ fontSize: '23px', fontWeight: 500 }}>Vedeesh Bali</Typography>
                <Typography sx={{ fontSize: '15px', color: '#333' }}>UI/UX & Frontend Engineer</Typography>
            </div>
        </Container>
    )
}

function ImgGrid() {
  const Mobile = useMediaQuery('(max-width: 600px)')

  return (
    <Grid container spacing={2} sx={{ marginBottom: '5rem', gap: Mobile ? '1rem' : '0' }}>
    <Grid xs={Mobile ? 12 : 5} sx={{ display: 'flex', flexDirection: 'column' }}>
        <Container height='100%' style={{ flex: 1, marginBottom: '48px' }}>
            <div style={{ backgroundImage: `url(${HomeOffice})`, height: '100%', backgroundSize: 'cover', borderRadius: '10px' }} />
        </Container>
        <Container>
            <Intro />
        </Container>
    </Grid>
    <Grid xs={Mobile ? 12 : 7}>
        <Container>
            <img src={Headshot} alt='Headshot' style={{ borderRadius: '10px', width: '100%' }} />
        </Container>
    </Grid>
</Grid>
  )
}

export default ImgGrid