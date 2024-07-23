import React, { useState } from "react";
import "./Dictionary.css";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
export default function Dictionary(props) {
  let [InputWord, setInputWord] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);
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
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiKey = "tfb34aff78c33f3d839do95056440025";
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${InputWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let pexelsApiKey =
      "pPzDIYc1roUCCHV0MqCXdh4TSrKW6PTPuZi4xiFCOJfzhX4v9L9jIUal";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${InputWord}&per_page=9`;
    let headers = { Authorization: `${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary mb-3">
        <section>
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
        </section>
        <Results results={results} word={InputWord} />
        <Photos photos={photos} />
      </div>
    );
  } else {
    load();
    return "Loading";
  }
}
