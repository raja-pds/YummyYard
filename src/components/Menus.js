import React, { useState } from 'react'; 
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import '../styles/menu.css';
import pizza from '../assets/pizza.jpg';
import juice from '../assets/juice.jpg';
import burger from '../assets/burger.jpg';
import chicken from '../assets/chicken.jpg';
import seafood from '../assets/seafood.jpg';
import fishfry from '../assets/fishfry.jpg';
import iral from '../assets/iral.jpg';
import legpiece from '../assets/legpiece.jpg';
import briyani from '../assets/briyani.jpg';
import kiwi from '../assets/kiwi.jpg';
import lemon from '../assets/lemon.jpg';
import pomegrante from '../assets/pomegrante.jpg';
import orieo from '../assets/orieo.jpg';
import papaya from '../assets/papaya.jpg';
import pineapple from '../assets/pineapple.jpg';
import strabeery from '../assets/strabeery.jpg';

const Menus = () => {
  const [displayMenu, setDisplayMenu] = useState('mainMenu');

  const mainMenuItems = [
    { name: 'Pizza', image: pizza },
    { name: 'Fish Fry', image: fishfry },
    { name: 'Burger', image: burger },
    { name: 'Chicken', image: chicken },
    { name: 'Seafood', image: seafood },
    { name: 'Iral', image: iral },
    { name: 'Briyani', image: briyani },
    { name: 'Leg Piece', image: legpiece }
  ];

  const juiceItems = [
    { name: 'Juice', image: juice },
    { name: 'Kiwi', image: kiwi },
    { name: 'Lemon', image: lemon },
    { name: 'Papaya', image: papaya },
    { name: 'pomegrante', image: pomegrante },
    { name: 'Orieo', image: orieo },
    { name: 'Strawberry', image: strabeery },
    { name: 'Pineapple', image: pineapple }
  ];

  const toggleDisplayMenu = (menuType) => {
    setDisplayMenu(menuType);
  };

  return (
    <>
      <div className='menubg w-100'>
        <Container fluid>
          <div className='menucenter'>
            <div className="d-flex justify-content-between align-items-start">
              <h2 className='section-title' onClick={() => toggleDisplayMenu('mainMenu')}>Main Menu Items</h2>
              <h2 className='section-title' onClick={() => toggleDisplayMenu('juiceItems')}>Juice Items</h2>
            </div>
            {displayMenu === 'mainMenu' && (
              <Row>
                {mainMenuItems.map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index} className='mb-4'>
                    <Card className='h-100'>
                      <Card.Img variant="top" src={item.image} alt={item.name} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Button variant="primary" className='me-2'>+1</Button>
                        <Button variant="success">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}

           
            {displayMenu === 'juiceItems' && (
              <Row>
                {juiceItems.map((item, index) => (
                  <Col lg={3} md={6} sm={12} key={index} className='mb-4'>
                    <Card className='h-100'>
                      <Card.Img variant="top" src={item.image} alt={item.name} />
                      <Card.Body>
                        <Card.Title>{item.name}</Card.Title>
                        <Button variant="primary" className='me-2'>+1</Button>
                        <Button variant="success">Add to Cart</Button>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            )}
          </div>
        </Container>
      </div>
    </>
  );
}

export default Menus;
