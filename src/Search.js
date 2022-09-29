import React, { useState } from "react";
// import axios from "axios"
export default function Search() {
  let [word, setword] = useState("");
  function Change(event) {
    event.preventDefault();
    setword(event.target.value);
  }
  function showResult(event) {
    event.preventDefault();
    alert(`Searching ${word}`);
  }
  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={showResult}>
        <input type="Search" onChange={Change} />
        <input type="Submit" />
      </form>
    </div>
  );
}
