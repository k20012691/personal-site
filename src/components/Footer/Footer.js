import { Container, Link, Typography } from '@mui/material'
import React from 'react'
import './Footer.css'
import { MdEmail } from 'react-icons/md'
import { FaFigma, FaGithub, FaLinkedin, FaReact } from 'react-icons/fa'
import { BiLogoBlender } from 'react-icons/bi'

function Footer() {
  return (
    <div>
    <Container 
      maxWidth='100%'
      sx={{ 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        marginBottom: '2rem',
        color: '#555',
        '@media (min-width: 600px)': {
              padding: '1.2rem 20%'
            },
            '@media (max-width: 600px)': {
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'flex-start',
              padding: '1rem 20%',
              gap: '10px'
            }
      }}
      >
      <div className='link'>
        <MdEmail size={22} />
        <Link 
          href='mailto:vedeesh18@gmail.com' 
          underline='always' 
          color='inherit'
        >
          vedeesh18@gmail.com
        </Link>
      </div>
      <div className='link'>
        <FaLinkedin size={22} />
        <Link 
          href='https://www.linkedin.com/in/vedeesh-bali/' 
          underline='always' 
          color='inherit'
        >
          /vedeesh-bali
        </Link>
      </div>
      <div className='link'> 
        <FaGithub size={22} />
        <Link 
          href='https://github.com/k20012691' 
          underline='always' 
          color='inherit'
        >
            /k20012691
        </Link>
      </div>
    </Container>
    <Container 
      sx={{ 
        display: 'flex', 
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#555',
        fontSize: '16px',
        textAlign: 'center',
        '@media (min-width: 600px)': {
              padding: '1.2rem 20% 4rem 20%'
            },
            '@media (max-width: 600px)': {
              padding: '1rem 15%'
            }
      }}>
        <Typography sx={{ fontSize: '18px' }}>
        This site was created using <FaFigma size={15} /> Figma, <FaReact size={15} /> React, and <FaGithub size={15} /> GitHub.<br />
        3D assets designed on <BiLogoBlender size={15} /> Blender.<br />
        &#123;&#123; pixels && code &#125;&#125; pushed by Vedeesh Bali &copy; 2024
        </Typography>
    </Container>
    </div>
  )
}

export default Footer