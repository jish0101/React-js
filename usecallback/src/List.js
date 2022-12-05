import React, { useState, useEffect } from "react";

export default function List({ getItems }) {
  const [items, setItems] = useState([]);
  useEffect(() => {
    setItems(getItems());
    console.log("updating items");
  }, [getItems]);
  return items.map((item) => {
    if (!isNaN(item)) {
      return <div key={item}>{item}</div>;
    }
    return null;
  });
}