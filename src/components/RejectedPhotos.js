import Box from '@mui/material/Box'
import usePhotos from '../hooks/usePhotos'
import { styled, experimental_sx as sx, } from '@mui/system'

const RejectedPhotos = ({}) => {
  const photos = usePhotos()

  return (
    <StyledWrapper>
      {
        photos.rejectedPhotos.map((photo) => (
          <StyledPhoto
            component='img'
            src={photo.url}
            onClick={() => photos.viewPhoto(photo.id)}
          />
        ))
      }
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Box)(
  sx({
    mt: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '5px'
  })
)

const StyledPhoto = styled(Box)(
  sx({
    component: 'img',
    borderRadius: '3px',
    aspectRatio: '3 / 2'
  })
)

export default RejectedPhotos
