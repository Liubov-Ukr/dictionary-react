import "./Photo.css";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Photo(props) {
  if (props.photos) {
    return (
      <section>
        <div className="row g-0">
          {props.photos.map(function (image, index) {
            return (
              <div className="col-sm-4" key={index}>
                <a href={image.src.original} target="_blank">
                  <img
                    src={image.src.tiny}
                    alt={image.alt}
                    className="photo p-2"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </section>
    );
  } else {
    return null;
  }
}
