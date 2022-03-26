import { createSlice, PayloadAction } from '@reduxjs/toolkit'


const initialState = {
  currentVisibleModal: null, // can be: 'add-photo'
  alert: {
    isOpen: false,
    severity: null,
    message: null
  }
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
    }
  },
})

export const selectCurrentVisibleModal = (state) => {
  return state.ui.currentVisibleModal
}

export const selectAlert = (state) => {
  return state.ui.alert
}

export const uiActions = {
  ...uiSlice.actions,
}

const uiReducer = uiSlice.reducer

export default uiReducer