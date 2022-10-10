import "./Photo.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Photo(props) {
  console.log(props.photos);
  if (props.photos) {
    return (
      <section className="row">
        {props.photos.map(function (image, index) {
          return (
            <img
              src={image.src.tiny}
              alt={image.alt}
              key={index}
              className="col-sm-4 photo"
              onClick={originalPhoto}
            />
          );
          function originalPhoto(event) {
            event.preventDefault();
            return <a href={image.src.original}></a>;
          }
        })}
      </section>
    );
  } else {
    return null;
  }
}
