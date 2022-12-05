import React, { useState, useCallback } from "react";
import List from "./List";

/*
  useCallback is similar to useMemo, the main
  difference is it returns the exact function
  unlike useMemo which sets the value to the 
  constant, which enables us to use its constant
  as a function and pass parameter to it
  useCallback takes a callback function and
  returns it, second parameter is an array 
  of dependency, if any item in the array
  changes it invoke useCallback, it is used
  incase if we want to limit the re-creation of 
  some particular function to this dependency
  array. as functions are recreated everytime
  on re-render of the component, and we need
  to avoid this particular function to run 
  evertime, and only run on changes of some 
  particular variables or conditions.
*/

export default function App() {
  const [dark, setDark] = useState(false);
  const [number, setNumber] = useState(1);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2];
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#fff",
    color: dark ? "#fff" : "#333",
  };
  return (
    <div className="container" style={theme}>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(parseInt(e.target.value))}
      />
      <button onClick={() => setDark((prevDark) => !prevDark)}>
        Toggle Theme
      </button>
      <List getItems={getItems} number={number} />
    </div>
  );
}