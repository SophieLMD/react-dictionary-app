import React from "react";
import Synonyms from "./Synonyms";
import "./Meaning.css";
export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>
      <div className="definition">{props.meaning.definition}</div>
      <div className="example">{props.meaning.example}</div>
      <h5>
        <strong>{""}</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </h5>
    </div>
  );
}
