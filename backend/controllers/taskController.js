import Task from '../models/Task.js';

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
    const { id } = req.params;

    try {
        const task = await Task.findByIdAndDelete(id);
        res.status(200).json({ task });
    }
    catch (error) {
        res.status(400).json({ error: error.message });
    }
}

const updateTask = async (req, res) => {
    const { id } = req.params;
    const { user, taskName, dueDate, description, priority, completed } = req.body;

    try {
        const task = await Task.findByIdAndUpdate(id, { user, taskName, dueDate, description, priority, completed }, { new: true });
        res.status(200).json({ task });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
}