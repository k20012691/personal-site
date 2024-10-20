import { IconButton, Slider, ThemeProvider, Tooltip, useMediaQuery } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import './FidelitySlider.css'
import { GoQuestion } from 'react-icons/go'

function FidelitySlider() {
  const Mobile = useMediaQuery('(min-width: 800px)')

  return (
    Mobile ? 
    <ThemeProvider theme={theme}>
      <div style={{ 
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Slider 
      min={10} 
      max={30}
      step={10}
      defaultValue={30}
      sx={{ 
        width: '4rem'
      }}
    />
    <Tooltip title='Fidelity' arrow placement='bottom-end'>
      <IconButton sx={{ fontSize: '1.3rem' }}>
      <GoQuestion />
      </IconButton>
    </Tooltip>
    </div>
    </ThemeProvider>
    :
    <></>
  )
}

export default FidelitySlider