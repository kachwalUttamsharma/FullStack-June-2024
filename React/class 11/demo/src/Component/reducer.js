import { v4 as uuid } from "uuid";

// anything related to task we have build once reducer for it
const taskReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TASK":
      // title, by
      const newTask = { ...action.payload, id: uuid(), isDone: false };
      return [...state, newTask];
    case "REMOVE_TASK":
      const filteredTask = state?.filter((task) => task.id !== action.payload);
      return [...filteredTask];
    case "DONE_TASK":
      const index = state?.findIndex((task) => task?.id === action.payload);
      const currTask = [...state];
      currTask[index].isDone = true;
      return [...currTask];
    default:
      return state;
  }
};

const formReducer = (state, action) => {
  switch (action.type) {
    case "HANDLE_TASK":
      return {
        ...state,
        [action.field]: action.payload,
      };
    case "RESET_TASK":
      return {
        title: "",
        by: "",
      };
    default:
      return state;
  }
};

export { taskReducer, formReducer };
