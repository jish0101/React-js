import React from "react";
import Modal from "./Modal";

/*
  use case of useLayoutEffect is similar to
  useEffect the only difference is ULE is
  synchronous while useEffect is asynchronous
  thus we can use ULE for something related to
  dom where we need the code to execute on as
  soon as dom  loads to avoid glitches in dom
  this is explained in this code as well,
  to see the bug use useEffect in modal.js
  instead of useLayoutEfect.
  similar to useEffect it takes a callback function
  and a dependency array.
*/

export default function App() {
  return <Modal />;
}