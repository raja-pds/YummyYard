import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import c1 from '../assets/c1.jpg';
import c2 from '../assets/c2.jpg';

const ChefMaster = () => {
  return (
    <div className='teams-card'>
      <Row>
        <Col lg={4} md={4} sm={12}>
          <Card style={{ width: '100%', marginBottom: '30px' }}>
            <Card.Img variant="bottom" src={c1} className='card-img' />
            <Card.Body>
              <h1>Paul Trueman</h1>
              <p>Master Chef</p>
              <hr className='card-underline' />
              <FaFacebookF className='icons' />
              <FaInstagram className='icons' />
              <FaTwitter className='icons' />
              <FaYoutube className='icons' />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <Card style={{ width: '100%', marginBottom: '30px' }}>
            <Card.Img variant="top" src={c2} className='card-img' />
            <Card.Body>
              <h1>Oscar Oldman</h1>
              <p>Master Chef</p>
              <hr className='card-underline' />
              <FaFacebookF className='icons' />
              <FaInstagram className='icons' />
              <FaTwitter className='icons' />
              <FaYoutube className='icons' />
            </Card.Body>
          </Card>
        </Col>
        <Col lg={4} md={4} sm={12}>
          <Card style={{ width: '100%', marginBottom: '30px' }}>
            <Card.Img variant="top" src={c1} className='card-img' />
            <Card.Body>
              <h1>Emma Newman</h1>
              <p>Master Chef</p>
              <hr className='card-underline' />
              <FaFacebookF className='icons' />
              <FaInstagram className='icons' />
              <FaTwitter className='icons' />
              <FaYoutube className='icons' />
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default ChefMaster;
