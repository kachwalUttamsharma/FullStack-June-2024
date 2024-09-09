import React from "react";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { TiTrash, TiTick } from "react-icons/ti";

const ToDoList = () => {
  const [task, setTask] = useState({
    title: "",
    by: "",
  });
  const [taskList, setTaskList] = useState([]);

  const handleTaskInfo = (e) => {
    const key = e.target.name;
    const val = e.target.value;
    setTask((prevVal) => {
      return { ...prevVal, [key]: val };
    });
  };

  const addTaskHandler = () => {
    const updatedTaskInfo = { ...task, id: uuid(), isDone: false };
    setTaskList((prevTask) => [...prevTask, updatedTaskInfo]);
    setTask({
      title: "",
      by: "",
    });
  };

  const markDoneHandler = (id) => {
    const index = taskList?.findIndex((task) => task?.id === id);
    const currTask = [...taskList];
    currTask[index].isDone = true;
    setTaskList(currTask);
  };

  const deleteTaskHandler = (id) => {
    const filteredTask = taskList?.filter((task) => task.id !== id);
    setTaskList(filteredTask);
  };
  return (
    <>
      <h1>ToDoList</h1>
      <div>
        I want to Complete
        <input
          type="text"
          name="title"
          value={task?.title}
          onChange={(e) => {
            handleTaskInfo(e);
          }}
          style={{ padding: "4px", margin: "4px" }}
        />
        <input
          type="date"
          name="by"
          value={task?.by}
          onChange={(e) => {
            handleTaskInfo(e);
          }}
          style={{ padding: "4px", margin: "4px" }}
        />
        <button
          style={{ padding: "4px", margin: "4px" }}
          onClick={addTaskHandler}
        >
          Add a Task
        </button>
      </div>
      <ul>
        {taskList?.length > 0 &&
          taskList?.map((task, idx) => {
            return (
              <li key={idx || task?.id}>
                <span
                  style={{ textDecoration: task?.isDone ? "line-through" : "" }}
                >
                  <strong>{task?.title}</strong> is due by {task?.by}
                  <span style={{ padding: "3px", margin: "3px" }}>
                    <TiTick onClick={() => markDoneHandler(task?.id)} />
                  </span>
                  <span style={{ padding: "3px", margin: "3px" }}>
                    <TiTrash onClick={() => deleteTaskHandler(task?.id)} />
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ToDoList;
