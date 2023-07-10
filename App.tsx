import React from 'react';
import { BrowserRouter as Router, Link,  Routes , Route } from "react-router-dom";
import Menuitem from './components/MultiLevelMenu';

import { Container, Tab,Tabs,Nav, Navbar, Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import MultiLevelMenu from './components/MultiLevelMenu';
import DropDownSubMenu from './components/DropDownSubMenu';

function App() {
  const menuItems = [
    {
      title: 'Home',
      path: '/',
    },
    {
      title: 'Products',
      items: [
        {
          title: 'Electronics',
          path: '/products/electronics',
        },
        {
          title: 'Clothing',
          path: '/products/clothing',
        },
        {
          title: 'Books',
          path: '/products/books',
        },
      ],
    },
    {
      title: 'About',
      path: '/about',
    },
  ];
  return (
    <>
      <Router>
      <MultiLevelMenu menuItems={menuItems} />
      <Routes>
        {/* Define your routes here */}
        <Route  path="/" Component={DropDownSubMenu} />
        <Route  path="/products/electronics" Component={DropDownSubMenu} />
        <Route  path="/products/clothing" Component={DropDownSubMenu} />
        <Route  path="/products/books" Component={DropDownSubMenu} />
        <Route  path="/about" Component={DropDownSubMenu} />
      </Routes>
    </Router>
      </>
  );
}

export default App;
