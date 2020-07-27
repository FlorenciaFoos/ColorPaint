import React from "react";

// define list of colors
export const colors = [
  { name: "white", hex: "#fff" },
  { name: "dark purple", hex: "#270036" },
  { name: "dark fuchsia", hex: "#5E003C" },
  { name: "red", hex: "#960000" },
  { name: "orange", hex: "#C92600" },
  { name: "blue", hex: "#0A3A4A" },
  { name: "yellow", hex: "#FFCE00" },
  { name: "green", hex: "#9AC836" },
  { name: "light blue", hex: "#33A6B2" },
  { name: "light purple", hex: "#9370db" },

];

// create painter context
// make the first color its default value
export const PainterContext = React.createContext();