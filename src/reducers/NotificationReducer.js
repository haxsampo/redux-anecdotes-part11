import { createSlice } from '@reduxjs/toolkit'

const notificationSlice = createSlice({
  name: 'notification',
  initialState: 'initial notification',
  reducers: {
    reset() { // reset(state, action) {
      return ''
    },
    setNotifJuttu(state, action) {
      return action.payload
    }
  }
})

export const { setNotifJuttu, reset } = notificationSlice.actions

export const setNotification = (msg, showTime) => {
  return async dispatch => {
    dispatch(setNotifJuttu(msg))
    setTimeout(() => {
      dispatch(reset())
    }, showTime)
  }
}

export default notificationSlice.reducer