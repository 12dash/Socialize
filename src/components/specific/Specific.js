import React from "react";
import { useLocation } from "react-router-dom";

function getData(id, type) {
  var data = {
    id: "12rkjbnacijld",
    title: "AWS System Design",
    img_url:
      "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
    location: "Uris Hall",
    time: "6:30 pm",
    numPeople: "2",
    type: "Event",
    details: "askjhbkdvjb jdsn ",
  };
  return data;
}

function Specifc() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const type = queryParams.get("type");
  const data = getData(id, type);
  return (
    <div>
      <br />
      <div className="row align-items-center">
        <div className="col-4 offset-1 text-center">
          <img
            src={data.img_url}
            className="card-img-top mx-auto"
            alt="card logo"
            style={{ width: "50%" }}
          />
          <h2>{data.title}</h2>
          <div className="row ">
            <div className="col-6">
              <i className="fa-regular fa-clock" /> {data.time}
            </div>
            <div className="col-6">
              <i className="fa-solid fa-location-dot" /> {data.location}
            </div>
          </div>
          <br />
        </div>
        <div className="col-2 offset-4 ">
          <button className="btn btn-primary">Register</button>
        </div>
      </div>
      <br />
      <h2>Details</h2>
      {data.details}
    </div>
  );
}
export default Specifc;
