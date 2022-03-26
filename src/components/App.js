import { useEffect } from 'react'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import AddPhotoModal from './AddPhotoModal'
import Header from './Header'
import ApprovedPhotos from './ApprovedPhotos'
import RejectedPhotos from './RejectedPhotos'
import Alert from './Alert'
import { styled, experimental_sx as sx, } from '@mui/system'

const App = () => {

  useEffect(() => {
    
  }, [])

  return <>
    <Box sx={{ pt: '60px' }}>
      <Header />
      <Container maxWidth='lg'>
        <Paper variant='outlined' sx={{ padding: '5px' }}>
          <Typography variant='h4'>
            Approved
          </Typography>
        </Paper>
        <ApprovedPhotos />
        <Paper variant='outlined' sx={{ padding: '5px', mt: '10px' }}>
          <Typography variant='h4'>
            Rejected
          </Typography>
        </Paper>
        <RejectedPhotos />
      </Container>
    </Box>

    <AddPhotoModal />
    <Alert />
  </>
}

export default App
