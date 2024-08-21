import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";

const FormikForm = () => {
  const validate = (formValues) => {
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

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
      }}
      validate={validate}
      onSubmit={(values) => {
        console.log("form values ", values);
      }}
    >
      <Form>
        <div>
          <label htmlFor="name">Name:</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
        </div>

        <div>
          <label htmlFor="email">Email:</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" component="div" />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <Field name="password" type="password" />
          <ErrorMessage name="password" component="div" />
        </div>

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormikForm;
