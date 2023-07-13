import React from 'react';
import { BrowserRouter as Router, Link,  Routes , Route } from "react-router-dom";
import MultiLevelMenu from './MenuItems';

import { Container, Tab,Tabs,Nav, Navbar, Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

import DropDownSubMenu from './Header';
import About from '../routes/About';
import Layout from './layout';

function App() {
 
  return (
    <>
     <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<About />} />
          <Route path="about" element={<About />} />
          <Route path="services" element={<About />} />
          <Route path="web-design" element={<About />} />
          <Route path="web-dev" element={<About />} />
          <Route path="frontend" element={<About />} />
          <Route path="node" element={<About />} />
          <Route path="*" element={<p>Not found!</p>} />
        </Route>
      </Routes>
      </>
  );
}

export default App;
