import React, { useState } from "react";

var apigClientFactory = require("aws-api-gateway-client").default;

function CreateProfile(props) {
  var email = localStorage.getItem("email");
  var uni = localStorage.getItem("uni");

  var [data, setData] = useState({
    name: "",
    email: email,
    uni: uni,
    location: "",
    phoneno: "",
  });

  const [interest, setInterest] = useState("");
  const [interestArray, setInterestArray] = useState([]);

  const handleInterestRemoval = (index) => {
    const updatedDaterray = [...interestArray];
    updatedDaterray.splice(index, 1);
    setInterestArray(updatedDaterray);
  };
  const handleInterestChange = (event) => {
    setInterest(event.target.value);
  };

  const handleInterestArray = (event) => {
    event.preventDefault();

    if (interest.trim() !== "") {
      var val = interest.trim().replace(" ", "");
      setInterestArray([...interestArray, val]);
      setInterest("");
    }
  };

  const InterestComponent = () => {
    if (interestArray !== null) {
      return interestArray.map((item, index) => (
        <div className="col-sm-2" key={item}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleInterestRemoval(index)}
          >
            {item}{" "}
          </button>
        </div>
      ));
    } else return <></>;
  };

  const handleLocationChange = (event) => {
    setData({ ...data, location: event.target.value });
  };
  const handlePhonenumChange = (event) => {
    setData({ ...data, phoneno: event.target.value });
  };
  const handleNameChange = (event) => {
    setData({ ...data, name: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(data)
    var apigClient = apigClientFactory.newClient({ invokeUrl: props.url });
    var pathTemplate = "/profile/create";
    var pathParams = {};
    var method = "POST";
    var body = {
        name: data.name, 
        uni: data.uni, 
        emaild: data.email, 
        location: data.location,
        phoneno: data.phoneno,
        interest: interestArray
    }
    var additionalParams = { headers: { uni: uni }, queryParams: {} };
    apigClient
      .invokeApi(pathParams, pathTemplate, method, additionalParams, body)
      .then(function (result) {
      })
      .catch(function (error) {
        console.log("Error:", error);
      });
  };

  return (
    <div className="container">
      <br />
      <h1>Create Profile</h1>
      <br />
      <form onSubmit={handleSubmit}>
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="name">
              Name:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="name"
                value={data.name}
                onChange={handleNameChange}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="uni">
              Uni :
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                value={data.uni}
                id="uni"
                disabled
                readOnly
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="email">
              Email:
            </label>
            <div className="col-sm-10">
              <input
                type="email"
                className="form-control"
                id="email"
                disabled
                value={data.email}
                readOnly
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="location">
              Location:
            </label>
            <div className="col-sm-10">
              <input
                type="text"
                className="form-control"
                id="location"
                value={data.location}
                onChange={handleLocationChange}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="phoneNum">
              Phone Number:
            </label>
            <div className="col-sm-10">
              <input
                type="tel"
                className="form-control"
                id="phoneNum"
                value={data.phoneno}
                onChange={handlePhonenumChange}
              />
            </div>
          </div>
          <br />
          <div className="form-group row">
            <label className="col-sm-2 col-form-label" htmlFor="interests">
              Interests:
            </label>
            <div className="col-sm-8">
              <input
                type="text"
                className="form-control"
                id="interests"
                value={interest}
                onChange={handleInterestChange}
              />
            </div>
            <div className="col-sm-2">
              <button className="btn btn-primary" onClick={handleInterestArray}>
                Add
              </button>
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-2" />
            {InterestComponent()}
          </div>

          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </form>

    </div>
  );
}
export default CreateProfile;
