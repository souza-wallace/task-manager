const Task = require("../models/task");

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks});
        
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body); 
        res.status(201).json(task);
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const getTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findById(id);
        if(!task){
            res.status(404).json({msg: 'task not found'})
        } else {
            res.status(200).json({task});
        }
        
    } catch (error) {
        res.status(500).json({msg: error});
    }
}

const updateTask = (req, res) => {
    res.send('all item controller');
}

const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const task = await Task.findByIdAndDelete(id);

        if(!task){
            res.status(404).json({msg: 'task not found'});
        } else {
            res.status(200).json({msg: 'task was excluded with success'});
        }
    } catch (error) {
        res.status(500).json({msg: error});
    }
    res.send('all item controller');
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask,
}