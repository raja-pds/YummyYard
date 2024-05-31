import React from 'react';
import { useLocation } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/checkout.css'; // Import the CSS file

const CheckoutPage = () => {
  const location = useLocation();
  const { items, totalPrice } = location.state;

  return (
    <Container className="checkout-container">
      <h1 className="checkout-header">Checkout</h1>
      <h2>Total Price: {totalPrice}</h2>
      <Row>
        {items.map((item, index) => (
          <Col key={index} lg={3} md={6} sm={12} className='checkout-item'>
            <Card className='h-100'>
              <Card.Img variant="top" src={item.image} alt={item.name} />
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <p>Price: {item.price}</p>
                <p>Count: {item.count}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CheckoutPage;
