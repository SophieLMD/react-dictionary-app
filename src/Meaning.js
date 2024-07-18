import React from "react";
import Synonyms from "./Synonyms";
export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="Meaning">
      <h3>
        <strong>{props.meaning.partOfSpeech}</strong>
      </h3>
      <p>
        <strong>Definition: {""}</strong>
        {props.meaning.definition}
      </p>
      <p>
        <strong>Example: {""}</strong>
        <em>{props.meaning.example}</em>
      </p>
      <p>
        <strong>Synonyms:{""}</strong>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
