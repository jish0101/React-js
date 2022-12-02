import React, { useState, useMemo } from "react";

function App() {
  /*
    useMemo is used to gain performance benefits,
    in this case where slow function runs
    everytime when app renders which makes whole app slow or
    delayed.. useMemo takes a callback function
    and a dependency array , and only runs
    the callback when dependency vars change 
  */

  const [number, setNumber] = useState(0);
  const [dark, setDark] = useState(false);
  const doubleNumber = useMemo(() => {
    return slowFunction(number);
  }, [number]);
  const themeStyles = {
    backgroundColor: dark ? "black" : "white",
    color: dark ? "white" : "black",
  };

  return (
    <>
      <div className="container">
        <input
          type="number"
          value={number}
          onChange={(e) => setNumber(parseInt(e.target.value))}
        />
        <button onClick={() => setDark((prevDark) => !prevDark)}>
          Change Theme
        </button>
        <div style={themeStyles}>{doubleNumber}</div>
      </div>
    </>
  );
}

function slowFunction(num) {
  console.log("slow function");
  for (let i = 0; i <= 1000000000; i++) {}
  return num * 2;
}

export default App;
