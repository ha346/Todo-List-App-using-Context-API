# React + Vite

## Folder Structure:

### Components Folder:

- Button.jsx ----> It is Custom Button Component which is compatible for both small button, large button as well as button icons

- Checkbox.jsx ----> It is custom Checkbox Component having props like type, className, checked and onChange

- Input.jsx ----> It is custom Text Input Component which is used in adding text as well as editing the text, props include type, placeholder, className, value, onInputChange, readOnly

- TodoForm.jsx ----> This is the first component of the todo app which is used to add the todo, consist two custom components Button.jsx and Input.jsx

- TodoItem.jsx ----> This is the second component which consist particular row of particular todo, consist three custome components Button.jsx, Checkbox.jsx and Input.jsx

### Context Folder:

- TodoContext.js ----> This is the Context API State Management Component which contains all todos that we will add and four functions named as addTodo, removeTodo, updateTodo and toggleCompleted

- index.js ----> export TodoContext, TodoContextProvider and useTodo hook

### App.jsx:

- This is the primary file of the todo app which wrap up with TodoContextProvider.It is used to create all the business logic of addTodo, removeTodo, updateTodo and toggleCompleted. 

- It also manages the localStorage to set the data to the local stroage and to get the data from the local storage.

- Consist two components TodoForm.jsx and TodoItem.jsx


## How to Run the App in the Local Machine:

- npm install

- npm run dev

