import React, { useState } from "react";
import Todo from "../models/todo";

type TodoContextObj = {
  items: Todo[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};

export const TodoContext = React.createContext<TodoContextObj>({
  items: [],
  addTodo: () => {},
  removeTodo: (id: string) => {},
});

const TodosContenxtProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodoHandle = (todoText: string) => {
    const newTodo = new Todo(todoText);
    setTodos((prev) => prev.concat(newTodo).reverse());
  };

  const removeTodoHandle = (todoId: string) => {
    setTodos((prev) => {
      return prev.filter((todo) => todo.id !== todoId);
    });
  };

  const contextValue: TodoContextObj = {
    items: todos,
    addTodo: addTodoHandle,
    removeTodo: removeTodoHandle,
  };

  return <TodoContext.Provider value={contextValue}>{props.children}</TodoContext.Provider>;
};

export default TodosContenxtProvider;