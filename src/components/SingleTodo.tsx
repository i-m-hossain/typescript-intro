import React, { useState } from "react";
import { Todo } from "../model";
interface Props {
  item: Todo;
  handleTodo: (id: number) => void;
}
const SingleTodo: React.FC<Props> = ({ item, handleTodo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>("");
  return (
    <div>
      {edit ? (
        <input
          type="text"
          value={item.todo}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : (
        <span>
          {item.todo}
          {item.isDone ? "done" : ""}
        </span>
      )}
      {!edit && (
        <input
          type="checkbox"
          checked={item.isDone ? true : false}
          onChange={() => handleTodo(item.id)}
        />
      )}
      {!item.isDone && (
        <button
          onClick={() => {
            if (!item.isDone && !edit) {
              setEdit(true);
            } else {
              alert("hello");
            }
          }}
        >
          {!edit ? "edit" : "update"}
        </button>
      )}
    </div>
  );
};

export default SingleTodo;
