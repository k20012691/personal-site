import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import { Container, Grid, Typography, useMediaQuery } from '@mui/material'
import Footer from '../components/Footer/Footer'
import MapComponent from '../components/Map/Map'
import { CardQuantLayout } from '../components/Card/CardQuant'
import Keyboard from '../img/blender_keyboard.png'
import CoffeeCup from '../img/blender_coffeepng.png'
import FrontWing from '../img/sf24_frontwing.png'

function AboutPage() {
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
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '20px' : '30px', 
              maxWidth: '85%',
            }}>
              About
            </Typography>
            <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '18px' : '23px',  
              maxWidth: Mobile ? '80%' : '45%', 
              color: '#555', 
              margin: '2rem 0 2rem 0' 
            }}>
            I specialise in front-end technologies (2D and 3D) from a design and development perspective.
          </Typography>
          <Typography
            sx={{ 
              fontWeight: 400, 
              color: '#555',
              fontSize: Mobile ? '16px' : '18px',
              maxWidth: Mobile ? '100%' : '60%' 
            }}
          >
          <p>My professional experiences include working at bp and Intropic in design and front-end engineering. 
          I've really enjoyed exploring the different spaces these companies operate in, and how they use technology 
          and design to address complex challenges in their respective fields.</p>
          <p>At university, I was actively involved with the Human-Computer Interaction (HCI) Lab run by Dr 
          Timothy Neate. For example, I built an interactive dashboard for assistive communication devices as
          part of a research fellowship during my final year.</p>
          <p>In my free time, I'm consumed by 3D modelling, sports, and Legos. I also maintain a digital 
          travel journal with the help of my trusty DSLR.</p>
          </Typography>
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '18px' : '23px',  
              maxWidth: Mobile ? '80%' : '45%', 
              color: '#555', 
              margin: '6rem 0 2rem 0' 
            }}>
            3D Modelling
          </Typography>
          <Typography
              sx={{ 
                fontWeight: 400, 
                color: '#555',
                fontSize: Mobile ? '16px' : '18px',
                maxWidth: '90%',
                marginBottom: '2rem'
              }}
            >
            <p>
              I started learning Blender for my work in the Metaverse space. In my own time, I've been practicing more advanced techniques and modifiers to build everyday objects.
              My F1 fandom has also led to an interest in automotive aerodynamics, and I tried to further understand Ferrari's front wing by replicating and running it in a simulator environment.
            </p>
          </Typography>
          <Grid container spacing={2} sx={{ margin: 0 }}>
            <Grid xs={4}>
              <img src={FrontWing} alt='SF24 Front Wing' width='90%' style={{ borderRadius: '8px' }} />
            </Grid>
            <Grid xs={4}>
              <img src={Keyboard} alt='Mechanical Keyboard' width='90%' style={{ borderRadius: '8px' }} />
            </Grid>
            <Grid xs={4}>
              <img src={CoffeeCup} alt='Coffee Cup' width='90%' style={{ borderRadius: '8px' }} />
            </Grid>
          </Grid>
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '18px' : '23px',  
              maxWidth: Mobile ? '80%' : '45%', 
              color: '#555', 
              margin: '6rem 0 2rem 0' 
            }}>
            Sports
          </Typography>
          <Grid container spacing={2} sx={{ margin: 0 }}>
            <Grid xs={Mobile ? 12 : 7}>
            <Typography
              sx={{ 
                fontWeight: 400, 
                color: '#555',
                fontSize: Mobile ? '16px' : '18px',
                maxWidth: '90%'
              }}
            >
            <p>
              I've been watching and playing cricket since I was nine years old. Since moving to the UK,
              I have represented two clubs:
              <ul>
                <li>King's College London Cricket Club</li>
                <li>Old Albanians Cricket Club</li>
              </ul>
            </p>
            </Typography>
            <CardQuantLayout />
            </Grid>
            <Grid xs={Mobile ? 12 : 5}>
              
            </Grid>
          </Grid>
          <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '18px' : '23px',  
              maxWidth: Mobile ? '80%' : '45%', 
              color: '#555', 
              margin: '6rem 0 2rem 0' 
            }}>
            Travel
          </Typography>
          <MapComponent />
          {/* <Typography 
            sx={{ 
              fontFamily: 'Lora', 
              fontWeight: 500, 
              fontSize: Mobile ? '18px' : '23px',  
              maxWidth: Mobile ? '80%' : '45%', 
              color: '#555', 
              margin: '6rem 0 2rem 0' 
            }}>
            Photography
          </Typography> */}
        </Container>
        <Footer />
    </div>
  )
}

export default AboutPage