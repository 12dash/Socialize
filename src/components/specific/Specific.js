import React, {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

var apigClientFactory = require("aws-api-gateway-client").default;

function getData(type, id, setDetails, url) {
  var apigClient = apigClientFactory.newClient({ invokeUrl: url });
  type = type.toLowerCase()
  var pathTemplate = "/"+type+"/"+id;
  console.log(pathTemplate);
  var pathParams = {};
  var method = "GET";
  var body = {};
  var additionalParams = { headers: {}, queryParams: {} };
  apigClient
    .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
    .then(function (result) {
      console.log(result.data.body)
      setDetails(JSON.parse(result.data.body));
    })
    .catch(function (error) {
      console.log(error);
    });
}

function Specifc(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const type = queryParams.get("type");
  
  const [details, setDetails] = useState({})

  useEffect(() => {
    getData(type, id, setDetails, props.url);
  }, [props.url, type, id]);

  
  return (
    <div>
      <br />
      <div className="row align-items-center">
        <div className="col-4 offset-1 text-center">
          <img
            src={details.img_url}
            className="card-img-top mx-auto"
            alt="card logo"
            style={{ width: "50%" }}
          />
          <h2>{details.title}</h2>
          <div className="row ">
            <div className="col-6">
              <i className="fa-regular fa-clock" /> {details.time}
            </div>
            <div className="col-6">
              <i className="fa-solid fa-location-dot" /> {details.location}
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
      {details.details}
    </div>
  );
}
export default Specifc;
