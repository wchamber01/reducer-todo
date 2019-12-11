import React from "react";
import "./App.css";

export const initialState = {
  items = [
    {
      item: "Learn about reducers",
      completed: false,
      id: 3892987589
    },
    {
      item: "practice JavaScript",
      completed: false,
      id: 65423165
    },
    {
      item: "finish this project",
      completed: false,
      id: 165146535
    },
    {
      item: "study for tomorrow",
      completed: false,
      id: 9874561684
    }
  ]
};

addTodo = newTodoText => {
  const newTodo = {
    item: newTodoText,
    completed: false,
    id: Date.now()
  };
};

handleChanges = e => {
  setNewTodoItem(e.target.value);
};


function App() {
  return 
    <div className="App">something
    <TodoList />
    <Form />
    </div>;
}

export default App;
