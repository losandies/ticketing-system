import { configureStore } from '@reduxjs/toolkit';
import authReducer from './features/auth/authSlice';
import navigationReducer from './features/navigation/navigationSlice';
import projectReducer from './features/project/projectSlice';
import ticketReducer from './features/ticket/ticketSlice';

export default configureStore({
	reducer: {
		auth: authReducer,
		navigation: navigationReducer,
		project: projectReducer,
		ticket: ticketReducer,
	},
});
