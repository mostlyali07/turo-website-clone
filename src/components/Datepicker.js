import React from "react";
import "../App.css";
import { Input } from "antd";
import { DatePicker} from 'antd';
const onChange = (date, dateString) => {
  console.log(date, dateString);
};
const Datepicker = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="Search mt-3">
            <div className="col-md-3">
              <label className="label_Size">Where</label>
              <Input size="small" placeholder="small size" />
            </div>
            <div className="col-md-2">
                <DatePicker onChange={onChange} />
            </div>
            <div className="col-md-3"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default Datepicker;
