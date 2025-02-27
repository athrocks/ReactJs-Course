# Todo Project with Context API and Local Storage

This project is a simple Todo application built with React. It demonstrates the use of React Context API for state management and Local Storage for persisting data.

## Features

- **Add Todo**: Add new todos to the list.
- **Update Todo**: Edit existing todos.
- **Delete Todo**: Remove todos from the list.
- **Toggle Complete**: Mark todos as completed or incomplete.
- **Persist Data**: Save todos in Local Storage to persist data across page reloads.

## Components

- **App**: The main component that sets up the context provider and renders the TodoForm and TodoItem components.
- **TodoForm**: A form component for adding new todos.
- **TodoItem**: A component that displays individual todos and provides options to edit, delete, and toggle completion status.

## Context

- **TodoContext**: Provides the state and actions for managing todos. It includes methods for adding, updating, deleting, and toggling the completion status of todos.

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm (version 6 or higher) or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/todo-project-context-api-with-local-storage.git
   cd todo-project-context-api-with-local-storage
   ```

2. Install the dependencies:

   ```bash
   npm install
   ```

3. Running the App:
   ```bash
   npm run dev
   ```

### Project Structure

```bash
src/
├── App.css
├── App.jsx
├── components/
│   ├── index.js
│   ├── TodoForm.jsx
│   └── TodoItem.jsx
├── contexts/
│   ├── index.js
│   └── TodoContext.js
├── index.css
└── main.jsx
```

### Usage

#### Adding a Todo
1. Type a todo in the input field.
2. Click the "Add" button to add the todo to the list.

#### Updating a Todo
1. Click the edit button (✏️) next to the todo.
2. Modify the todo text.
3. Click the save button (📁) to save the changes.

#### Deleting a Todo
1. Click the delete button (❌) next to the todo to remove it from the list.
2. Toggling Todo Completion
3. Click the checkbox next to the todo to mark it as completed or incomplete.

#### Toggling Todo Completion
1. Click the checkbox next to the todo to mark it as completed or incomplete.
