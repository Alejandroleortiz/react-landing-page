import React from "react";

//create your second component
const Jumbotron = () => {
	return (
        <div className="p-5 my-4 mx-4 bg-body-secondary rounded-3">
        <div className="container-fluid ">
          <h1 className="display-3  md-14"><strong> A Warm Welcome!</strong></h1>
          <p className="col-md-14">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus deleniti velit totam fugit. Velit ullam natus dicta adipisci illo aspernatur tempore quis id quod consequuntur earum, ipsum soluta consequatur in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur ullam odit reiciendis voluptatibus voluptate.</p>
          <button className="btn btn-primary btn-lg" type="button">Call to action!</button>
        </div>
      </div>
	);
};

export default Jumbotron;