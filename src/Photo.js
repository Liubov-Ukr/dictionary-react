import "./Photo.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Photo(props) {
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
              />
          );
        })}
      </section>
    );
  } else {
    return null;
  }
}
