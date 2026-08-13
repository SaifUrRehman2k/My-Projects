import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'
import currentWeatherReducer from './WeatherDataSlices/currentData'
import sideBsrStateReducer from './AppSlices/Sidebar'

export default configureStore({
  reducer: {
    counter: counterReducer,
    currentData: currentWeatherReducer,
    sideBarState: sideBsrStateReducer
  },
})