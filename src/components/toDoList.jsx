import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask } from "../store/slices/tasksSlice";  
import Item from "./item";
import "../style/style.css";

export default function ToDoList() {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.tasks.items);

  const handleAddTask = () => {
    dispatch(addTask(inputValue));
    setInputValue("");
  };

  return (
    <div>
      <div className="control-style">
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            style={{ width: "100%", padding: 5, marginBottom: 5 }}
            placeholder="Add a new task"
          />
        </div>
        <div className="div-add-style">
          <button onClick={handleAddTask} className="add-btn-style">
            Add Task
          </button>
          <div>
            {tasks.map((task, index) => (
              <Item
                key={index}
                text={task.text}
                id={index}
                completed={task.completed}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
