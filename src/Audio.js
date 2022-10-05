import "./Audio.css";
export default function Audio(props) {
  console.log(props.aud);
  return (
    <div>
      <a
        href={props.aud.audio}
        target="_blank"
        rel="noopener noreferrer"
        className="audio"
      >
        Listen
      </a>
      <h5>{props.aud.text}</h5>
    </div>
  );
}
