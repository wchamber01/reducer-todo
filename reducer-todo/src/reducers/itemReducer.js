export const initialState = [
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
];

export const reducer = (state, action) => {
  console.log(state, action);
  switch (action.type) {
    case "ADD_TODO":
      const newItem = {
        item: action.payload,
        completed: false,
        id: Date.now()
      };
      return {
        ...state,
        items: [...state.items, newItem]
      };
    case "TOGGLE_COMPLETED":
      return state.map(item => {
        if (item.id === action.payload) {
          item.completed = !item.completed;
        }
      });
    case "CLEAR_COMPLETED":
      return state.filter(item => !item.completed);

    default:
      return state;
  }
};
