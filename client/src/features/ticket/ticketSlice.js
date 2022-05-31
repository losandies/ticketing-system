import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketService from './ticketService';

const initialState = {
	ticket: {},
	isLoading: false,
	isSuccess: false,
	isError: false,
	message: '',
};

export const createTicket = createAsyncThunk(
	'ticket/create',
	async (ticketData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			console.log(token);
			console.log(ticketData);
			const { formData, projectId } = ticketData;
			return await ticketService.createTicket(formData, projectId, token);
		} catch (error) {
			const message =
				(error.response &&
					error.response.data &&
					error.response.data.message) ||
				error.message ||
				error.toString();

			return thunkAPI.rejectWithValue(message);
		}
	}
);

const ticketSlice = createSlice({
	name: 'ticket',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(createTicket.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createTicket.fulfilled, (state, action) => {
				state.ticket = action.payload;
				state.isSuccess = true;
				state.isLoading = false;
			})
			.addCase(createTicket.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export default ticketSlice.reducer;
