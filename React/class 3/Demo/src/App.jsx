import { useState } from "react";
import "./App.css";
import FormikForm from "./Forms/FormikForm";
import FormikYupForm from "./Forms/FormikYupForm";
import SimpleForm from "./Forms/SimpleForm";
import TemperatureDisplay from "./TemperatureDisplay";
import TemperatureInput from "./TemperatureInput";
import Counter from "./Counter";
import UserData from "./UserData";

function App() {
  // const [temperature, setTemperature] = useState("");
  return (
    <div>
      <h1>Forms</h1>
      {/* <SimpleForm /> */}
      {/* <FormikForm /> */}
      {/* <FormikYupForm />
      <TemperatureInput
        temperature={temperature}
        setTemperature={setTemperature}
      />
      <TemperatureDisplay temperature={temperature} /> */}
      <Counter />
      {/* <UserData /> */}
    </div>
  );
}

export default App;
