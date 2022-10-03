export default function Audio(props) {
  console.log(props.aud);
  return (
    <div>
      <h5>{props.aud.text}</h5>
      <a href={props.aud.audio} target="_blank" rel="noopener noreferrer">
        Listen
      </a>
    </div>
  );
}
