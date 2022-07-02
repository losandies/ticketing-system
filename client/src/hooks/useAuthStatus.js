import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const useAuthStatus = () => {
	// Hook to detect if user is still logged in.

	const { user } = useSelector((state) => state.auth);

	const [loggedIn, setLoggedIn] = useState(false);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		if (user) {
			setLoggedIn(true);
		}
		setLoading(false);
	}, [user]);

	return { loggedIn, loading };
};

export default useAuthStatus;
