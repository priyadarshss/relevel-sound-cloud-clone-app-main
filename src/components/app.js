import '../styles/app.css'
import {
  Box,
  Card,
  CardContent,
  CircularProgress,
  Container,
  Grid,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import Data from "../playlist.json"

function App() {
  document.body.style.background = '#1d1e21'
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState(Data)

  function SecondsToMinutes(seconds) {
    const minutes = Math.floor(seconds / 60)
    const remainingSeconds = seconds % 60
    const formattedMinutes = String(minutes).padStart(2, '0')
    const formattedSeconds = String(remainingSeconds).padStart(2, '0')

    console.log("seconds", seconds)

    return (
      <div>
        {formattedMinutes}:{formattedSeconds}
      </div>
    )
  }
  
  useEffect(() =>{
    setIsLoading(false);
  }, data)

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
      {/* Songs */}
      <Grid>
        {isLoading ? (
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
        ) : (
          <Container fixed>
            <Grid
              container
              spacing={1}
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: '20px',
                marginBottom: '100px',
              }}
            >
              {data.map((song, index) => (
                <Grid
                  item
                  xs={3}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <Card
                    sx={{
                      maxWidth: 250,
                      backgroundColor: 'black',
                      margin: '10px',
                    }}
                  >
                    <CardContent sx={{ backgroundColor: '#161716' }}>
                      <img src={song.artworkUrl} alt='' height='200px' />
                      <Typography
                        gutterBottom
                        variant='h7'
                        component='div'
                        color='white'
                      >
                        {song.title}
                      </Typography>
                      <Typography variant='body2' color='grey'>
                        {song.user.username}
                      </Typography>
                    </CardContent>
                    <CardContent
                      sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        backgroundColor: '#161716',
                      }}
                    >
                      <Typography variant='body2' color='white'>
                        {SecondsToMinutes(song.duration)}{' '}
                      </Typography>
                      <Typography variant='body2' color='white'>
                        {song.playback_count}
                      </Typography>
                    </CardContent>
                    {/* <CardActions>
                      <Button size='small'>Share</Button>
                      <Button size='small'>Learn More</Button>
                    </CardActions> */}
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Container>
        )}
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
