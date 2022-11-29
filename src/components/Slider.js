import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Car_3 from "../car_3.jpg";
import Car_9 from "../car_9.jpg";
import Car_8 from "../car_8.jpg";
import Car_7 from "../car_7.jpg";
import Car_1 from "../car_1.jpg";
import Car_5 from "../car_5.jpg";
import Car_10 from "../car_10.jpg";
import Car_6 from "../car_6.jpg";
import Car_4 from "../car_4.jpg";
import Car_2 from "../car_2.jpg";
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
      items: 5,
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
    <div className="Slider text-center">
      <h5>Browse by make</h5>
      <Carousel responsive={responsive}>
        <div className="Cards">
          <img src={Car_3} />
          <br />
          <h6>Jeep</h6>
        </div>
        <div className="Cards">
          <img src={Car_9} />
          <br />
          <h6>Tesla</h6>
        </div>
        <div className="Cards">
          <img src={Car_8} />
          <br />
          <h6>Subaru</h6>
        </div>
        <div className="Cards">
          <img src={Car_7} />
          <br />
          <h6>Porsche</h6>
        </div>
        <div className="Cards">
          <img src={Car_1} />
          <br />
          <h6>BMW</h6>
        </div>
        <div className="Cards">
          <img src={Car_5} />
          <br />
          <h6>Mercedes-Benz</h6>
        </div>
        <div className="Cards">
          <img src={Car_10} />
          <br />
          <h6>Toyota</h6>
        </div>
        <div className="Cards">
          <img src={Car_6} />
          <br />
          <h6>Nissan</h6>
        </div>
        <div className="Cards">
          <img src={Car_4} />
          <br />
          <h6>Lamborghini</h6>
        </div>
        <div className="Cards">
          <img src={Car_2} />
          <br />
          <h6>Ford</h6>
        </div>
      </Carousel>
    </div>
  );
}
