import React, { useContext } from "react";
import TodosItem from "./TodosItem";
import classes from "./Todos.module.css";
import { TodoContext } from "../store/todo-context";

const Todos: React.FC = () => {
  const todoCtx = useContext(TodoContext);

  return (
    <ul className={classes.todos}>
      {todoCtx.items.map((item) => (
        <TodosItem
          key={item.id}
          text={item.text}
          handleRemove={todoCtx.removeTodo.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default Todos;
