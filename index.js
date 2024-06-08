const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

// Create express app
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/taskmanager', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.log('Failed to connect to MongoDB', err);
});

// Task Schema
const TaskSchema = new mongoose.Schema({
    title: String,
    description: String,
    dueDate: Date
});

const Task = mongoose.model('Task', TaskSchema);

// Routes

// Retrieve all tasks
app.get('/tasks', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Create a new task
app.post('/tasks', async (req, res) => {
    const task = new Task({
        title: req.body.title,
        description: req.body.description,
        dueDate: req.body.dueDate
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Retrieve a single task by its ID
app.get('/tasks/:id', getTask, (req, res) => {
    res.json(res.task);
});

// Update an existing task
app.put('/tasks/:id', getTask, async (req, res) => {
    if (req.body.title != null) {
        res.task.title = req.body.title;
    }
    if (req.body.description != null) {
        res.task.description = req.body.description;
    }
    if (req.body.dueDate != null) {
        res.task.dueDate = req.body.dueDate;
    }

    try {
        const updatedTask = await res.task.save();
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete a task
app.delete('/tasks/:id', getTask, async (req, res) => {
    try {
        await res.task.remove();
        res.json({ message: 'Task deleted' });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Middleware to get a task by ID
async function getTask(req, res, next) {
    let task;
    try {
        task = await Task.findById(req.params.id);
        if (task == null) {
            return res.status(404).json({ message: 'Task not found' });
        }
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }

    res.task = task;
    next();
}

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
