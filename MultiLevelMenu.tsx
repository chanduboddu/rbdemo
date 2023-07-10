import * as React from 'react';
import { BrowserRouter as Router, Route , Link,NavLink, Routes } from "react-router-dom";
import { Container, Nav,Tabs, Navbar, Tab,Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import './menu.css'
import DropDownSubMenu from './DropDownSubMenu';
import DropDownMenu from './DropDownMenu';
import Notfound from './Notfound';

interface MenuItem {
  title: string;
  path?: string;
  items?: MenuItem[];
}

interface MultiLevelMenuProps {
  menuItems: MenuItem[];
}

const MultiLevelMenu: React.FC<MultiLevelMenuProps> = ({ menuItems }) => {
  const renderMenuItems = (items: MenuItem[]) => {
    return items.map((item, index) => {
      if (item.items) {
        return (
          <NavDropdown key={index} title={item.title} id={`dropdown-${index}`}>
            {renderMenuItems(item.items)}
          </NavDropdown>
        );
      } else if (item.path) {
        return (
          <Nav.Item key={index}>
            <Nav.Link as={NavLink} to={item.path} >{item.title}</Nav.Link>
          </Nav.Item>
        );
      } else {
        return null;
      }
    });
  };

  return <Nav>{renderMenuItems(menuItems)}</Nav>;
};

export default MultiLevelMenu;