import DisplaySynonyms from "./DisplaySynonyms";
export default function DisplayResult(props) {
  return (
    <div>
      <ul>
        {props.element.synonyms.map(function (synonym, index) {
          return (
            <li key={index}>
              {" "}
              <DisplaySynonyms loopSynonyms={synonym} />{" "}
            </li>
          );
        })}
      </ul>
      <h3>{props.element.partOfSpeech}</h3>
      {props.element.definitions.map(function (mean, index) {
        return (
          <div key={index}>
            <p>{mean.definition}</p>

            <em>{mean.example}</em>
          </div>
        );
      })}
    </div>
  );
}
