import "./App.css";
import { Input, Button, DatePicker, TimePicker } from "antd";
import dayjs from "dayjs";
import { SearchOutlined } from "@ant-design/icons";
import Slider from "./components/Slider";
import SliderTwo from "./components/SliderTwo";
import SliderThree from "./components/SliderThree";
import Collapse from "./components/Collapse";
import Footer from "./components/Footer";
import Dreams from "./components/Dreams";
import BookaCar from "./components/BookaCar";
import ModalOne from "./components/ModalOne";
import SliderFour from "./components/SliderFour";
import Header from "./components/Header";

const onChange = (date, dateString) => {
  console.log(date, dateString);
};

function App() {
  return (
    <>
      <Header />
      <div className="container-fluid">
        <div className="row Head">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="Search mt-3">
              <div className="seRach">
                <label className="label_Size">Where</label>
                <br />
                <Input
                  size="default"
                  placeholder="City, airport, address or hotel"
                  className="upperInput"
                />
              </div>
              <div className="From">
                <label className="label_Size">From</label>
                <br />
                <DatePicker onChange={onChange} />
                <TimePicker
                  onChange={onChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                />
              </div>
              <div className="Until">
                <label className="label_Size">Until</label>
                <br />
                <DatePicker onChange={onChange} />
                <TimePicker
                  onChange={onChange}
                  defaultOpenValue={dayjs("00:00:00", "HH:mm:ss")}
                />
              </div>
              <Button
                type="primary"
                shape="circle"
                icon={<SearchOutlined />}
                className="mt-4"
              />
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-8 First text-center">
            <h1>Find your drive</h1>
            <h6>Explore the world's largest car sharing marketplace</h6>
            <div className="Purple"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <Slider />
        <SliderTwo />
        <SliderThree />
        <Dreams />
        <SliderFour />
        <BookaCar />
        <Collapse />
        <div className="row">
          <div className="col-md-12"></div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
