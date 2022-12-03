import React, { useState } from "react";
import ContextComponent from "./ContextComponent";

export const ThemeContext = React.createContext();

function App() {
  /*
    First we need to create a context constant using
    React.createContext function and then we 
    can wrap components/jsx in this 
    ThemeContext.provider component, in our
    ContextComponent we need to import this 
    ThemeContext component and use the state
    passed into this component via value attribute.
    
    and in ContextComponent we can pass
    ThemeContext into useContext(here) hook and get
    the access to the passed state in it by
    referencing it to a constant variable.
  */
  const [darkTheme, setDarkTheme] = useState(true);

  function toggleTheme() {
    setDarkTheme((prevTheme) => !prevTheme);
  }
  return (
    <ThemeContext.Provider value={darkTheme}>
      <div className="container">
        <ContextComponent />
        <button onClick={toggleTheme}>Toggle Theme</button>
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
