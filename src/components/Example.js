import React from 'react';
import '../styles/about.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Container, Row, Col } from 'react-bootstrap';
import Features from './Features';
import About from './About';
import ChefMaster from './ChefMaster';
import Time from './Time';
import Visitors from './Visitors';


const Example = () => {
  return (
    <div className='backimg'>
      <Container fluid>
        <div className='center'>
          <div className='bg-white contentback'>
            <div className='p-lg-4 p-3 p-md-5'>
              <About />
              <hr className='separateline' />
              <Features />
              <hr className='separateline' />
              <ChefMaster />
              <hr className='separateline' />
              <Time />
              <hr className='separateline' />
              <Visitors />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Example;
