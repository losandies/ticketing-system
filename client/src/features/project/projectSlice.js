import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import projectService from './projectService';

const initialState = {
	projects: [],
	project: {},
	isError: false,
	isSuccess: false,
	isLoading: false,
	message: '',
};

export const getProjects = createAsyncThunk(
	'projects/get',
	async (_, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await projectService.getProjects(token);
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

export const projectSlice = createSlice({
	name: 'project',
	initialState,
	reducers: {
		reset: (state) => {
			state.isLoading = false;
			state.isError = false;
			state.isSuccess = false;
			state.message = '';
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getProjects.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getProjects.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.projects = action.payload;
			})
			.addCase(getProjects.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			});
	},
});

export const { reset } = projectSlice.actions;

export default projectSlice.reducer;
