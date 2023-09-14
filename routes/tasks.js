const express = require('express');
const router = express.Router();
const { getAllTasks, createTask, deleteTask, updateTask, getTask, editTask } = require('../controller/tasks');

router.route('/').get(getAllTasks).post(createTask);
router.route('/:id').get(getTask).patch(updateTask).delete(deleteTask).put(editTask);


module.exports = router;