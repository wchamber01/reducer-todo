import React, { useState, useReducer } from "react";
import { reducer } from "../reducers/itemReducer";
import { initialState } from "../App";

const Todo = props => {
  return <p> {props.todoItem.item}</p>;
};

export default Todo;

//add edit and delete function
