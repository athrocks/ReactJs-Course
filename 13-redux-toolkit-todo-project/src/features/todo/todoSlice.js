import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  // todos: [{ id: 1, text: "Hello World" }],
  todos: [],
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state -> access to currently what is the initial state && actions -> access to values which may need
      const todo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todos.push(todo);
    },

    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },

    // updateTodo: () => {}
  },
});

// export reducers individualy
export const {addTodo,removeTodo} = todoSlice.actions;

// export reducers list also as whole
export default todoSlice.reducer;