import React, { useState, useEffect } from "react";
import { Cards, PollingCards } from "../displayComponents/Cards";

var apigClientFactory = require("aws-api-gateway-client").default;

function InterestComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    var uni = localStorage.getItem("uni");
    var apigClient = apigClientFactory.newClient({ invokeUrl: props.url });
    var pathTemplate = "/recommendation/tag-based-recommendation";
    var pathParams = {};
    var method = "POST";
    var body = {
      category: "Event",
      tag: props.tag,
    };
    var additionalParams = { headers: { user_id: uni }, queryParams: {} };
    setLoading(true);
    apigClient
      .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
      .then(function (result) {
        console.log("result body: ", result.data.body);
        console.log("result length : ", result.data.body.length);
        if (result.data.body.length > 0) {
          setData(result.data.body);
        } else {
          setData(null);
        }setLoading(false);
      })
      .catch(function (error) {
        setData([
          {
            id: "12rkjbnacijld",
            title: "AWS System Design",
            img_url:
              "https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102017/logo_0.png?17TK91b1B6OvV2MFrCLfukw1c8oEaNr6&itok=vsanFiUj",
            location: "Uris Hall",
            datetime: "6:30 pm",
            attendees: ["1", "2"],
            category: "Event",
          },
        ]);
        console.log(error);
        setLoading(false);
      });
  }, [props.url, props.tag]);

  function ScrollableCardRow({ children }) {
    return <div className="d-flex flex-nowrap overflow-auto">{children}</div>;
  }

  const Component = () => {
    console.log(data);
    if (data !== null) {
      return data.map((item) => (
        <Cards
          key={item.activity_id}
          cardId={item.activity_id}
          title={item.title}
          img_url={item.img_url}
          location={item.location}
          time={item.datetime}
          numPeople={item.attendees.length}
          type={item.category}
        />
      ));
    } else return <></>;
  };

  const [loading, setLoading] = useState(false);

  return (
    <>
      {loading && (
        <div className="spinner-border" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      <ScrollableCardRow>{Component()}</ScrollableCardRow>
    </>
  );
}
export default InterestComponent;
