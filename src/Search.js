import React, { useState } from "react";
import axios from "axios";
export default function Search() {
  let [word, setword] = useState("");
  function changeWord(event) {
    event.preventDefault();
    setword(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={handleSearch}>
        <input type="Search" onChange={changeWord} />
        <input type="Submit" />
      </form>
    </div>
  );
}
