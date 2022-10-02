import DisplayResult from "./DisplayResult";
export default function Result(props) {
  if (props.meaning) {
    return (
      <div>
        <h2>{props.meaning.word} </h2>
        <em>
          <h3>{props.meaning.phonetic}</h3>
        </em>
        <h5>{props.meaning.phonetics.audio}</h5>
        {props.meaning.meanings.map(function (element, index) {
          return (
            <div key={index}>
              {" "}
              <DisplayResult element={element} />
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
