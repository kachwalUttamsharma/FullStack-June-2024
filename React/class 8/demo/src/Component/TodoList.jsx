import React from "react";
import { useDispatch, useSelector } from "react-redux";
import TodoSlice from "../redux/TodoSlice";

const { setInputValue, addTask } = TodoSlice.actions;
const TodoList = () => {
  const { inputValue, todoList } = useSelector((store) => {
    console.log(store);
    return store.todoState;
  });

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const val = e.target.value;
    dispatch(setInputValue(val));
  };

  const handleAddTask = () => {
    dispatch(addTask(inputValue));
  };
  return (
    <div>
      <h2>To Do List</h2>
      <div>
        <div className="inputbox">
          <input type="text" value={inputValue} onChange={handleChange} />
          <button onClick={handleAddTask}>Submit</button>
        </div>
        <div>
          {todoList.map((task, id) => {
            return (
              <li key={id}>
                {id} : {task}
              </li>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default TodoList;
