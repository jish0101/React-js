import React, { useState, useEffect, useRef } from "react";
import './index.css';

function App() {
  /*
    useRef is used to avoid renders,
    it is very similar to useState as
    it presist previous value between render
    without causing renders.. it returns and
    object with a current property in it,
    which can be used to get prev state.

    With useState if we try to keep track of 
    render count it will go in a infinite loop 
    since it will cause a re-render too.. useRef
    solves this problem.

    another use of useRef is we can reference dom
    and select and manipulate them using ref
    attribute on ellemets.. see code for example.
  */
  
  const [name, setName] = useState('')
  const renderCount = useRef(1);
  const inputRef = useRef();
  // const [renderCount, setRenderCount] = useState(0); 

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    // setRenderCount(prevCount => prevCount + 1);
  });

  function focus() {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <input ref={inputRef} value={name} onChange={e => setName(e.target.value)} />
      <div>My name is {name}</div>
      <div>I rendered {renderCount.current} times</div>
      <button onClick={focus}>Focus!</button>
    </div>
  );
}
export default App;
