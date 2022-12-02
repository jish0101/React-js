import React, { useState } from "react";

function App() {
  // first we declare initial state of the component by callling useState function which returns an array with two objects so we usuallly destructure them-
  
  // useState() gets a callback function to set initial state and to avoid calling it again on re-rendering everytime.. in this example it doesnt matter much because affect is minor but it can affect if it is complex.. useState(()=>{code to return intial state here..}) and ofcouse we can call another function in this callback function which will also run once;

  // in this example first state function is used to save the current state of the component and second is used to update and OVERWRITE old state; we cant change current state directly to avoid state clashes when calling 2nd function more than once because it override itself so second function takes a callback function which is used to update state by passing in the current state as a variable - setState(prevState => {change})

  const [state, setState] = useState(0);

  function decrementCount() {
    setState((prevCount) => {
      return prevCount - 1;
    });
  }
  function incrementCount() {
    setState((prevCount) => {
      return prevCount + 1;
    });
  }

  return (
    <>
      <button onClick={decrementCount}>-</button>
      <span>{state}</span>
      <button onClick={incrementCount}>+</button>
    </>
  );
}

export default App;
