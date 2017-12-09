import React from "react";
import "./Div.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
const Div = props => (
  <span className="div" {...props}>
    ✗
  </span>
);

export default Div;
