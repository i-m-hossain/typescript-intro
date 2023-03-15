import React, { useState } from "react";
import { Todo } from "../model";
import {AiOutlineEdit} from "react-icons/ai"
import {AiOutlineDelete} from "react-icons/ai"
interface Props {
    item: Todo;
    todos: Todo[];
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}
const SingleTodo: React.FC<Props> = ({ item, todos, setTodos }) => {
    const [edit, setEdit] = useState<boolean>(false);
    const [editTodo, setEditTodo] = useState<string>(item.todo);

    //completing todo
    const handleTodo = (id: number) => {
        const updatedTodos = todos.map((todo) =>
            todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
        );
        setTodos(updatedTodos);
    };

    // updating todo
    const handleUpdateTodo = (
        e: React.FormEvent,
        id: number,
        updatedTodo: string
    ) => {
        e.preventDefault();
        const updatedTodos = todos.map((todo) =>
            todo.id === id
                ? { ...todo, todo: updatedTodo, isDone: false }
                : todo
        );
        setTodos(updatedTodos);
        setEdit(false);
    };

    // deleting todo
    const handleDelete = (id: number) => {
        const filteredTodos = todos.filter((item) => item.id !== id);
        setTodos(filteredTodos);
    };
    return (
        <form>
            {!edit ? (
                <>
                    <span>
                        {item.todo}
                    </span>
                </>
            ) : (
                <input
                    type="text"
                    value={editTodo}
                    onChange={(e) => {
                        setEditTodo(e.target.value);
                    }}
                />
            )}

            {!edit && (
                <input
                    type="checkbox"
                    checked={item.isDone ? true : false}
                    onChange={() => handleTodo(item.id)}
                />
            )}
            {/* edit button */}
            {!item.isDone && (
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        if (!edit && !item.isDone) {
                            setEdit(true);
                        } else {
                            handleUpdateTodo(e, item.id, editTodo);
                        }
                    }}
                >
                    {!edit ? <AiOutlineEdit/> : "Update" }
                </button>
            )}
            {/* delete button */}
            <button type="button" onClick={() => handleDelete(item.id)}>
                <AiOutlineDelete/>
            </button>
        </form>
    );
};

export default SingleTodo;
