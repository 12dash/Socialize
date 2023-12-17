import React from "react";
import InterestComponent from "./InterestComponent";
import PollComponent from "./PollComponent";

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function Event(props) {
  var interest_list = localStorage.getItem("interest").split(",");
  var interest_ = interest_list[getRandomInt(interest_list.length)];

  return (
    <div className="">
      <br />
      <h1>Event</h1>
      <hr />
      <br />
      <h5>
        Because you are interested in <span>{interest_}</span>
      </h5>
      <InterestComponent url={props.url} tag={interest_} />
      <br />
      <h3>Currently Polling</h3>
      {/*<PollComponent url={props.url} tag={interest_} />*/}
    </div>
  );
}

export default Event;
