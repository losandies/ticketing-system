import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {
	return (
		<>
			<Router>
				<div>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<PrivateRoute />}>
							<Route path="/dashboard" element={<Dashboard />} />
						</Route>
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
