import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketService from './ticketService';

const initialState = {
	ticket: {},
	userTickets: [],
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

export const claimTicket = createAsyncThunk(
	'ticket/getOne',
	async (ticketData, thunkAPI) => {
		const { ticketId, projectId } = ticketData;

		try {
			const token = thunkAPI.getState().auth.user.token;
			console.log(token);
			return await ticketService.claimTicket(ticketId, projectId, token);
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

export const completeTicket = createAsyncThunk(
	'ticket/complete',
	async (ticketData, thunkAPI) => {
		const { ticketId, projectId } = ticketData;

		try {
			const token = thunkAPI.getState().auth.user.token;
			console.log(token);
			return await ticketService.completeTicket(ticketId, projectId, token);
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
export const reopenTicket = createAsyncThunk(
	'ticket/reopen',
	async (ticketData, thunkAPI) => {
		const { ticketId, projectId } = ticketData;

		try {
			const token = thunkAPI.getState().auth.user.token;
			console.log(token);
			return await ticketService.reopenTicket(ticketId, projectId, token);
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

export const deleteTicket = createAsyncThunk(
	'ticket/delete',
	async (ticketData, thunkAPI) => {
		const { projectId, ticketId } = ticketData;
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await ticketService.deleteTicket(ticketId, projectId, token);
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

export const getUserTickets = createAsyncThunk(
	'tickets/getUserTickets',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await ticketService.getUserTickets(token);
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
			})
			.addCase(claimTicket.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(claimTicket.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(claimTicket.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(getUserTickets.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getUserTickets.fulfilled, (state, action) => {
				state.isLoading = false;
				state.userTickets = action.payload;
				state.isSuccess = true;
			})
			.addCase(getUserTickets.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteTicket.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteTicket.fulfilled, (state) => {
				state.isSuccess = true;
				state.isLoading = false;
			})
			.addCase(deleteTicket.rejected, (state) => {
				state.isError = true;
				state.isLoading = false;
			})
			.addCase(completeTicket.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(completeTicket.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(completeTicket.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(reopenTicket.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(reopenTicket.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(reopenTicket.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export default ticketSlice.reducer;
