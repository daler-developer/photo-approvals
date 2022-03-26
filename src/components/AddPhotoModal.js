import Box from '@mui/material/Box'
import { useSelector } from 'react-redux'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CircularProgress from '@mui/material/CircularProgress'
import IconButton from '@mui/material/IconButton'
import CloseIcon from '@mui/icons-material/Close'
import { selectCurrentVisibleModal } from '../redux/reducers/ui'
import Modal from './Modal'
import { selectApprovedPhotos, selectRejectedPhotos } from '../redux/reducers/photos'
import { useEffect, useMemo, useState } from 'react'
import usePhotos from '../hooks/usePhotos'
import LoadingImage from './LoadingImage'
import { styled, experimental_sx as sx, } from '@mui/system'


const AddPhotoModal = ({}) => {
  const isOpen = useSelector((state) => selectCurrentVisibleModal(state)) === 'add-photo'

  const photos = usePhotos()

  useEffect(() => {
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

      <Typography variant='body1' sx={{ color: 'primary.main', fontWeight: '600', userSelect: 'none' }}>
        APPROVED IMAGES ({photos.numApproved})
      </Typography>

      <Box
        sx={{
          display: 'flex',
          mt: '4px',
          columnGap: '4px',
          overflowX: 'auto',
          pb: '4px'
        }}
      >
        {
          photos.approvedPhotos.map((photo) => (
            <Box
              key={photo.id}
              sx={{
                position: 'relative',
                flex: '0 0 70px',
                aspectRatio: '3 / 2',
                borderRadius: '3px',
                overflow: 'hidden'
              }}
            >
              <Box
                component='img' 
                src={photo.url} 
                sx={{ width: '100%', height: '100%' }} 
              />
            </Box>
          ))
        }
      </Box>
      
      <Box
        sx={{
          mt: '4px',
          width: '100%',
          aspectRatio: '1 / 1',
          border: '1px solid grey',
          borderRadius: '3px',
          overflow: 'hidden'
        }}
      >
        {
          photos.photoPresented && (
            <Box
              sx={{
                height: '100%',
                width: '100%',
              }}
            >
              <Box
                component='img'
                sx={{
                  width: '100%',
                  height: '100%',
                }}
                src={photos.photoPresented.url}
              />
            </Box>
          )
        }
      </Box>

      <Box
        sx={{
          mt: '4px',
          display: 'flex',
          columnGap: '4px'
        }}
      >
        <Button
          sx={{ flex: '1 0 0' }}
          color='error'
          variant='contained'
          onClick={handleRejectBtnClick}
        >
          Reject
        </Button>
        <Button
          sx={{ flex: '1 0 0' }}
          color='success'
          variant='contained'
          onClick={handleApproveBtnClick}
        >
          Approve
        </Button>
      </Box>

    </Modal>
  )
}

const StyledApprovedLabel = styled(Typography)(
  sx({
    color: 'primary.main',
    fontWeight: '600', 
    userSelect: 'none'
  })
)

export default AddPhotoModal
