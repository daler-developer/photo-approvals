import Box from '@mui/material/Box'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import DialogContent from '@mui/material/DialogContent'
import Typography from '@mui/material/Typography'
import { useDispatch } from 'react-redux'
import { uiActions } from '../redux/reducers/ui'
import pt from 'prop-types'

const Modal = ({ isOpen, title, children, ...rest }) => {
  const dispatch = useDispatch()

  const handleClose = () => {
    dispatch(uiActions.closeModals())
  }

  return (
    <Dialog
      open={isOpen}
      onClose={handleClose}
      fullWidth
      maxWidth='xs'
      {...rest}
      role='modal'
    >
      <DialogTitle role='modal-title'>{title}</DialogTitle>
      <DialogContent role='modal-content'>{children}</DialogContent>
    </Dialog>
  )
}

Modal.propTypes = {
  isOpen: pt.bool.isRequired,
  title: pt.string.isRequired,
  children: pt.any.isRequired,
}

export default Modal
