import React from "react";
import { useState } from "react";

const SimpleForm = () => {
  //   const [name, setName] = useState("");
  //   const [email, setEmail] = useState("");
  //   const [password, setPassword] = useState("");
  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState({});

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => {
      return {
        ...prevValues,
        [name]: value,
      };
    });
  };

  const validate = () => {
    const error = {};
    if (!formValues.name) {
      error.name = "Name is required";
    }
    if (!formValues.email) {
      error.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      error.email = "Email is Invalid";
    }
    if (!formValues.password) {
      error.password = "Password is required";
    } else if (formValues.password.length < 6) {
      error.password = "Password must be at least 6 characters long";
    }
    return error;
  };

  const formSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formValues);
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log("form is submitted with values", formValues);
      setFormValues({
        name: "",
        email: "",
        password: "",
      });
      setError({});
    } else {
      setError(validationErrors);
    }
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formValues.name}
          onChange={onChangeHandler}
        />
        {error.name && <div>{error.name}</div>}
      </div>
      <div>
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formValues.email}
          onChange={onChangeHandler}
        />
        {error.email && <div>{error.email}</div>}
      </div>
      <div>
        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          name="password"
          value={formValues.password}
          onChange={onChangeHandler}
        />
        {error.password && <div>{error.password}</div>}
      </div>
      <button>Submit</button>
    </form>
  );
};

export default SimpleForm;
