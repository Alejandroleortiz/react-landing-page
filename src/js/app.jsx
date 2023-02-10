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
      <Card/> <Card/> <Card/> <Card/>
      </div>
    </>
  );
}

export default App;