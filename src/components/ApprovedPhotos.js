import Box from '@mui/material/Box'
import usePhotos from '../hooks/usePhotos'
import { styled, experimental_sx as sx, } from '@mui/system'

const ApprovedPhotos = ({}) => {
  const photos = usePhotos()

  return (
    <Box
      sx={{
        mt: '10px',
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gap: '5px'
      }}
    >
      {
        photos.approvedPhotos.map((photo) => (
          <Box
            component='img'
            sx={{
              component: 'img',
              borderRadius: '3px',
              aspectRatio: '3 / 2'
            }}
            src={photo.url}
          />
        ))
      }
    </Box>
  )
}

export default ApprovedPhotos
