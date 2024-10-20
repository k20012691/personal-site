import React, { useEffect, useState } from 'react'
import { Map, MapProvider, useMap } from 'react-map-gl/maplibre'
import "../../../node_modules/maplibre-gl/dist/maplibre-gl.css";
import './MapStyle.css'
import { Container, Typography, useMediaQuery } from '@mui/material';
import Flag from 'react-world-flags';

export function TravelList() {
  return (
    <Container sx={{ 
      display: 'grid',
      gap: '1rem',
      '@media (min-width: 600px)': { padding: 0 }
    }}>
      <Container className='travel-item'>
        <Flag code='ES' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>Barcelona, Spain</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>2024</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='CZ' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>Prague, Czechia</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2024</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='NL' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>Amsterdam, Netherlands</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2024</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='GB' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>London, UK</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2018</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='HK' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>Hong Kong, HK</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2017</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='ID' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>Bali, Indonesia</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2016</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='SC' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>Mahé, Seychelles</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2012</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='MV' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>Malé, Maldives</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2011</Typography>
      </Container>
      <Container className='travel-item'>
        <Flag code='SG' width={30} />
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit' }}>Singapore, SG</Typography>
        <Typography sx={{ fontSize: 'inherit', fontWeight: 'inherit'  }}>2010</Typography>
      </Container>
    </Container>
  )
}

function MapComponent() {
    const Mobile = useMediaQuery('(min-width: 600px)')

    const [coordinates, setCoordinates] = useState({
        latitude: 51.5,
        longitude: -1,
        zoom: 5,
      });
    
      function FlyToCoordinates() {
        const {current: map} = useMap();
        // map.flyTo(coordinates)
        console.log(map)
      }
    
      function handleCountryChange(coords) {
        const updatePromise = new Promise((resolve) => {
          setCoordinates(coords, resolve);
        });
      
        updatePromise.then(() => {
          console.log(`final coords: ${coordinates}`);
        });
        console.log(`received ${JSON.stringify(coords)}`);
      }
    
      useEffect(() => {
        if (coordinates) {
          
        }
      })
    

    return (
        <div style={{ position: 'relative' }}>
            <MapProvider>
              <Map
                  initialViewState={coordinates}
                //   zoom={5}
                //   latitude={coordinates.latitude}
                //   longitude={coordinates.longitude}
                  minZoom={2}
                  mapStyle="https://api.maptiler.com/maps/5e4b20c9-ef20-43c3-b193-1b73b78bb177/style.json?key=EwzBAOd5pizuaQtP2h4o"
                  style={{ height: 500, borderRadius: '15px'}}
                />
              {Mobile ? <Container 
                sx={{ 
                  position: 'absolute', 
                  top: 0,
                  height: '100%',
                  width: '35%',
                  backgroundColor: '#282828',
                  borderRadius: '15px 0 0 15px',
                  '@media (min-width: 600px)': {
                    padding: '2rem',
                  },
                }}
              >
                <Typography
                  sx={{
                    color: '#fafafa',
                    fontWeight: 500,
                    fontSize: '20px',
                    marginBottom: '1rem'
                  }}
                >
                  Places I've Visited
                </Typography>
                <TravelList />
              </Container>
              : <></>
              }
              <FlyToCoordinates />
            </MapProvider>
        </div>
    )
}

export default MapComponent