import React from "react";
import { useDispatch } from "react-redux";
import { removeTask, toggleTask } from "../store/slices/tasksSlice"; // Import toggleTask
import "../style/style.css";

export default function Item({ text, id, completed }) {
  const dispatch = useDispatch();

  return (
    <div className="item-style">
      <div>{id + 1}</div>
      <div style={{ padding: "0 5px" }}>
        <input
          type="checkbox"
          id={`checkbox-${id}`}
          checked={completed}
          onChange={() => dispatch(toggleTask(id))}
        />
      </div>
      <div
        style={{
          flexGrow: 1,
          textDecoration: completed ? "line-through" : "none",
        }}
      >
        <label htmlFor={`checkbox-${id}`}>{text}</label>
      </div>
      <div>
        <button
          className="delete-Btn-style"
          onClick={() => dispatch(removeTask(id))}
        >
          Delete
        </button>
      </div>
    </div>
  );
}
