import pt from 'prop-types'
import Box from '@mui/material/Box'
import { useState } from 'react'
import { styled, experimental_sx as sx, } from '@mui/system'

const LoadingImage = ({ src, sx, ...rest }) => {
  const [isLoading, setIsLoading] = useState(true)

  const handleImgLoad = () => {
    setIsLoading(false)
  }
  
  return (
    <Box
      sx={{ 
        borderRadius: '3px',
        overflow: 'hidden',
        ...sx
      }}
      {...rest}
    >
      {
        isLoading && (
          <Box>Loading</Box>
        )
      }
      <Box
        component='img' 
        src={src}
        onLoad={handleImgLoad} 
        sx={{
          width: '100%',
          height: '100%',
          ...(isLoading && { transform: 'scale(0)' }),
        }}
      />
    </Box>
  )
}

LoadingImage.propTypes = {
  src: pt.string.isRequired,
}

export default LoadingImage
