import React from "react";

const Jumbotron = ({ children }) =>
  <div style={{ height: 300,  margin: 10 }} className="jumbotron">
    {children}
  </div>;

export default Jumbotron;
