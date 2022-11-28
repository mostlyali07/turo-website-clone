import React from "react";
import "../App.css";
import { UserOutlined } from "@ant-design/icons";
import { Input } from "antd";

const Datepicker = () => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-2"></div>
          <div className="Search mt-3">
            <div className="col-md-3">
                <label>Where</label>
              <Input
                size="small"
                placeholder="small size"
                prefix={<UserOutlined />}
              />
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>
    </>
  );
};

export default Datepicker;
