import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import FocusInput from "./Components/ref/FocusInput";
import Timer from "./Components/ref/Timer";
import Stopwatch from "./Components/Stopwatch";
import Carousel from "./Components/Carousel";
import Modal from "./Components/customHook/Modal";
import useVisibility from "./Components/customHook/useVisibility";

function App() {
  const { isVisible, show, hide, toggle } = useVisibility(false);
  return (
    <>
      {/* <FocusInput />
      <Timer /> */}
      {/* <Stopwatch /> */}
      <Carousel />
      <div>
        <button onClick={show}>Show Modal</button>
        <button onClick={toggle}>Toogle Modal</button>
        <Modal isVisible={isVisible} hide={hide} />
      </div>
    </>
  );
}

export default App;
