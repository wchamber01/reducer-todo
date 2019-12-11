import React from "react";

const TodoForm = props => {
  return (
    <form onSubmit={props.handleSubmit}>
      <input>
        value={props.newTodo}
        onChange={props.handleChanges}
        type="text"
        name="todo"
        placeholder="Add Todo..."
      </input>
      <button>Add</button>
    </form>
    <button onClick={props.clearCompleted}>Clear Completed</button>
  )
}

export default TodoForm;
