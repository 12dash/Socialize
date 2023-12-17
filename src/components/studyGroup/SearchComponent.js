import React, { useState } from "react";
var apigClientFactory = require("aws-api-gateway-client").default;

function SearchComponent(props) {
  const [text, setText] = useState("");
  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(text);
    var apigClient = apigClientFactory.newClient({ invokeUrl: props.url });
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
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
          <div className="col-sm-2">
            <button className="btn btn-primary" type="submit">
              Search
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
export default SearchComponent;
