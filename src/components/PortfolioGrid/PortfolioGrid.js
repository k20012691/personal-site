import React from 'react'
import PortfolioCard from '../Card/Card'
import { Container } from '@mui/material'
import { Parallax, ParallaxProvider } from 'react-scroll-parallax'
import SyBot from '../../img/sybot.png'
import BigMack from '../../img/bigmack.png'
import Sf24 from '../../img/sf24.png'

function PortfolioGrid() {
  return (
    <Container sx={{ 
      '@media (min-width: 600px)': {
        padding: 0,
      },
      '@media (max-width: 600px)': {
        padding: 0,
      },
      margin: '4rem 0 0 0',
      '> *': {
        marginTop: '2rem'
      }
    }}>
      <PortfolioCard
            title='synapseVR'
            description='An AI-driven virtual reality platform that transforms learning 3D prototyping and CAD tool education into an engaging and interactive experience.'
            link='#/project/synapsevr'
          />
          <ParallaxProvider>
            <Parallax speed={10}>
            <img 
              src={SyBot} 
              alt='SyBot' 
              style={{ 
                width: '30%',
                height: 'auto',
                position: 'absolute',
                bottom: '30%',
                left: '70%'
               }}
            />
            </Parallax>
            </ParallaxProvider>
          <PortfolioCard
            title='Formula 1 Data Visualisation'
            description='An interactive data visualisation studying tire strategies adopted by Formula 1 drivers and teams across different circuits. Built using JavaScript, D3, HTML, and CSS.'
            link='#/project/f1-dataviz'
          />
          <ParallaxProvider>
            <Parallax speed={10}>
            <img 
              src={Sf24} 
              alt='Scuderia Ferrari SF24' 
              style={{ 
                width: '35%',
                height: 'auto',
                position: 'absolute',
                bottom: '30%',
                left: '65%'
               }}
            />
            </Parallax>
            </ParallaxProvider>
          <PortfolioCard
            title='AAC Device Dashboard'
            description='Collated academic research on augmentative and assistive communication (AAC) devices across different modalities into a real-time dashboard.'
            link='#/project/aac-dashboard'
          />
          <ParallaxProvider>
            <Parallax speed={10}>
            <img 
              src={BigMack} 
              alt='BigMack' 
              style={{ 
                width: '70%',
                height: 'auto',
                position: 'absolute',
                bottom: '30%',
                left: '50%'
               }}
            />
            </Parallax>
            </ParallaxProvider>
    </Container>
  )
}

export default PortfolioGrid