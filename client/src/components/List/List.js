import React from "react";
import "./List.css";

export const List = ({ children }) => {
  return (
    <div className="list-overflow-container">
      <ul className="list-group" style={{ height: 480 }}>
        {children}
      </ul>
    </div>
  );
};
