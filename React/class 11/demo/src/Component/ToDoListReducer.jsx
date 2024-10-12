import React from "react";
import { TiTrash, TiTick } from "react-icons/ti";
import { useReducer } from "react";
import { formReducer, taskReducer } from "./reducer";

const ToDoListReducer = () => {
  const [taskList, taskListDispatch] = useReducer(taskReducer, []);
  const [task, taskDispatch] = useReducer(formReducer, {
    title: "",
    by: "",
  });

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
            taskDispatch({
              type: "HANDLE_TASK",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          style={{ padding: "4px", margin: "4px" }}
        />
        <input
          type="date"
          name="by"
          value={task?.by}
          onChange={(e) => {
            taskDispatch({
              type: "HANDLE_TASK",
              field: e.target.name,
              payload: e.target.value,
            });
          }}
          style={{ padding: "4px", margin: "4px" }}
        />
        <button
          style={{ padding: "4px", margin: "4px" }}
          onClick={() => {
            taskListDispatch({ type: "ADD_TASK", payload: task });
            taskDispatch({ type: "RESET_TASK" });
          }}
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
                    <TiTick
                      onClick={() =>
                        taskListDispatch({
                          type: "DONE_TASK",
                          payload: task?.id,
                        })
                      }
                    />
                  </span>
                  <span style={{ padding: "3px", margin: "3px" }}>
                    <TiTrash
                      onClick={() =>
                        taskListDispatch({
                          type: "REMOVE_TASK",
                          payload: task?.id,
                        })
                      }
                    />
                  </span>
                </span>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default ToDoListReducer;
