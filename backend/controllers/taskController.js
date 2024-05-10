const Task=require('../models/TaskModel');

const createTask = async (req, res) => {
    const { user, taskName, dueDate, description, priority, completed } = req.body;

    try {
        const task = await Task.create({ user, taskName, dueDate, description, priority, completed });
        res.status(201).json({ task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const getTasks = async (req, res) => {
    try {
        const tasks = await Task.find();
        res.status(200).json({ tasks });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const deleteTask = async (req, res) => {
    const { _id } = req.params;
    
    try {
        const task = await Task.findByIdAndDelete(_id);
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateTask = async (req, res) => {
    const { _id } = req.params;
    const { user, taskName, dueDate, description, priority, completed } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(_id, { user, taskName, dueDate, description, priority, completed }, { new: true });
        res.status(200).json({ task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}

module.exports = { createTask, getTasks, deleteTask, updateTask };