import express from 'express';
import * as TodoController from '../controllers/todo.controller';

const router = express.Router();

router.get('/todos', TodoController.getTodosController);
router.post('/todos', TodoController.addTodoController);
router.put('/todos/:id', TodoController.updateTodoController);
router.delete('/todos/:id', TodoController.deleteTodoController);

export default router;
