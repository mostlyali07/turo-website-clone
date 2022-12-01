import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sec_1 from "../Sec_1.jpg";
import "../App.css";

export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Slider">
      <Carousel responsive={responsive}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5">
                <img src={Sec_1} />
              </div>
              <div className="col-md-5">
                <h3>
                  Find the perfect car{" "}
                  <span className="Color_Purple">
                    to conquer the great outdoors
                  </span>
                </h3>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
