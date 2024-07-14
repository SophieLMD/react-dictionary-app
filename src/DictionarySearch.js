import React, { useState } from "react";
import "./DictionarySearch.css";
import axios from "axios";
export default function DictionarySearch() {
  let [InputWord, setInputWord] = useState("");
  function search(event) {
    event.preventDefault();
    let apiKey = "tfb34aff78c33f3d839do95056440025";
    //documentation: https://www.shecodes.io/learn/apis/dictionary
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${InputWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleResponse(response) {
    console.log(response.data);
  }
  function handleInputWordChange(event) {
    event.preventDefault();
    setInputWord(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus={true}
          onChange={handleInputWordChange}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
