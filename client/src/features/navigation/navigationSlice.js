import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import navigationService from './navigationService';

const initialState = {
	currentPage: 'home',
	isLoading: false,
};

export const navigate = createAsyncThunk(
	'navigation/navigate',
	async (page) => {
		return await navigationService.navigate(page);
	}
);

export const navigationSlice = createSlice({
	name: 'navigation',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(navigate.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(navigate.fulfilled, (state, action) => {
				state.isLoading = false;
				state.currentPage = action.payload;
			});
	},
});

export default navigationSlice.reducer;
