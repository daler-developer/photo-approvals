import MuiAlert from '@mui/material/Alert'
import MuiSnackbar from '@mui/material/Snackbar'
import { useDispatch } from 'react-redux'
import useAlert from '../hooks/useAlert'
import { styled, experimental_sx as sx } from '@mui/system'

const Alert = () => {
  const alert = useAlert()

  const handleClose = () => {
    alert.close()
  }

  if (!alert.isOpen) {
    return null
  }

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      open={alert.isOpen}
      onClose={handleClose}
      autoHideDuration={5000}
    >
      <MuiAlert variant='filled' severity={alert.severity}>
        {alert.message}
      </MuiAlert>
    </MuiSnackbar>
  )
}

export default Alert
