import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
	<nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
  <div className="container-fluid mx-5">
  <span class="navbar-brand mb-0 h1">
      Start Bootstrap
    </span>
	<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link text-white" aria-current="page" href="#">Home</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">About</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Services</a>
  </li>
  <li className="nav-item">
    <a className="nav-link text-white" href="#">Contact</a>
  </li>
</ul>
  </div>
</nav>
	);
};

export default Home;
