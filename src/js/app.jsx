import React from 'react';
import Nav from "./component/nav.jsx";
import Jumbotron from "./component/jumbotron.jsx";
import Card from './component/card.jsx';
import CardImg from './component/Card/cardImg.jsx';
import CardBody from './component/Card/cardBody.jsx';
import CardFooter from './component/Card/cardFooter.jsx';
import Footer from './component/footer.jsx';
import { dataCard } from './component/data.js';

function App() {
  return (
    <>
      <Nav />
      <div className='container'>
        <Jumbotron />
        <div className='row'>

          {
            dataCard.map((data) => {
              return (

                <div className="col-md-3" key={data.id}>
                  <Card>
                    <CardImg src={data.imagen} />
                    <CardBody>
                      <h5 className="card-title text-center">{data.cardTitle}</h5>
                      <p className="card-text text-center">{data.cardDescription}</p>
                    </CardBody>
                    <CardFooter>
                      {data.textButton}
                    </CardFooter>
                  </Card>

                </div>
              )
            })
          }

        </div>
      </div>

      <Footer />
    </>
  );
}

export default App;