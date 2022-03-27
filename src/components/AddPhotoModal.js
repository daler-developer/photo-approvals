import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { experimental_sx as sx, styled } from '@mui/system'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import usePhotos from '../hooks/usePhotos'
import { selectCurrentVisibleModal } from '../redux/reducers/ui'
import Modal from './Modal'

const AddPhotoModal = () => {
  const isOpen =
    useSelector((state) => selectCurrentVisibleModal(state)) === 'add-photo'

  const photos = usePhotos()

  useEffect(() => {
    // once add photo modal is opened, present new photo to user
    if (isOpen) {
      photos.presentNewPhoto()
    }
  }, [isOpen])

  const handleApproveBtnClick = () => {
    photos.approvePhotoPresented()
    photos.presentNewPhoto()
  }

  const handleRejectBtnClick = () => {
    photos.rejectPhotoPresented()
    photos.presentNewPhoto()
  }

  return (
    <Modal isOpen={isOpen} title='Add Photo'>
      <StyledApprovedLabel variant='body1'>
        APPROVED IMAGES ({photos.numApproved})
      </StyledApprovedLabel>

      <StyledApprovedPhotosList>
        {photos.approvedPhotos.map((photo) => (
          <StyledApprovedPhotoContainer key={photo.id}>
            <StyledApprovedPhoto component='img' src={photo.url} />
          </StyledApprovedPhotoContainer>
        ))}
      </StyledApprovedPhotosList>

      <StyledPhotoContainer>
        {photos.photoPresented && (
          <StyledPhotoPresented
            component='img'
            src={photos.photoPresented.url}
          />
        )}
      </StyledPhotoContainer>

      <StyledButtonsContainer>
        <StyledButton
          color='error'
          variant='contained'
          onClick={handleRejectBtnClick}
        >
          Reject
        </StyledButton>
        <StyledButton
          color='success'
          variant='contained'
          onClick={handleApproveBtnClick}
        >
          Approve
        </StyledButton>
      </StyledButtonsContainer>
    </Modal>
  )
}

const StyledApprovedLabel = styled(Typography)(
  sx({
    color: 'primary.main',
    fontWeight: '600',
    userSelect: 'none',
  })
)

const StyledApprovedPhotosList = styled(Box)(
  sx({
    display: 'flex',
    mt: '4px',
    columnGap: '4px',
    overflowX: 'auto',
    pb: '4px',
  })
)

const StyledApprovedPhotoContainer = styled(Box)(
  sx({
    position: 'relative',
    flex: '0 0 70px',
    aspectRatio: '3 / 2',
    borderRadius: '3px',
    overflow: 'hidden',
  })
)

const StyledApprovedPhoto = styled(Box)(
  sx({
    width: '100%',
    height: '100%',
  })
)

const StyledPhotoContainer = styled(Box)(
  sx({
    mt: '4px',
    width: '100%',
    aspectRatio: '1 / 1',
    border: '1px solid grey',
    borderRadius: '3px',
    overflow: 'hidden',
  })
)

const StyledPhotoPresented = styled(Box)(
  sx({
    height: '100%',
    width: '100%',
  })
)

const StyledButtonsContainer = styled(Box)(
  sx({
    mt: '4px',
    display: 'flex',
    columnGap: '4px',
  })
)

const StyledButton = styled(Button)(
  sx({
    flex: '1 0 0',
  })
)

export default AddPhotoModal
