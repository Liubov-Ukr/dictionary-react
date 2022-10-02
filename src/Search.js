import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
export default function Search() {
  let [word, setword] = useState("");
  let [meaning, setMeaning] = useState(null);
  function changeWord(event) {
    event.preventDefault();
    setword(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    SearchMeaning();
  }
  function SearchMeaning() {
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
  }
  function handleResponse(response) {
    setMeaning(response.data[0]);
  }

  return (
    <div>
      <h1>Dictionary</h1>
      <form onSubmit={handleSearch}>
        <input type="Search" onChange={changeWord} />
        <input type="Submit" />
      </form>
      <Result meaning={meaning} />
    </div>
  );
}
