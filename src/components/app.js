import '../styles/app.css'
import {
  Box,
  CircularProgress,
  Grid,
  Typography,
} from '@mui/material'
import { useState } from 'react'

function App() {
  document.body.style.background = '#1d1e21'
  const [isLoading, setIsLoading] = useState(true)

  return (
    <div>
      {/* Header */}
      <Grid
        style={{
          backgroundColor: '#1d1e21',
          height: '60px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderBottom: '3px solid black',
          boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.5)',
        }}
      >
        <h1 style={{ color: '#6d6e6e', marginRight: '10px', fontSize: '20px' }}>
          Relevel Sound Cloud
        </h1>
      </Grid>
      <Grid>
        {
          isLoading ? (
            <Box
              sx={{
                height: '50vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <CircularProgress />
            </Box>
          ) : null
          // data here
        }
      </Grid>
      {/* Progress bar */}
      <Grid>
        <div
          style={{
            width: '100%',
            backgroundColor: 'white',
            height: '5px',
            marginTop: '10px',
            position: 'fixed',
            bottom: '40px',
          }}
        >
          <div
            style={{
              width: `${0.2 * 100}%`,
              backgroundColor: 'green',
              height: '5px',
            }}
          />
        </div>
        <div
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: 'black',
            position: 'fixed',
            bottom: '0px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '0 10px',
          }}
        >
          <Typography style={{ color: '#6d6e6e', fontSize: '15px' }}>
            01:00 / 03:00
          </Typography>
        </div>
      </Grid>
    </div>
  )
}

export default App
