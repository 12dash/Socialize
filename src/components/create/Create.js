import React, { useState } from "react";

function Create() {
  const [formData, setFormData] = useState({
    category: "",
    name: "",
    description: "",
  });

  const [time, setTime] = useState("");
  const [timeArray, setTimeArray] = useState([]);

  const [location, setLocation] = useState("");
  const [locationArray, setLocationArray] = useState([]);

  const [date, setDate] = useState("");
  const [dateArray, setDateArray] = useState([]);

  const TimeComponent = () => {
    if (timeArray !== null) {
      return timeArray.map((item, index) => (
        <div className="col-1" key={item}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleRemoveTime(index)}
          >
            {item}{" "}
          </button>
        </div>
      ));
    } else return <></>;
  };

  const LocationComponent = () => {
    if (locationArray !== null) {
      return locationArray.map((item, index) => (
        <div className="col-2" key={item}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleRemoveLocation(index)}
          >
            {item}{" "}
          </button>
        </div>
      ));
    } else return <></>;
  };

  const DateComponent = () => {
    if (dateArray !== null) {
      return dateArray.map((item, index) => (
        <div className="col-2" key={item}>
          <button
            className="btn btn-outline-secondary"
            onClick={() => handleRemoveDate(index)}
          >
            {item}{" "}
          </button>
        </div>
      ));
    } else return <></>;
  };

  const handleChange = (event) => {
    var { name, value } = event.target;
    name = event.target.id;
    setFormData({ ...formData, [name]: value });
  };

  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleLocationChange = (event) => {
    setLocation(event.target.value);
  };

  const handleRemoveTime = (index) => {
    const updatedTimeArray = [...timeArray];
    updatedTimeArray.splice(index, 1);
    setTimeArray(updatedTimeArray);
  };

  const handleRemoveDate = (index) => {
    const updatedDaterray = [...dateArray];
    updatedDaterray.splice(index, 1);
    setDateArray(updatedDaterray);
  };

  const handleRemoveLocation = (index) => {
    const updatedLocationArray = [...locationArray];
    updatedLocationArray.splice(index, 1);
    setLocationArray(updatedLocationArray);
  };

  const handleTimeArray = (event) => {
    event.preventDefault();

    if (time.trim() !== "") {
      var val = time.trim().replace(" ", "");
      setTimeArray([...timeArray, val]);
      setTime("");
    }
  };

  const handleDateArray = (event) => {
    event.preventDefault();

    if (date.trim() !== "") {
      var val = date.trim().replace(" ", "");
      if (!dateArray.includes(val)) {
        setDateArray([...dateArray, val]);
      }
      setDate("");
    }
  };

  const handleLocationArray = (event) => {
    event.preventDefault();

    if (location.trim() !== "") {
      var val = location.trim();
      setLocationArray([...locationArray, val]);
      setLocation("");
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    var category_validation = formData.category !== "";
    var timeArray_validation = timeArray.length > 0;
    var locationArray_validation = locationArray.length > 0;
    var dateArray_validation = dateArray.length > 0;

    if (
      category_validation &&
      timeArray_validation &&
      locationArray_validation &&
      dateArray_validation
    ) {
      console.log("Submit", dateArray);
    } else {
      if (category_validation === false) alert("Please select a category");
      else if (timeArray_validation === false)
        alert("Please add at least 1 time");
      else if (locationArray_validation === false)
        alert("Please add at least 1 location");
      else if (dateArray_validation === false)
        alert("Please add at least 1 date");
      console.log("Error with form");
    }
  };

  var username = "John Doe";
  const today = new Date();
  const formattedDate = today.toISOString().split("T")[0];

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
            />
          </div>
          <div className="col-2">
            <button className="btn btn-secondary" onClick={handleTimeArray}>
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
            />
          </div>
          <div className="col-2">
            <button className="btn btn-secondary" onClick={handleLocationArray}>
              Add
            </button>
          </div>
        </div>
        <br />
        <div className="row">{LocationComponent()}</div>
        <br />

        <div className="form-group row">
          <label htmlFor="date " className="col-2 col-form-label">
            Date:
          </label>
          <div className="col-5">
            <input
              type="date"
              className="form-control"
              id="date"
              value={date}
              onChange={handleDateChange}
              min={formattedDate}
            />
          </div>
          <div className="col-2">
            <button className="btn btn-secondary" onClick={handleDateArray}>
              Add
            </button>
          </div>
        </div>
        <br />
        <div className="row">{DateComponent()}</div>
        <br />

        <button type="submit" className="btn btn-primary">
          Create
        </button>
      </form>
    </div>
  );
}

export default Create;
