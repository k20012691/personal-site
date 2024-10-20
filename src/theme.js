import { createTheme } from "@mui/material";

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0e6bf1',
            contrastText: '#fff'
        },
        secondary: {
            main: '#e8f1ff',
            contrastText: '#000'
        }
    },
    typography: {
        fontFamily: 'Inter',
    },
    components: {
        MuiSlider: {
            styleOverrides: {
                rail: {
                    height: '24px'
                },
                track: {
                    color: 'transparent',
                    width: '4rem'
                }
            }
        }
    }
})