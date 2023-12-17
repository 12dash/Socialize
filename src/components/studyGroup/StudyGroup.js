import React, {useState} from "react";
import PersonalizeStudyGroup from "./PersonalizeStudyGroup";
import SearchComponent from "./SearchComponent";
var apigClientFactory = require("aws-api-gateway-client").default;

function StudyGroup(props) {
  const [text, setText] = useState('')

  const handleTextChange = (event) => {
    setText(event.target.value())
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    var apigClient = apigClientFactory.newClient({ invokeUrl: props.url });
  }

  return (
    <div className="">
      <br />
      <h1>Study Group</h1>
      <hr />
      <SearchComponent url={props.url} />
      <br />
      <h4>Study Group suggested for you</h4>
      <PersonalizeStudyGroup url={props.url} />
  
      {/*<PollComponent url={props.url} tag={interest_} />*/}
    </div>
  );
}

export default StudyGroup;
