import React, { useState, useEffect } from "react";
import { Cards } from "../displayComponents/Cards";

var apigClientFactory = require("aws-api-gateway-client").default;

function ScrollableCardRow({ children }) {
  return <div className="d-flex flex-nowrap overflow-auto">{children}</div>;
}

function Home(props) {
  const [upcoming, setUpcoming] = useState(null);

  useEffect(() => {
    var apigClient = apigClientFactory.newClient({invokeUrl: props.url});
    var pathTemplate = "/homepage";
    var pathParams = {};
    var method = "GET";
    var body = {};
    var additionalParams = { headers: {}, queryParams: {} };
    apigClient
      .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
      .then(function (result) {
        setUpcoming(JSON.parse(result.data.body));
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [props.url]);

  const Component = () => {
    if (upcoming !== null) {
      return upcoming.map((item) => (
        <Cards
          key={item.id}
          cardId={item.id}
          title={item.title}
          img_url={item.img_url}
          location={item.location}
          time={item.time}
          numPeople={item.numPeople}
          type={item.type}
        />
      ));
    } else return <></>;
  };

  return (
    <>
      <br />
      <h1>Upcoming</h1>
      <br />
      <ScrollableCardRow>{Component()}</ScrollableCardRow>
    </>
  );
}

export default Home;
