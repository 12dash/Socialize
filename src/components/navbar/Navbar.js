import React from 'react';

function Navbar({userName}) {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light container-fluid">
        <a className="navbar-brand" href="/">Socialize</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown" >
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="event">Event</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/meetup">Meetup</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/studygroup">Study Group</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/create">Create</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/user">{userName}</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  };
  
  export default Navbar;