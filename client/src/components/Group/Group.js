import React from "react";
import "./Group.css";

const Group = ({ children }) =>
  <div style={{ height: 300 }} className="group">
    {children}
  </div>;

export default Group;