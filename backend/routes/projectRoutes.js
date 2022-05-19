const express = require('express');
const router = express.Router();
const {
	createProject,
	getProjects,
	getOneProject,
	editProject,
} = require('../controllers/projectController');

const { protect } = require('../middleware/authMiddleware');

// Create Project
router.post('/create-project', protect, createProject);
// Get All Projects
router.get('/', protect, getProjects);
// Get Single Project
router.get('/project/:id', protect, getOneProject);
// Edit Project
router.put('/project/edit/:id', protect, editProject);
// Delete Project
router.delete('/project/:id');

module.exports = router;
