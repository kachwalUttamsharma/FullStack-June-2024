// import React, { useState, useEffect } from "react";
import React from "react";

// const TodoList = () => {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   useEffect(() => {
//     console.log("Component Did Mount: Fetching initial to-do items.");
//     // Simulate fetching data from an API
//     setTimeout(() => {
//       setTodos(["Learn React", "Read a book"]);
//     }, 1000);

//     return () => {
//       console.log("Component Will Unmount: Cleaning up resources.");
//     };
//   }, []);

//   useEffect(() => {
//     console.log("Component Did Update: Checking if new to-do was added.");
//     console.log("Updated To-dos:", todos);
//   }, [todos]); // Adding this useEffect to show component updation

//   const handleInputChange = (event) => {
//     setNewTodo(event.target.value);
//   };

//   const handleAddTodo = () => {
//     setTodos((prevTodos) => [...prevTodos, newTodo]);
//     setNewTodo("");
//   };

//   console.log("Render: Rendering the to-do list.");
//   return (
//     <div>
//       <h1>My To-Do List</h1>
//       <ul>
//         {todos.map((todo, index) => (
//           <li key={index}>{todo}</li>
//         ))}
//       </ul>
//       <input type="text" value={newTodo} onChange={handleInputChange} />
//       <button onClick={handleAddTodo}>Add To-Do</button>
//     </div>
//   );
// };

class ToDoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      newTodo: "",
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ todos: ["Learn React", "Read a book"] });
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.todos != this.state.todos) {
      console.log("Updated To-dos:", this.state.todos);
    }
  }

  componentWillUnmount() {
    console.log("Component Will Unmount: Cleaning up resources.");
  }

  handleInputChange = (event) => {
    this.setState((state) => {
      return { newTodo: event.target.value };
    });
  };

  handleAddTodo = () => {
    this.setState((state) => {
      return {
        todos: [...state.todos, state.newTodo],
        newTodo: "",
      };
    });
  };

  render() {
    return (
      <div>
        <h1>My To-Do List</h1>
        <ul>
          {this.state.todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
        <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleInputChange}
        />
        <button onClick={this.handleAddTodo}>Add To-Do</button>
      </div>
    );
  }
}

export default ToDoList;
