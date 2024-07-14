import React from "react";
import "./DictionarySearch.css";
export default function DictionarySearch() {
  return (
    <div className="Dictionary">
      <form>
        <input
          type="search"
          placeholder="Search for a word..."
          autoFocus={true}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
