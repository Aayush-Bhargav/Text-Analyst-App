import { Route,  Routes } from 'react-router-dom';
import React, { useState } from "react";
import Navbar from "./Navbar";
import Alert from "./Alert";
import Footer from "./Footer";
import Textform from "./Textform";
import About from './About';
function App() {
  const [mode, setMode] = useState('light');//holds what mode the app is in
  const [alert, setAlert] = useState(null); //to show alert when any button is clicked
  const showAlert = (msg) => { //function to set the alert , show it and dismiss it (disappearing alert)
    console.log(msg);
    setAlert(msg);
    setTimeout(() => {
      setAlert(null);
    }, 1000)
  }
  const toggleMode = () => { //function to toggle modes (between light mode and dark mode)

    setMode((prevMode) => {
      if (prevMode === 'light') {
        showAlert('Dark Mode has been Enabled!');
        return 'dark';
      }
      else {
        showAlert('Light Mode has been Enabled!');
        return 'light';
      }
    });
  }
  return (
    <>
      <Navbar title="TextAnalyst" mode={mode} toggleMode={toggleMode} /> 
      <Alert showAlert={showAlert} alert={alert} mode={mode}/>
      <Routes>
        <Route exact path="/" element={<Textform mode={mode} toggleMode={toggleMode} showAlert={showAlert} alert={alert} heading="Enter the Text to Analyze" />}>
        </Route>
        <Route exact path="/about" element={<About mode={mode} toggleMode={toggleMode} showAlert={showAlert} />}>

        </Route>
      </Routes>
      <Footer mode={mode} />
    </>

  );



};

export default App;
