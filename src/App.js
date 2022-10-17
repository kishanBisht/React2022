import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  const [mode, setMode] = useState("light"); //whether darkmode enable or not
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("Dark mode has been enabled", "success");
      document.title = "ReactExercise - Dark Mode";
      // setInterval(()=>{
      //   document.title="ReactExercise is amazing";
      // },2000);
      // setInterval(()=>{
      //   document.title="Install ReactExercise now";
      // },1500);
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode has been enabled", "success");
      document.title = "ReactExercise-  Light Mode";
    }
  };

  return (
    <>
      <Router>
        <Navbar title="First APP" mode={mode} toggleMode={toggleMode} />
        <Alert alert={alert} />
        <div className="container">
          <Routes>
            {/* <Route eaxact path="/about">
              <About />
            </Route> */}
            <Route exact path="/about" element={<About/>} />
            <Route exact path="/" element={<TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />} />
            {/* <Route exact path="/">
              <TextForm
                showAlert={showAlert}
                heading="Enter the text to analyze below"
                mode={mode}
              />
            </Route> */}

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
