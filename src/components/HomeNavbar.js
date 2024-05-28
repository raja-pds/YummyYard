import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../assets/logo.png';
import '../styles/homenavbar.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import MainNav from './MainNav';

function HomeNavbar() {
  return (
    <>
     
      <Navbar expand="lg" className="home-header" sticky='top'>
        <div className="container-fluid">
          <Navbar.Brand href="#home" className="me-auto">
            <img src={logo} alt='logo' width="150px" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto nav-items nav-size">
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/menu">Menu</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
            <div className="d-flex">
              <button className="reservation-button">Reservation</button>
              <MdOutlineShoppingBag className='shop-icon ms-3' />
            </div>
          </Navbar.Collapse>
        </div>
      </Navbar>
    </>
  );
}

export default HomeNavbar;
