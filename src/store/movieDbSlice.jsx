import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    bannerData: [],
    imageURL: ''
}

export const movieDbSlice = createSlice({
    name: 'movieDb',
    initialState,
    reducers: {
        setBannerData: (state, action) => {
            state.bannerData = action.payload
        },
        setImageURL: (state, action) => {
            state.imageURL = action.payload
        }
    }
})

export const { setBannerData, setImageURL } = movieDbSlice.actions;

export default movieDbSlice.reducer