import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentData: []
}

export const currentWeatherSlice = createSlice({
    name: 'currentWeather',
    initialState,
    reducers:{
        getCurrentData: (state, action) => {
            state.currentData = action.payload
        }
    }
})

export const { getCurrentData } = currentWeatherSlice.actions
export default currentWeatherSlice.reducer