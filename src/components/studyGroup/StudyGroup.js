import React, {useState} from "react";
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
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label className="col-sm-1 col-form-label" htmlFor="name">
            Search
          </label>
          <div className="col-sm-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={text}
              onChange={handleTextChange}
              required
            />
          </div>
        </div>
        </ form>
      <br />
      <h3>Currently Polling</h3>
      {/*<PollComponent url={props.url} tag={interest_} />*/}
    </div>
  );
}

export default StudyGroup;
