import React from 'react';
import Nav from "./component/nav.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from './component/card.jsx';

function App() {
  return (
    <div>
      <Nav />
      <div className='container-fluid'>
      <Jumbotron />
      <div className='row d-flex justify-content-around'>
      <Card className="col-3"/> <Card className="col-3"/> <Card className="col-3"/> <Card className="col-3"/>
      </div>
      </div>
    </div>
  );
}

export default App;