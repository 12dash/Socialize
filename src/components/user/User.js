import React from "react";
import "./user.css";

function fetchUserDetails() {
  var data = {
    name: "John Doe",
    uni: "jd1234",
    emailid: "jd1234@columbia.edu",
    location: "Brooklyn",
    phoneNum: "+16461234567",
    interests: ["Tech", "Writing"],
  };
  return data;
}

function User() {
  var data = fetchUserDetails();
  return (
    <div className="">
      <br />
      <h1>Profile</h1>
      <br />
      <div className="row detail">
        <div className="col-2"><b>Name</b> </div>
        <div className="col-3">{data.name}</div>
      </div>
      <div className="row detail">
        <div className="col-2"><b>Uni</b></div>
        <div className="col-3">{data.uni}</div>
      </div>
      <div className="row detail">
        <div className="col-2"><b>Email ID</b></div>
        <div className="col-3">{data.emailid}</div>
      </div>
      <div className="row detail"> 
        <div className="col-2"><b>Location</b></div>
        <div className="col-3">{data.location}</div>
      </div>
      <div className="row detail">
        <div className="col-2"> <b>Phone Num</b> </div>
        <div className="col-3">{data.phoneNum}</div>
      </div>
      <div className="row detail">
        <div className="col-2"> <b>Interest</b> </div>
        <div className="col-3" id="interests">{data.interests.map((interest, index) => (
        <button type='button' className="btn btn-outline-primary" style={{marginRight:"5px"}}key={index}>{interest}</button>
      ))}</div>
      </div>
      <button type="button" className="btn btn-primary">Edit</button>
    </div>
  );
}

export default User;
