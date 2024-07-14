import React, { useState } from "react";
import "./DictionarySearch.css";
export default function DictionarySearch() {
  let [InputWord, setInputWord] = useState("");
  function search(event) {
    event.preventDefault();
    alert(`Searching for the word ${InputWord}.`);
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
