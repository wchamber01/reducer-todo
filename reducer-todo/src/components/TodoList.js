import React from "react";
import { initialState } from "../App";
import Todo from "../components/Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoState.items.map(todoItem => {
        return <Todo key={todoItem.id} todoItem={todoItem} />;
      })}
    </div>
  );
};

export default TodoList;

//contains list of todos
