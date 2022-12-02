import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import City_1 from "../city_1.png";
import City_2 from "../city_2.png";
import City_3 from "../city_3.png";
import City_4 from "../city_4.png";
import City_5 from "../city_5.png";
import City_6 from "../city_6.png";
import City_7 from "../city_7.png";
import City_8 from "../city_8.png";
import City_9 from "../city_9.png";
import City_10 from "../city_10.png";
import "../App.css";

export default function Slider() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 7,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
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
      <h5>Browse by destination</h5>
      <Carousel responsive={responsive}>
        <div className="CardsTwo">
          <img src={City_1} />
          <br />
          <h6>Los Angeles</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_2} />
          <br />
          <h6>Miami</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_3} />
          <br />
          <h6>Honolulu</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_4} />
          <br />
          <h6>Denver</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_5} />
          <br />
          <h6>London</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_6} />
          <br />
          <h6>Toronto</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_7} />
          <br />
          <h6>Jersey City</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_8} />
          <br />
          <h6>San Francisco</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_9} />
          <br />
          <h6>Atlanta</h6>
        </div>
        <div className="CardsTwo">
          <img src={City_10} />
          <br />
          <h6>Phoenix</h6>
        </div>
      </Carousel>
    </div>
  );
}
