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
	'projects/getAll',
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

export const getSingleProject = createAsyncThunk(
	'projects/getOne',
	async (projectId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await projectService.getSingleProject(projectId, token);
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

export const createProject = createAsyncThunk(
	'projects/create',
	async (projectData, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await projectService.createProject(projectData, token);
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

export const deleteProject = createAsyncThunk(
	'project/delete',
	async (projectId, thunkAPI) => {
		try {
			const token = thunkAPI.getState().auth.user.token;
			return await projectService.deleteProject(projectId, token);
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
			})
			.addCase(getSingleProject.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(getSingleProject.fulfilled, (state, action) => {
				state.isLoading = false;
				state.isSuccess = true;
				state.project = action.payload;
			})
			.addCase(getSingleProject.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(createProject.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(createProject.fulfilled, (state) => {
				state.isLoading = false;
				state.isSuccess = true;
			})
			.addCase(createProject.rejected, (state, action) => {
				state.isLoading = false;
				state.isError = true;
				state.message = action.payload;
			})
			.addCase(deleteProject.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(deleteProject.fulfilled, (state) => {
				state.isSuccess = true;
				state.isLoading = false;
			})
			.addCase(deleteProject.rejected, (state) => {
				state.isError = true;
				state.isLoading = false;
			});
	},
});

export const { reset } = projectSlice.actions;

export default projectSlice.reducer;
