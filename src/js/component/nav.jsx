import React from "react";

const dataNav = {

  textNav: "Start Bootstrap",
  linkNav: "#",

  textHome: "Home",
  linkHome: "#",

  textAbout: "About",
  linkAbout: "#",

  textServices: "Services",
  linkServices: "#",

  textContact: "Services",
  linkContact: "#",
}

const Nav = () => {
	return (
    <nav className="navbar navbar-expand-lg bg-body-secondary" data-bs-theme="dark">
    <div className="container">
      <a className="navbar-brand" href={dataNav.linkNav}>{dataNav.textNav}</a>
      <div className="justify-content-end">
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" ></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarColor01">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href={dataNav.linkHome}>{dataNav.textHome}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={dataNav.linkAbout}>{dataNav.textAbout}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={dataNav.linkServices}>{dataNav.textServices}</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href={dataNav.linkContact}>{dataNav.textContact}</a>
          </li>
        </ul>
      </div>
      </div>
    </div>
  </nav>
	);
};

export default Nav;