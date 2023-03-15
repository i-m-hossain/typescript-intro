import React, { useState } from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
  const handleTodo = (id: number) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <>
      {todos.map((item) => (
        <SingleTodo item={item} handleTodo={handleTodo} />
      ))}
    </>
  );
};

export default TodoList;
