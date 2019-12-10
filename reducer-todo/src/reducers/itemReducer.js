import React from "react";


export const initialState = {
  todoItems = [
    { 
      item: 'Learn about reducers',
      completed: false,
      id: 3892987589
    },
    { 
      item: 'practice JavaScript',
      completed: false,
      id: 65423165
    },
    { 
      item: 'finish this project',
      completed: false,
      id: 165146535
    },
    { 
      item: 'study for tomorrow',
      completed: false,
      id: 9874561684
    }
]
  
}


export const reducer = (state, action) => {
  console.log(state, action);
  return null;
};
