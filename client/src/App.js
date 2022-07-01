import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Project from './pages/projectpages/Project';
import CreateProject from './pages/projectpages/CreateProject';
import CreateTicket from './pages/ticketpages/CreateTicket';
import PrivateRoute from './components/PrivateRoute';

import { ToastContainer } from 'react-toastify';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import MyTasks from './pages/MyTasks';

function App() {
	return (
		<>
			<Router>
				<div className="h-[100%]">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/register" element={<Register />} />
						<Route path="/login" element={<Login />} />
						<Route path="/dashboard" element={<PrivateRoute />}>
							<Route path="/dashboard" element={<Dashboard />} />
						</Route>
						<Route path="/mytasks" element={<PrivateRoute />}>
							<Route path="/mytasks" element={<MyTasks />} />
						</Route>
						<Route path="/project/:projectId" element={<PrivateRoute />}>
							<Route path="/project/:projectId" element={<Project />} />
						</Route>
						<Route path="/create-project" element={<PrivateRoute />}>
							<Route path="/create-project" element={<CreateProject />} />
						</Route>
						<Route
							path="/project/:projectId/create-ticket"
							element={<PrivateRoute />}
						>
							<Route
								path="/project/:projectId/create-ticket"
								element={<CreateTicket />}
							/>
						</Route>
					</Routes>
				</div>
			</Router>
			<ToastContainer />
		</>
	);
}

export default App;
