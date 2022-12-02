import React, { useState, useEffect } from "react";

function App() {
  const [resourceType, setResourceType] = useState("posts");
  const [items, setItems] = useState([]);

  /* When we need to create side effects, or
  we are required to change, update or run some code depending 
  on some other variables we can use useEffect
  hook useEffects takes a function and a array of dependcy
  when anything from dependency list changes it runs the function
  if we dont pass the list it will render always
  and if we pass an empty array it runs once onload
  the function we pass as first arguement runs the return "cleanup" function first
  if we write it and then the rest of the code */

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then((response) => response.json())
      .then((json) => setItems(json));
    return () => {
      console.log("CleanUp");
    }
  }, [resourceType]);

  return (
    <>
      <button onClick={() => setResourceType("posts")}>Posts</button>
      <button onClick={() => setResourceType("users")}>Users</button>
      <button onClick={() => setResourceType("comments")}>Comments</button>
      <h1>{resourceType}</h1>
      {items.map(item => {
        return <pre>{ JSON.stringify(item)}</pre>
      })}
    </>
  );
}
export default App;
