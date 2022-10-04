import DisplaySynonyms from "./DisplaySynonyms";
export default function DisplayResult(props) {
  return (
    <div>
      <section>
        <h3>{props.element.partOfSpeech}</h3>
        {props.element.definitions.map(function (mean, index) {
          return (
            <div key={index}>
              <h5>Similar:</h5>
              <p>{mean.definition}</p>

              <em>{mean.example}</em>
            </div>
          );
        })}
        
          <ul>
            <h3>Synonyms:</h3>
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
