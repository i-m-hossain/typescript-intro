import React, { useState } from "react";
import { Todo } from "../model";
import SingleTodo from "./SingleTodo";
interface Props {
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const TodoList: React.FC<Props> = ({ todos, setTodos }) => {
    

    return (
        <>
            {todos.map((item) => (
                <SingleTodo
                    item={item}
                    todos={todos}
                    setTodos={setTodos}
                    key={item.id}
                />
            ))}
        </>
    );
};

export default TodoList;
