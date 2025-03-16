## [Redux-Toolkit](https://redux-toolkit.js.org/introduction/getting-started)

1. Create React-vite app

2. `npm install @reduxjs/toolkit`

3. `npm install react-redux`

4. Configure Store

   - create `app/store.js` in `src`

     ```js
     import { configureStore } from "@reduxjs/toolkit";

     export const store = configureStore({});
     ```

5. Configure in main.jsx
   ```js
      import { Provider } from "react-redux";
      import { store } from "./app/store.js";
      
      createRoot(document.getElementById("root")).render(
        <Provider store={store}>
          <App />
        </Provider>
      );
   ```

6. Create Reducer

   - create `features/todo/todoSlice.js` in `src`

     ```js
     import { createSlice, nanoid } from "@reduxjs/toolkit";

     const inititalState = {
       todos: [{ id: 1, text: "Hello World" }],
     };

     export const todoSlice = createSlice({
       name: "todo",
       inititalState,
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
           state.todos = state.todos.filter(
             (todo) => todo.id !== action.payload
           );
         },

         // updateTodo: () => {}
       },
     });

     // export reducers individualy
     export const { addTodo, removeTodo } = todoSlice.actions;

     // export reducers list also as whole
     export default todoSlice.reducer;
     ```

7. Update `store.js`

   ```js
   import { configureStore } from "@reduxjs/toolkit";
   import todoReducer from "../features/todo/todoSlice";

   export const store = configureStore({
     reducer: todoReducer,
   });
   ```

8. Create `AddTodo.jsx` & `Todos.jsx`

9. Use `useSelector`, `useDispatch`
