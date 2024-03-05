import React from "react";
import {Form, FormControl, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Row, Col } from 'react-bootstrap';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';


function NavbarComp(){
  return(
<nav class="navbar navbar-underline navbar-expand-lg navbar-light bg-white">
  <div class="container">
    <a class="navbar-brand" href="#">
      <img src='assets/images/hayimg.png' width="80" height="60" className="d-inline-block align-top" alt="Logo" />
    </a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav me-auto">
        <li class="nav-item">
          <a class="nav-link active fs-lg" aria-current="page" href="#tab1"style={{fontSize:'15px'}}>HOME</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg" href="#tab2" style={{fontSize:'15px'}}>NEWARRIVALS</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg" href="#tab3" style={{fontSize:'15px'}}>TOPWEAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg" href="#tab3" style={{fontSize:'15px'}}>BOTTOMWEAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg" href="#tab3" style={{fontSize:'15px'}}>LOUNGEWEAR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg" href="#tab3" style={{fontSize:'15px'}}>TRACKORDER</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg" href="#tab3" style={{fontSize:'15px'}}>STORELOCATOR</a>
        </li>
        <li class="nav-item">
          <a class="nav-link fs-lg text-danger" href="#tab3" style={{fontSize:'15px'}}>SALE</a>
        </li>
      </ul>

      <i className="bi bi-search " style={{fontSize:'20px', marginLeft: '25px' }}></i>
      <i className="bi bi-person " style={{ fontSize:'20px', marginLeft: '25px' }}></i>
      <i className="bi bi-cart " style={{ fontSize:'20px', marginLeft: '25px' }}></i>
    </div>
  </div>
</nav>
  );
}
export default NavbarComp;
