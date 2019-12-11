import React, { useState, useReducer } from "react";
import { reducer } from "../reducers/itemReducer";
import { initialState } from "../App";

const Todo = () => {
  const [todoState, dispatch] = useReducer(reducer, initialState);

  const [newTodoItem, setNewTodoItem] = useState("");


  return (...todoState, )
};

export default Todo;
