export default function DisplayResult(props) {
  console.log(props.element);
  return (
    <div>
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
