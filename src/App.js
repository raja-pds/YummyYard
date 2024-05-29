import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import HomeNavbar from './components/HomeNavbar';
import Menus from './components/Menus';
import Heropage from './components/Heropage';
import Example from './components/Example';
import Footer from './components/Footer';
import Home from './Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <>  
           <Home />
          </>
        } />
        <Route path="/home" element={
          <>
            <HomeNavbar />
            <Heropage />
            <Example />
            <Footer />
          </>
        } />
         <Route path="/about" element={
          <>
            <HomeNavbar />
            <Example />
          </>
        } />
         <Route path="/menu" element={
          <>
            <HomeNavbar  />
            <Menus />
            <Footer />
          </>
        } />
       <Route path="/contact" element={
          <>
           <HomeNavbar />
           <Footer />
          </>
        } />
      </Routes>   
    </BrowserRouter>
  );
}

export default App;
