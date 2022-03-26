import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import logo from '../assets/logo.jpg'
import { useDispatch } from 'react-redux'
import { uiActions } from '../redux/reducers/ui'
import { styled, experimental_sx as sx, } from '@mui/system'

const Header = () => {
  const dispatch = useDispatch()

  const handleAddPhotoBtnClick = () => {
    dispatch(uiActions.openModal('add-photo'))
  }
  
  return <>
    <StyledHeader>
      <Container
        maxWidth='lg'
        sx={{
          height: '50px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between'
        }}
      >
        <Box component='img' src={logo} sx={{ height: '90%' }} />
        <Button
          onClick={handleAddPhotoBtnClick}
          endIcon={<AddIcon />}
          variant='outlined'
        >
          New
        </Button>
      </Container>
    </StyledHeader>
  </>
}

const StyledHeader = styled(Box)(
  sx({
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    boxShadow: 2
  })
)

export default Header
