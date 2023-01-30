import { useState } from "react";

export default function useArray(defaultValue) {
  const [array, setArray] = useState(defaultValue);

  function push(e) {
    setArray((a) => [...a, e]);
  }

  function filter(callback) {
    setArray((a) => a.filter(callback));
  }

  function update(i, e) {
    setArray((a) => [...a.slice(0, i), e, ...a.slice(i + 1, a.length - 1)]);
  }

  function remove(i) {
    setArray((a) => [...a.slice(0, i), ...a.slice(i + 1, a.length - 1)]);
  }

  function clear() {
    setArray([]);
  }

  return {
    array,
    set: setArray,
    push,
    filter,
    update,
    remove,
    clear,
  };
}