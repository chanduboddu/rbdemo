import React from 'react';
import { BrowserRouter as Router, Link,  Routes, Route } from "react-router-dom";
import Menuitem from './components/MenuItem';

import { Container, Tab,Tabs,Nav, Navbar, Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

function App() {
  return (
    <>
        <Container fluid>
      
      
          <Menuitem/>
      
   
         
      </Container>
      </>
  );
}

export default App;
