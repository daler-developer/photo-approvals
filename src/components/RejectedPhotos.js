import Box from '@mui/material/Box'
import { experimental_sx as sx, styled } from '@mui/system'
import usePhotos from '../hooks/usePhotos'

const RejectedPhotos = ({}) => {
  const photos = usePhotos()

  return (
    <StyledWrapper>
      {photos.rejectedPhotos.map((photo) => (
        <StyledPhoto
          key={photo.id}
          component='img'
          src={photo.url}
          onClick={() => photos.viewPhoto(photo.id)}
        />
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled(Box)(
  sx({
    mt: '10px',
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '5px',
  })
)

const StyledPhoto = styled(Box)(
  sx({
    component: 'img',
    borderRadius: '3px',
    aspectRatio: '3 / 2',
    ':hover': {
      transform: 'scale(1.02)',
    },
  })
)

export default RejectedPhotos
