import React, { useState } from "react";
import "./DictionarySearch.css";
export default function DictionarySearch() {
  let [inputWord, setInputWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert("Searching");
  }
  function handleInputWordChange(event) {
    event.preventDefault();
    console.log(event);
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
