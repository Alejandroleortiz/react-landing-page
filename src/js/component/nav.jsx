import React from "react";

//create your first component
const Nav = () => {
	return (
    <nav className="navbar navbar-expand-lg bg-body-secondary" data-bs-theme="dark">
    <div className="container-fluid mx-3">
      <a className="navbar-brand" href="#">Start Bootstrap</a>
      <div className="justify-content-end">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Services</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Contact</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
	);
};

export default Nav;