import React, { useContext } from "react";
import { ThemeContext } from "./App";

export default function () {
  const darkTheme = useContext(ThemeContext);
  const themeStyles = {
    backgroundColor: darkTheme ? "black" : "#CCC",
    color: darkTheme ? "#CCC" : "black",
  };
  return <div style={themeStyles}>Function Theme</div>;
}
