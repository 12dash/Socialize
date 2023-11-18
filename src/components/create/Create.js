import React, { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
  });

  const [timeArray, setTimeArray] = useState([]);
  const [time, setTime] = useState("");

  const [location, setLocation] = useState("");
  const [locationArray, setLocationArray] = useState([]);

  const TimeComponent = () => {
    if (timeArray !== null) {
      return timeArray.map((item, index) => (
        <div className="col-1" key = {item}>
          <button className="btn btn-outline-secondary" onClick={() => handleRemoveTime(index)}>{item} </button>
        </div>
      ));
    } else return <></>;
  };

  const LocationComponent = () => {
    if (locationArray !== null) {
      return locationArray.map((item, index) => (
        <div className="col-2" key = {item}>
          <button className="btn btn-outline-secondary" onClick={() => handleRemoveLocation(index)}>{item} </button>
        </div>
      ));
    } else return <></>;
  };

  const handleChange = (event) => {
    var { name, value } = event.target;
    name = event.target.id;
    setFormData({ ...formData, [name]: value });
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleLocationArray = (event) => {
    event.preventDefault();

    if (location.trim() !== "") {
      var val = location.trim()
      setLocationArray([...timeArray, val]);
      setLocation("");
    }
  };

  const handleRemoveTime = (index) => {
    const updatedTimeArray = [...timeArray];
    updatedTimeArray.splice(index, 1);
    setTimeArray(updatedTimeArray);
  };

  const handleRemoveLocation = (index) => {
    const updatedLocationArray = [...locationArray];
    updatedLocationArray.splice(index, 1);
    setLocationArray(updatedLocationArray);
  };

  const handleTimeArray = (event) => {
    event.preventDefault();

    if (time.trim() !== "") {
      var val = time.trim().replace(' ', '')
      setTimeArray([...timeArray, val]);
      setTime("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (formData.category !== "") console.log("Form submitted:", formData);
    else {
      alert("Please select a category");
      console.log("Empty category");
    }
  };

  return (
    <div>
      <h1>Create</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <div className="form-group row">
          <label htmlFor="category" className="col-2 col-form-label">
            Category
          </label>
          <div className="col-10">
            <select
              id="category"
              className="form-control"
              value={formData.category}
              onChange={handleChange}
              required
            >
              <option value={null}>Choose...</option>
              <option value="meetup">Meetup</option>
              <option value="event">Event</option>
              <option value="studyGroup">Study Group</option>
            </select>
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="name" className="col-2 col-form-label">
            Name
          </label>
          <br />
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              id="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter the name"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="description" className="col-2 col-form-label">
            Description
          </label>
          <br />
          <div className="col-10">
            <input
              type="text"
              className="form-control"
              id="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="Enter description"
              required
            />
          </div>
        </div>
        <br />
        <div className="form-group row">
          <label htmlFor="time " className="col-2 col-form-label">
            Time:
          </label>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="time"
              value={time}
              onChange={handleTimeChange}
              placeholder="e.g., 6:30 pm"
              required
            />
          </div>
          <div className="col-2">
            <button
              className="btn btn-secondary"
              onClick={handleTimeArray}
            >
              Add
            </button>
          </div>
        </div>
        <br />
        <div className="row">{TimeComponent()}</div>
        <br />

        <div className="form-group row">
          <label htmlFor="location " className="col-2 col-form-label">
            Location:
          </label>
          <div className="col-5">
            <input
              type="text"
              className="form-control"
              id="location"
              value={location}
              onChange={handleLocationChange}
              placeholder="e.g., Uris Hall"
              required
            />
          </div>
          <div className="col-2">
            <button
              className="btn btn-secondary"
              onClick={handleLocationArray}
            >
              Add
            </button>
          </div>
        </div>
        <br />
        <div className="row">{LocationComponent()}</div>
        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
