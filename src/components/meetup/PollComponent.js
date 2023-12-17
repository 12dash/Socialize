import React, { useState, useEffect } from "react";
import { PollingCards } from "../displayComponents/Cards";

var apigClientFactory = require("aws-api-gateway-client").default;

function PollComponent(props) {
  const [data, setData] = useState(null);

  useEffect(() => {
    var uni = localStorage.getItem("uni");
    var apigClient = apigClientFactory.newClient({ invokeUrl: props.url });
    var pathTemplate = "/poll/category";
    var pathParams = {};
    var method = "GET";
    var body = {
      category: "Event",
      tag: props.tag,
    };
    var additionalParams = { headers: { user_id: uni, category: props.category }, queryParams: {} };
    apigClient
      .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
      .then(function (result) {
        console.log(result.data.body);
        setData(result.data.body);
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
       //console.log(error);
      });
  }, [props.url, props.tag]);

  function ScrollableCardRow({ children }) {
    return <div className="d-flex flex-nowrap overflow-auto">{children}</div>;
  }

  const Component = () => {
    if (data !== null) {
      return data.map((item) => (
        <PollingCards
          key={item.poll_id}
          pollingId={item.poll_id}
          title={item.title}
          numPeople={item.paticipant_count}
          type={item.category}
        />
      ));
    } else return <></>;
  };

  return (
    <>
      <ScrollableCardRow>{Component()}</ScrollableCardRow>
    </>
  );
}
export default PollComponent;
