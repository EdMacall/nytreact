import React from "react";

export const SavedArticlesCard = ({ children }) =>
  <div style={{ height: 600,  margin: 10,  margintop: 40,  marginbottom: 40 }} className="card text-center">
    <div class="card-header">
      <h2>SavedArticles</h2>
    </div>
    <div class="card-body" style={{ height: 550 }}>
      {children}
    </div>
  </div>;
