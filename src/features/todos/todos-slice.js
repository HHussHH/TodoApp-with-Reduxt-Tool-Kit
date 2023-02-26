import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
  name: "@@todos",
  initialState: [],
  reducers: {
    addTodo: {
      reducer: (state, action) => {
        state.push(action.payload);
      },
      prepare: (title) => ({
        payload: {
          title,
          id: nanoid(),
          completed: false,
        },
      }),
    },
    removeTodo: (state, action) => {
      const id = action.payload;
      return state.filter((todo) => todo.id !== id);
    },
    toggleTodo: (state, action) => {
      const id = action.payload;
      const todo = state.find((todo) => todo.id === id);
      todo.completed = !todo.completed;
    },
    clearComletedTodo: (state, action) => {
      return state.filter((todo) => todo.completed === false);
    },
  },
});

export const selectVisibleTodos = (state, filter) => {
  switch (filter) {
    case "all":
      return state.todos;
    case "active":
      return state.todos.filter((todo) => !todo.completed);
    case "completed":
      return state.todos.filter((todo) => todo.completed);
    default: {
      return state.todos;
    }
  }
};

export const { addTodo, removeTodo, toggleTodo, clearComletedTodo } =
  todoSlice.actions;
export const todosReducer = todoSlice.reducer;
