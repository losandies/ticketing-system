import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import ticketService from './ticketService';

const initialState = {
	ticket: '',
	isLoading: '',
	isSuccess: '',
	isError: '',
	message: '',
};
