import React from "react";
import Todo from "../components/Todo";

const TodoList = props => {
  return (
    <div>
      {props.todoState.map(todoItem => {
        console.log(todoItem, "todoItem");
        return (
          <Todo
            toggleCompleted={props.toggleCompleted}
            key={todoItem.id}
            todoItem={todoItem}
            todoState={props.todoState}
          />
        );
      })}
    </div>
  );
};

export default TodoList;

//contains list of todos
