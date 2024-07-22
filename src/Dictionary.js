import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
export default function Dictionary(props) {
  let [InputWord, setInputWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleResponse(response) {
    setResults(response.data);
  }
  function handleInputWordChange(event) {
    event.preventDefault();
    setInputWord(event.target.value);
  }
  function search() {
    let apiKey = "tfb34aff78c33f3d839do95056440025";
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${InputWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary mb-3">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for a word..."
                autoFocus={true}
                onChange={handleInputWordChange}
                defaultValue={props.defaultKeyword}
                className="text-entry"
              />
            </div>
            <div className="col-3">
              <input type="submit" className="btn btn-primary" />
            </div>
          </div>
        </form>
        <div className="hint">
          <em>suggested words: fire, obsolete, mountain, cheese...</em>
        </div>
        <Results results={results} word={InputWord} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
