import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  currentVisibleModal: null, // can be: 'add-photo'
  alert: {
    isOpen: false,
    severity: null,
    message: null
  },
  photoViewing_id: null // id of photo that is being views, must be string
}

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    openModal(state, { payload }) {
      state.currentVisibleModal = payload
    },
    closeModals(state) {
      state.currentVisibleModal = null
    },
    openAlert(state, { payload }) {
      state.alert = {
        isOpen: true,
        severity: payload.severity,
        message: payload.message
      }
    },
    closeAlert(state) {
      state.alert = {
        isOpen: false,
        severity: null,
        message: null
      }
    },
    setPhotoViewing_id(state, { payload }) {
      state.photoViewing_id = payload
    }
  },
})

export const selectCurrentVisibleModal = (state) => {
  return state.ui.currentVisibleModal
}

export const selectAlert = (state) => {
  return state.ui.alert
}

export const selectPhotoViewing_id = (state) => {
  return state.ui.photoViewing_id
}

export const uiActions = {
  ...uiSlice.actions,
}

const uiReducer = uiSlice.reducer

export default uiReducer