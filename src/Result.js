import DisplayResult from "./DisplayResult";
import Audio from "./Audio";
export default function Result(props) {
  console.log(props.meaning);

  if (props.meaning) {
    return (
      <div>
        <h2>{props.meaning.word} </h2>
        {}
        {props.meaning.phonetics.map(function (phonetic, index) {
          return (
            <div key={index}>
              <Audio aud={phonetic} />
            </div>
          );
        })}

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
