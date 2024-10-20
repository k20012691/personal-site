import { ThemeProvider, Button } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'

function ContainedButton({ label, isCta, link }) {
  return (
    <ThemeProvider theme={theme}>
        <Button
          variant='contained' 
          href={link}
          color='primary'
          sx={{
            backgroundColor: isCta ? '#000' : '#0e6bf1',
            textTransform: 'none',
            fontSize: isCta ? '18px' : '15px',
            fontWeight: 600,
            padding: isCta ? '5px 25px' : '3px 20px',
            marginTop: '1rem',
            borderRadius: isCta ? '6px' : '3px',
            boxShadow: 'none',
            '&:hover': {
              backgroundColor: isCta ? '#000' : '#0e6bf1'
            }
          }}
        >
            {label}
        </Button>
    </ThemeProvider>
  )
}

export default ContainedButton