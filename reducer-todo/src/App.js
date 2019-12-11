import React, { useReducer } from "react";
import "./App.css";
import { reducer, initialState } from "./reducers/itemReducer";
import TodoList from "./components/TodoList";
import TodoForm from "./components/TodoForm";

// handleSubmit = e => {
//   e.preventDefault(); //Prevents page from reloading on submit
//   this.props.addTodo(this.state.newItem); //Assigns value of newItem to "property" of addTodo function by using "props"
//   this.setState({
//     newItem: "" //clears input value after submit
//   });
// };

function App() {
  const [todoState, dispatch] = useReducer(reducer, initialState);
  const addTodo = newTodo => {
    dispatch({ type: "ADD_TODO", payload: newTodo });
  };
  const toggleCompleted = toggle => {
    dispatch({ type: "TOGGLE_COMPLETED", payload: toggle });
  };

  console.log(todoState);
  return (
    <div className="App">
      <h1>ToDo List</h1>
      <TodoList todoState={todoState} />
      <TodoForm addTodo={addTodo} />
    </div>
  );
}

export default App;
