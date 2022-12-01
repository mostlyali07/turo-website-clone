import React from "react";
import { Collapse } from "antd";
import "../App.css";
const { Panel } = Collapse;
let text = `
  A dog is a type of domesticated animal.
  Known for its loyalty and faithfulness,
  it can be found as a welcome guest in many households across the world.
`;
const CollapseQ = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <div className="container my-5">
        <div className="row FAQs_one">
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <h1>Frequently asked questions</h1>
            <div className="Purple mx-5 mb-5"></div>
          </div>
          <div className="col-md-2"></div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <Collapse onChange={onChange}>
              <Panel header="What do I need to book a car on Turo?" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="Do I need my own insurance?" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="Can other people drive a car that I booked?" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
          <div className="col-md-6">
            <Collapse onChange={onChange}>
              <Panel header="What happens if I have an accident?" key="1">
                <p>{text}</p>
              </Panel>
              <Panel header="Can I get my car delivered to me?" key="2">
                <p>{text}</p>
              </Panel>
              <Panel header="How do I get discounts when booking a car?" key="3">
                <p>{text}</p>
              </Panel>
            </Collapse>
          </div>
        </div>
      </div>
    </>
  );
};
export default CollapseQ;
