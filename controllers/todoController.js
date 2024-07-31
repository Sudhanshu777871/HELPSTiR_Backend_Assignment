const { readTodos, writeTodos } = require('../services/todoService');
const { v4: uuidv4 } = require('uuid');

exports.getTodos = (req, res) => {
    const todos = readTodos();
    res.json(todos);
};

exports.addTodo = (req, res) => {
    const todos = readTodos();
    const newTodo = { id: uuidv4(), ...req.body, done: false };
    todos.push(newTodo);
    writeTodos(todos);
    res.status(201).json(newTodo);
};

exports.updateTodo = (req, res) => {
    const todos = readTodos();
    const { id } = req.params;
    const updatedTodo = req.body;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index] = { ...todos[index], ...updatedTodo };
        writeTodos(todos);
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

exports.deleteTodo = (req, res) => {
    const todos = readTodos();
    const { id } = req.params;
    const filteredTodos = todos.filter(todo => todo.id !== id);
    writeTodos(filteredTodos);
    res.status(204).send();
};

exports.markTodoDone = (req, res) => {
    const todos = readTodos();
    const { id } = req.params;
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos[index].done = true;
        writeTodos(todos);
        res.json(todos[index]);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};
