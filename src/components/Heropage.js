import React from 'react';
import '../styles/homenavbar.css';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import bg1 from '../assets/bg1.jpg';
import bg2 from '../assets/bg2.jpg';
import bg3 from '../assets/bg3.jpg';

function Heropage() {

const navigate=useNavigate();

  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img src={bg1} className='w-100 hero-image' alt="Background 1" />
          <Carousel.Caption>
            <div className='img-content'>
              <h4>Hello, New friend</h4>
              <h1>Visit to our Online shop</h1>
              <p>Explore our extensive selection online and visit our shop today!</p>
              <button className='find-us' onClick={() => navigate('/menu')}   >Find Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img src={bg2} className='w-100 hero-image' alt="Background 2" />
          <Carousel.Caption>
            <div className='img-content'>
              <h4>Hello, New friend</h4>
              <h1>Visit to our Online shop</h1>
              <p>Explore our extensive selection online and visit our shop today!</p>
              <button className='find-us' onClick={() => navigate('/menu')}  >Find Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src={bg3} className='w-100 hero-image' alt="Background 3" />
          <Carousel.Caption>
            <div className='img-content'>
              <h4>Hello, New friend</h4>
              <h1>Visit to our Online shop</h1>
              <p>Explore our extensive selection online and visit our shop today!</p>
              <button className='find-us' onClick={() => navigate('/menu')}   >Find Us</button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default Heropage;
