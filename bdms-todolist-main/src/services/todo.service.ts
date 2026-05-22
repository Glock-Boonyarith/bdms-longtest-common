import { error } from 'console';
import { Todo } from '../models/todo.model';

let todoList: Todo[] = [];

export const getTodos = (): Todo[] => {
  return todoList;
};

export const addTodo = (task: string): Todo => {
  const newTodo: Todo = {
    id: todoList.length + 1,
    task,
  };
  todoList.push(newTodo);
  return newTodo;
};

export const updateTodo = (id: number, task: string): Todo | null => {
  const todoIndex = todoList.findIndex((todo) => todo.id === id);
  if (todoIndex !== -1) {
    todoList[todoIndex].task = task;
    return todoList[todoIndex];
  }
  return null;
};

export const deleteTodo = (id: number): boolean => {
  const initialLength = todoList.length;
  todoList = todoList.filter((todo) => todo.id !== id);
  return todoList.length !== initialLength;
};
