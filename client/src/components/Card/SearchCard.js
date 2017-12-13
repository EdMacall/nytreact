import React from "react";

export const SearchCard = ({ children }) =>
  <div style={{ height: 310,  margin: 10,  margintop: 40,  marginbottom: 40 }} className="card text-center">
    <div class="card-header">
      <h2>Search</h2>
    </div>
    <div class="card-body">
      {children}
    </div>
  </div>;
