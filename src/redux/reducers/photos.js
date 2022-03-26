import { createSlice, PayloadAction } from '@reduxjs/toolkit'



const initialState = {
  list: []
}

const photosSlice = createSlice({
  name: 'photos',
  initialState,
  reducers: {
    addPhoto(state, { payload }) {
      state.list.push(payload)
    },
    addPhotos(state, { payload }) {
      state.list.push(payload)
    }
  }
})

export const selectPhotos = (state) => {
  return state.photos.list
}

export const selectApprovedPhotos = (state) => {
  return state.photos.list.filter((photo) => photo.isApproved === true)
}

export const selectRejectedPhotos = (state) => {
  return state.photos.list.filter((photo) => photo.isApproved !== true)
}

export const phototsActions = {
  ...photosSlice.actions,
}

const photosReducer = photosSlice.reducer

export default photosReducer