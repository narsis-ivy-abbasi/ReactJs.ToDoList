import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  items: [],
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: (state, action) => {
      if (action.payload.trim()) {
      state.items.push({ text: action.payload, completed: false });
      }
    },
    removeTask: (state, action) => {
      state.items.splice(action.payload, 1);
    },
    toggleTask: (state, action) => {
      const task = state.items[action.payload];
      task.completed = !task.completed;
    },
  },
});

export const { addTask, removeTask, toggleTask } = tasksSlice.actions;

export default tasksSlice.reducer;