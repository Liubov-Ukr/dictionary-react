import DisplaySynonyms from "./DisplaySynonyms";
import "./DisplayResult.css";
export default function DisplayResult(props) {
  return (
    <div>
      <section className="Synonyms">
        <h3>{props.element.partOfSpeech}</h3>
        {props.element.definitions.map(function (mean, index) {
          return (
            <div key={index}>
              <h5 className="similar">Similar:</h5>
              <p>{mean.definition}</p>

              <em className="example">{mean.example}</em>
            </div>
          );
        })}
        <h3>Synonyms:</h3>
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
      </section>
    </div>
  );
}
