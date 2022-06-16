import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import navigationService from './navigationService';

const initialState = {
	currentPage: 'home',
	isLoading: false,
};

export const switchCurrentPage = createAsyncThunk(
	'navigation/navigate',
	async (page) => {
		return await navigationService.switchCurrentPage(page);
	}
);

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(switchCurrentPage.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(switchCurrentPage.fulfilled, (state, action) => {
				state.isLoading = false;
				state.currentPage = action.payload;
			});
	},
});

export default navigationSlice.reducer;
