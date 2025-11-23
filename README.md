# 📝 Todo App (React)

A simple and clean Todo application built with **React**, featuring:

- Add new todos
- Edit existing todos
- Delete todos with confirmation
- Controlled inputs
- Component-based architecture
- State management using React Hooks

---

## 🚀 Features

### ✔ Add Todo  
Users can type a task and click **“Add”** to create a new todo.

### ✔ Edit Todo  
Todos can be edited inline. When clicking the **edit icon**, the todo switches into an editable input.  
Editing is confirmed with the **check icon**.

### ✔ Delete Todo  
Todos can be removed from the list after a confirmation popup.

### ✔ Clean State Structure  
All todos are stored in the parent `<App />` component and passed down as props.

---

## 🗂 Project Structure
src/
│── App.jsx
│── App.css
│
├── components/
│   ├── Todo.jsx
│   ├── TodoCreate.jsx
│   └── TodoList.jsx
│
└── index.js

---

## 📦 Installation & Setup

Clone the project:

```bash
git clone <your-repo-url>
cd your-project-folder

🧠 Components Overview

🔹 App.jsx
	•	Manages all todo state
	•	Handles createTodo, removeTodo, and updateTodo
	•	Passes data and functions to child components

🔹 TodoCreate.jsx
	•	Handles input field for new todos
	•	Sends new todo object to the parent via onCreateTodo

🔹 TodoList.jsx
	•	Receives todos and maps them into multiple <Todo /> components

🔹 Todo.jsx
	•	Displays a single todo
	•	Handles:
	•	Editing mode
	•	Updating todo
	•	Deleting todo

