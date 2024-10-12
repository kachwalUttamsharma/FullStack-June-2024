import { createSlice } from "@reduxjs/toolkit";

const TodoSlice = createSlice({
  name: "toolbox",
  initialState: {
    inputValue: "",
    todoList: [],
  },
  reducers: {
    setInputValue: (state, data) => {
      console.log(data.payload);
      state.inputValue = data.payload;
    },
    addTask: (state, data) => {
      const currTask = data.payload;
      //   const AllTask = [...state.todoList, currTask];
      //   state.todoList = AllTask;
      state.todoList.push(currTask);
      state.inputValue = "";
    },
  },
});

export default TodoSlice;
