import React from "react";

//create your second component
const Card = (props) => {
	return (
<div className="card px-0 mb-3 object-fit-cover">
{props.children}
</div>


/* <div className="card px-0 mb-3 object-fit-cover">
  <img src="https://dummyimage.com/500x325/cccccc/f2f2f2.png" className="card-img-top" alt="..." />
  <div className="card-body ">
    <h5 className="card-title text-center">Card title</h5>
    <p className="card-text text-center">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
  </div>
  <ul className="list-group list-group-flush ">
    <li className="list-group-item text-center"><a href="#" className="btn btn-primary">
      Find Out More
    </a></li>
  </ul>
</div> */

	);
};

export default Card;