import React from "react";

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      const obj = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
  }
  return null;
};
