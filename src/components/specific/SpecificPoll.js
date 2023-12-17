import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

var apigClientFactory = require("aws-api-gateway-client").default;
function register(activity_id, url) {
  var uni = localStorage.getItem("uni");
  var apigClient = apigClientFactory.newClient({ invokeUrl: url });
  var pathTemplate = "/poll/participate/"+activity_id;
  var pathParams = {};
  var method = "POST";
  var body = {
    activity_id: activity_id,
  };
  var additionalParams = { headers: { user_id: uni }, queryParams: {} };
  apigClient
    .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
    .then(function (result) {
      console.log("submitted:", result);
    })
    .catch(function (error) {
      console.log("Error:", error);
    });
}

function getData(type, id, setDetails, url, setLoading) {
  var uni = localStorage.getItem("uni");
  var apigClient = apigClientFactory.newClient({ invokeUrl: url });
  type = type.toLowerCase();
  var pathTemplate = "/poll/viewOne/" + id;
  var pathParams = {};
  var method = "GET";
  var body = {};
  var additionalParams = { headers: { user_id: uni }, queryParams: {} };
  setLoading(true);
  apigClient
    .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
    .then(function (result) {
      console.log(result.data.body);
      setDetails(result.data.body);
      setLoading(false);
    })
    .catch(function (error) {
      console.log(error);
      setLoading(false);
    });
  setDetails([
    {
      id: "12rkjbnacijld",
      title: "AWS System Design",
      img_url:
        "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
      location: "Uris Hall",
      time: "6:30 pm",
      numPeople: 2,
      type: "Meetup",
    },
  ]);
}

function SpecifcPoll(props) {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const id = queryParams.get("id");
  const type = queryParams.get("type");

  const [details, setDetails] = useState({});

  useEffect(() => {
    getData(type, id, setDetails, props.url, setLoading);
  }, [props.url, type, id]);

  const [loading, setLoading] = useState(false);
  if (loading) {
    return (
      <div className="spinner-border" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    );
  } else {
    return (
      <div>
        <br />
        <div className="row align-items-center">
          <div className="col-4 offset-1 text-center">
            <h2>{details.title}</h2>
            <div className="row ">
              <div className="col-12">
                <i className="fa-solid fa-users" /> {details['participants_count']}
              </div>
            </div>
            <br />
          </div>
          <div className="col-2 offset-4 ">
            <button
              className="btn btn-primary"
              onClick={() => register(details['poll_id'], props.url)}
            >
              Show Interest
            </button>
          </div>
        </div>
        <br />
        <h2>Details</h2>
        {details.description}
      </div>
    );
  }
}

export default SpecifcPoll;