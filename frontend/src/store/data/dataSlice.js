import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    filesData: [],
};

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        setData: (state, action) => {
            state.filesData = action.payload;
        }
    }
});

export const { setData } = dataSlice.actions;
export default dataSlice.reducer;