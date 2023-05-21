import React from "react";

function DataRow() {
  return (
    <React.Fragment>
      <div class="data-block">
        <div class="data-row">
          <label>Name:</label>My Name
        </div>
        <div class="data-row">
          <label>Age:</label>23
        </div>
        <div class="data-row">
          <label>City:</label>Denver
        </div>
        <div class="data-action">
          <a href="#">Edit</a>
          <a href="#">Delete</a>
        </div>
      </div>
    </React.Fragment>
  );
}

export default DataRow;
