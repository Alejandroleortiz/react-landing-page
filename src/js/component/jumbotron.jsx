import React from "react";

//create your second component
const data = {
  title: "A Warm Welcome!",
  description:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus deleniti velit totam fugit. Velit ullam natus dicta adipisci illo aspernatur tempore quis id quod consequuntur earum, ipsum soluta consequatur in. Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi consequatur ullam odit reiciendis voluptatibus voluptate.",
  buttonText: "Call to action!",
};


const Jumbotron = () => {
	return (
        <div className="p-5 my-4 bg-body-secondary rounded-3">
        <div className="container">
          <h1 className="display-3  md-14"><strong>{data.title}</strong></h1>
          <p className="col-md-14">{data.description}</p>
          <button className="btn btn-primary btn-lg" type="button">{data.buttonText}</button>
        </div>
      </div>
	);
};

export default Jumbotron;