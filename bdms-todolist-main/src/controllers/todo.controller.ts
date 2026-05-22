import { Request, Response } from 'express';
import * as TodoService from '../services/todo.service';
import { Todo } from '../models/todo.model';

export class CustomError extends Error {
  constructor(message: string, public status: number = 500) {
    super(message);
    this.name = this.constructor.name;
  }
}

export const getTodosController = (req: Request, res: Response): void => {
  try {
    const todos: Todo[] = TodoService.getTodos();
    res.status(200).json({
      message: 'Get Todo - Successfully',
      data: todos,
    });
  } catch (error: any) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const addTodoController = (req: Request, res: Response): void => {
  try {
    const { task } = req.body;
    if (!task) {
      throw new CustomError('Task is required', 400);
    }
    const newTodo: Todo = TodoService.addTodo(task);
    if (newTodo) {
      res.status(201).json({
        message: 'Add Todo - Successfully',
        data: newTodo,
      });
    } else {
      throw new CustomError('Add Todo - Failed', 404);
    }
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

export const updateTodoController = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      throw new CustomError('ID is required', 400);
    }

    const { task } = req.body;
    if (!task) {
      throw new CustomError('Task is required', 400);
    }

    const todos: Todo[] = TodoService.getTodos();
    const foundTodo: Todo | undefined = todos.find(todo => todo.id === id)
    if (!foundTodo) {
      throw new CustomError('ID not found', 400);
    }

    const updatedTodo = TodoService.updateTodo(id, task);
    if (updatedTodo) {
      res.status(200).json({
        message: `Update Todo (${id}) : Successfully`,
        data: updatedTodo,
      });
    } else {
      throw new CustomError(`Update Todo (${id}) : Failed`, 404);
    }
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message });
  }
};

export const deleteTodoController = (req: Request, res: Response): void => {
  try {
    const id = parseInt(req.params.id);
    if (!id) {
      throw new CustomError('ID is required', 400);
    }

    const todos: Todo[] = TodoService.getTodos();
    const foundTodo: Todo | undefined = todos.find(todo => todo.id === id)
    if (!foundTodo) {
      throw new CustomError('ID not found', 400);
    }

    const deleted = TodoService.deleteTodo(id);
    if (deleted) {
      res.status(200).json({
        message: `Delete Todo (${id}) : Successfully`
      });
    } else {
      throw new CustomError(`Delete Todo (${id}) - Failed`, 404);
    }
  } catch (error: any) {
    res.status(error.status || 500).json({ error: error.message });
  }
};
