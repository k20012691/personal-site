import { Link, ThemeProvider } from '@mui/material'
import React from 'react'
import { theme } from '../../theme'
import './Link.css'

function PageLink({ link, label, icon, underline }) {
  return (
    <ThemeProvider theme={theme}>
      <div className='link'>
        {icon}
        <Link 
          href={link} 
          underline={underline}
          color='inherit'
        >
          {label}
        </Link>
      </div>
    </ThemeProvider>
  )
}

export default PageLink