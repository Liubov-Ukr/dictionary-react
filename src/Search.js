import React, { useState } from "react";
import axios from "axios";
import Result from "./Result";
import Photo from "./Photo";
import "./Search.css";
export default function Search(props) {
  let [word, setword] = useState(props.defaultWord);
  let [meaning, setMeaning] = useState(null);
  let [photo, SetPhoto] = useState(null);
  let [loading, setloading] = useState(false);

  function changeWord(event) {
    event.preventDefault();
    setword(event.target.value);
  }
  function handleSearch(event) {
    event.preventDefault();
    SearchMeaning();
  }
  function SearchMeaning() {
    setloading(true);
    let url = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(url).then(handleResponse);
    let APIKeyPhotos =
      "563492ad6f91700001000001dfb0109b8f804ed5b0c9f38eea82dd1a";
    let urlPhoto = `https://api.pexels.com/v1/search?query=${word}&per_page=9`;
    const headers = { Authorization: APIKeyPhotos };
    axios.get(urlPhoto, { headers }).then(handlePhoto);
  }
  function handleResponse(response) {
    setMeaning(response.data[0]);
  }
  function handlePhoto(response) {
    SetPhoto(response.data.photos);
  }
  console.log(meaning);
  if (loading) {
    return (
      <div>
        <img
          src="https://cdn1.iconfinder.com/data/icons/online-education-95/66/100_wisdom_education_book_owl_knowledge_owl_bird_school_study_wise_history-512.png"
          className="logo"
          alt="logo-dictionary"
        />
        <h1>Dictionary</h1>
        <section>
          <label>What word do you want to look up?</label>
          <form onSubmit={handleSearch}>
            <input
              type="Search"
              onChange={changeWord}
              className="SearchForm"
              placeholder={word}
            />
            <input type="Submit" className="Submit" />
          </form>
          <p className="PForm">i.e. sun, sunrise, win, coding</p>
        </section>
        <Result meaning={meaning} />
        <Photo photos={photo} />
      </div>
    );
  } else {
    SearchMeaning();
    return <p>Loading...</p>;
  }
}
