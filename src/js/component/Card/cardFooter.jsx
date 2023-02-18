import React from 'react'

function CardFooter(props) {
  return (
    <ul className="list-group list-group-flush ">
    <li className="list-group-item text-center"><a href="#" className="btn btn-primary">
      {props.children}
    </a></li>
  </ul>
  )
}

export default CardFooter