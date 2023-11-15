import React from "react";
import "./cards.css"

function Cards({ id, title, img_url, time, location, numPeople, type }) {
  var num = numPeople ? numPeople : 0;
  return (
    <div className="card col-3" >
      <img
        src={img_url}
        className="card-img-top mx-auto"
        alt="card logo"
        style={{ width: "50%" }}
      />
      <div className="card-body text-center">
        <h5 className="card-title">{title}</h5>
        <div className="card-text">
          <div className="row">
            <div className="col-6">
              <i className="fa-regular fa-clock" /> {time}
            </div>
            <div className="col-6">
              <i className="fa-solid fa-location-dot" /> {location}
            </div>
          </div>
          <br />
          <div className="row">
            <div className="col-6">
              <i className="fa-solid fa-users" /> {num} people
            </div>
            <div className="col-6">{type}</div>
          </div>
        </div>
        <br />
        <a href={"/specific?id="+id+'&type='+type} className="btn btn-outline-dark">
          {title}
        </a>
      </div>
    </div>
  );
}
export default Cards;
