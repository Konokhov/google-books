import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    categoryName: 'all',
    sortName: 'relevance',
};

export const filterSlice = createSlice({
    name: 'filter',
    initialState,
    reducers: {
        setCategory: (state, action) => {
            if (!!action.payload) {
                state.categoryName = action.payload;
            } else {
                state.categoryName = "all";
            }
        },
        setSort: (state, action) => {
            state.sortName = action.payload;
        }
    }
});

export const { setCategory, setSort } = filterSlice.actions;
export default filterSlice.reducer;