import React from 'react';
import staticImage from '../assets/static.svg';
import '../styles/homenavbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col, Container } from 'react-bootstrap';

const MainNav = () => {
  return (
    <div className='Top-header bg-dark'>
      <Container fluid>
      <Row>
        <Col lg="6" md="6" sm="6">
           <div>
           <img src={staticImage} alt='svg' width="200px" className='stcimg'/>
           </div>
        </Col>
        <Col lg="6" md="6" sm="6">
          <div>
          <button className='buy'>Buy now</button>
          </div>
        </Col>
      </Row>
      </Container>
    </div>
  );
}

export default MainNav;
