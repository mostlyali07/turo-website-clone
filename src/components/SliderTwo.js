import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Sec_1 from "../Sec_1.jpg";
import Sec_2 from "../Sec_2.jpg";
import Sec_3 from "../Sec_3.jpg";
import Sec_4 from "../Sec_4.jpg";
import Sec_5 from "../Sec_5.jpg";
import Sec_6 from "../Sec_6.jpg";
import "../App.css";

export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div className="Slider my-5">
      <Carousel responsive={responsive}>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 Sec_Sec">
                <img src={Sec_1} />
              </div>
              <div className="col-md-5 Sec_Sec mt-5">
                <h3>
                  Find the perfect car{" "}
                  <span className="Color_Purple">
                    to
                    <br /> conquer the great outdoors
                  </span>
                </h3>
                <p className="mb-4">
                  Go prepared in a rugged 4x4 to take on winter roads with ease,
                  or a camper van to take you to the trees. Browse cars
                </p>
                <button>Browse Car</button>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 Sec_Sec">
                <img src={Sec_2} />
              </div>
              <div className="col-md-5 Sec_Sec mt-5">
                <h3>
                  Find the perfect car
                  <span className="Color_Purple">
                    to
                    <br />
                    unwind for the weekend
                  </span>
                </h3>
                <p className="mb-4">
                  From daily drivers to spirited sports cars, ditch the grind
                  with convenient nearby cars.
                </p>
                <button>Browse Car</button>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 Sec_Sec">
                <img src={Sec_3} />
              </div>
              <div className="col-md-5 Sec_Sec mt-5">
                <h3>
                  Find the perfect car{" "}
                  <span className="Color_Purple">
                    to
                    <br /> conquer the great outdoors
                  </span>
                </h3>
                <p className="mb-4">
                  Go prepared in a rugged 4x4 to take on winter roads with ease,
                  or a camper van to take you to the trees. Browse cars
                </p>
                <button>Browse Car</button>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 Sec_Sec">
                <img src={Sec_4} />
              </div>
              <div className="col-md-5 Sec_Sec mt-5">
                <h3>
                  Find the perfect car{" "}
                  <span className="Color_Purple">
                    to
                    <br /> conquer the great outdoors
                  </span>
                </h3>
                <p className="mb-4">
                  Go prepared in a rugged 4x4 to take on winter roads with ease,
                  or a camper van to take you to the trees. Browse cars
                </p>
                <button>Browse Car</button>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 Sec_Sec">
                <img src={Sec_5} />
              </div>
              <div className="col-md-5 Sec_Sec mt-5">
                <h3>
                  Find the perfect car{" "}
                  <span className="Color_Purple">
                    to
                    <br /> conquer the great outdoors
                  </span>
                </h3>
                <p className="mb-4">
                  Go prepared in a rugged 4x4 to take on winter roads with ease,
                  or a camper van to take you to the trees. Browse cars
                </p>
                <button>Browse Car</button>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
        <div>
          <div className="container">
            <div className="row">
              <div className="col-md-1"></div>
              <div className="col-md-5 Sec_Sec">
                <img src={Sec_6} />
              </div>
              <div className="col-md-5 Sec_Sec mt-5">
                <h3>
                  Find the perfect car{" "}
                  <span className="Color_Purple">
                    to
                    <br /> conquer the great outdoors
                  </span>
                </h3>
                <p className="mb-4">
                  Go prepared in a rugged 4x4 to take on winter roads with ease,
                  or a camper van to take you to the trees. Browse cars
                </p>
                <button>Browse Car</button>
              </div>
              <div className="col-md-1"></div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
