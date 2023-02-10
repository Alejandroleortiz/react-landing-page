import React from 'react';
import Nav from "./component/nav.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from './component/card.jsx';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
      <Jumbotron />
      <div className='row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-md-4 g-3 '>
      
      <div className="col">
      <Card/> 
      </div>

      <div className="col">
      <Card/> 
      </div>

      <div className="col">
      <Card/> 
      </div>

      <div className="col">
      <Card/> 
      </div>
      
      </div>
      </div>
    </>
  );
}

export default App;