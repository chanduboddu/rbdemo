import * as React from 'react';
import { BrowserRouter as Router, Route , Link, Routes } from "react-router-dom";
import { Container, Nav,Tabs, Navbar, Tab,Row, Accordion, Card,Col, Dropdown,NavDropdown, Button } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';
import './menu.css'
import './menu.css'
import DropDownSubMenu from './DropDownSubMenu';
import DropDownMenu from './DropDownMenu';
import Notfound from './Notfound';


interface MenuItem {
  title: string;
  href?: string;
  submenu?: MenuItem[];
}

const MultiLevelMenu = () => {
  const menuItems = [
    {
      id: 1,
      title: 'Home',
      path: '/'
    },
    {
      id: 2,
      title: 'Products',
      path: '/products',
      subItems: [
        {
          id: 21,
          title: 'Electronics',
          path: '/products/electronics'
        },
        {
          id: 22,
          title: 'Clothing',
          path: '/products/clothing'
        }
      ]
    },
    {
      id: 3,
      title: 'Contact',
      path: '/contact'
    }
  ];

  const renderMenuItems = (items:any) => {
    return items.map((item:any) => {
      if (item.subItems) {
        return (
          <NavDropdown title={item.title} key={item.id}>
            {renderMenuItems(item.subItems)}
          </NavDropdown>
         
        );
      } else {
        return (
          <Nav.Item key={item.id}>
             <Nav.Link as={Link}  to={item.path}>{item.title}</Nav.Link>
          </Nav.Item>
        );
      }
    });
  };

  return (
    <>
    <Navbar bg="light" >
    <Container>
      <Navbar.Brand href="#home">Navbar with text</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Navbar.Text>
          Signed in as: <a href="#login">Mark Otto</a>
        </Navbar.Text>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    <Router>

    <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          {renderMenuItems(menuItems)}
          </Nav>
        </Container>
      </Navbar>
    <Routes>
      <Route path="/"  Component={DropDownSubMenu} />
      <Route path="/products"Component={DropDownSubMenu} />
      <Route path="/products/electronics" Component={DropDownSubMenu} />
      <Route path="/products/clothing"Component={DropDownSubMenu} />
      </Routes>
    </Router>
    </>
  );
};

export default MultiLevelMenu;