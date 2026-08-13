import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    openState: false
}

export const sideBarStateSlice = createSlice({
    name: 'sideBarState',
    initialState,
    reducers:{
        sideBarState: (state) => {
            state.openState = !state.openState
        }
    }
})

export const { sideBarState } = sideBarStateSlice.actions
export default sideBarStateSlice.reducer