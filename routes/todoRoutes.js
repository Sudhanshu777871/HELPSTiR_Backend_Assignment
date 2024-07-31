const express = require('express');
const { getTodos, addTodo, updateTodo, deleteTodo, markTodoDone } = require('../controllers/todoController');

const router = express.Router();

router.get('/', getTodos);
router.post('/', addTodo);
router.put('/:id', updateTodo);
router.delete('/:id', deleteTodo);
router.patch('/:id/done', markTodoDone);

module.exports = router;
