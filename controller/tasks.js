const getAllTasks = (req, res) => {
    res.json(req.body);
}

const createTask = (req, res) => {
    res.json(req.body);
}

const getTask = (req, res) => {
    res.json({id:req.params.id});
}

const updateTask = (req, res) => {
    res.send('all item controller');
}

const deleteTask = (req, res) => {
    res.send('all item controller');
}

module.exports = {
    getAllTasks,
    createTask,
    deleteTask,
    updateTask,
    getTask,
}