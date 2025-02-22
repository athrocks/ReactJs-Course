### Create React App using Vite

```js
npm create vite@latest
```
- Add project name (01-create-vite-react-app)
- Add Framework (React)
- Add (Javascript)

```js 
cd 01-create-vite-react-app
```

```js 
npm install
```

```js  
npm run dev
```

### List of concepts studied here:
This directory contains below key concepts:

1. **Component Naming and Structure**:
Capitalized Component Names: All component names start with a capital letter (e.g., Chai, Variable, App).
Functional Components: Components are defined as functions that return JSX elements.
2. **JSX Syntax**:
JSX Elements: Components return JSX elements, which look like HTML but are used in JavaScript `(e.g., <h1>, <h4>, <h5>)`.
Fragments: Use of fragments (<>...</>) to wrap multiple JSX elements in a single return statement.
3. **Props and State**:
Variables in JSX: Use of JavaScript variables within JSX (e.g., const username = "@throcks07"; and const age = 22; in Variable.jsx).
4. **Component Composition**:
Importing Components: Components are imported into other components (e.g., Chai and Variable are imported into App).
Component Nesting: Components are nested within other components (e.g., Chai and Variable are rendered inside App).
5. **ReactDOM and StrictMode**:
ReactDOM.createRoot: The createRoot method from react-dom/client is used to render the root component.
StrictMode: The StrictMode component is used to wrap the root component to help identify potential problems in the application.
6. **Export and Import Statements**:
Default Export: Components are exported as default exports (e.g., export default Chai;).
Import Statements: Components are imported using import statements (e.g., import Chai from "./Chai";).
7. **HTML Structure**:
HTML Template: The index.html file provides the basic HTML structure, including a div with the id root where the React application is rendered.
8. **JavaScript Variables and Expressions in JSX**:
Embedding Expressions: JavaScript expressions are embedded within JSX using curly braces {} (e.g., {username}, {age}).

#### Summary of Concepts:
1. Component Naming and Structure
2. JSX Syntax
3. Props and State
4. Component Composition
5. ReactDOM and StrictMode
6. Export and Import Statements
7. HTML Structure
8. JavaScript Variables and Expressions in JSX

These concepts are fundamental to building React applications and are demonstrated across the provided files.