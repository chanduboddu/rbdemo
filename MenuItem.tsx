import * as React from 'react';
import { BrowserRouter as Router, Route , Link, Routes } from "react-router-dom";
import { Container, Nav, Navbar, Tab,Row, Col, Dropdown,NavDropdown } from 'react-bootstrap';
import './menu.css'
import DropDownSubMenu from './DropDownSubMenu';
import DropDownMenu from './DropDownMenu';
import Notfound from './Notfound';
interface IMenuitemProps {
}

const Menuitem: React.FunctionComponent<IMenuitemProps> = (props) => {
 
  return(<>
    <Router>
  <Navbar className="bg-body-tertiary">
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
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row>
          <Col> 
              <Nav variant="tabs" id="justify-tab-example"  className="main-menu" justify defaultActiveKey="/home">
                <Nav.Item>
                  <Nav.Link  as={Link} to="/MyPreference" eventKey="first">My Preference</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link as={Link} to="/MonthlyInitialization" eventKey="second"> Monthly Initialization</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="third"> Control Total Workyears</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fouth"> Monthly Processing</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="fifth">Reports</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="sixth"> Yearly Initialization</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="seven">Cost Analysis</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="eight">Maintenance</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                  <Nav.Link eventKey="nine">Administration</Nav.Link>
              </Nav.Item>
              </Nav>
          </Col>
        </Row>
        <Row>
          <Col>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <div className='submenu'>
                <Nav variant="tabs">
                <Nav.Item>
                <Nav.Link as={Link} to="/MyPreference/option1" eventKey="infirst">option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/MyPreference/option2" eventKey="insecond">Option 2</Nav.Link>
                </Nav.Item>
                </Nav>
              </div>
            </Tab.Pane>
            <Tab.Pane eventKey="second"> 
              <div className='submenu'>
                <Nav variant="tabs">
                <Nav.Item>
                <Nav.Link as={Link} to="/MonthlyInitialization/option1" eventKey="insecondfirst">option 1</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                <Nav.Link as={Link} to="/MonthlyInitialization/option2" eventKey="insecond">Option 2</Nav.Link>
                </Nav.Item>
                </Nav>
              </div>
            </Tab.Pane>
          </Tab.Content>
          </Col>
      </Row>
    </Tab.Container>
    <Routes>
        <Route path="/MyPreference"  />
        <Route path="/MyPreference/option1" Component={DropDownSubMenu} />
        <Route path="/MyPreference/option2" Component={DropDownSubMenu} />
        
    </Routes>
    <Routes>
        <Route path="/MonthlyInitialization" Component={DropDownMenu} />
        <Route path="/MonthlyInitialization/option1" Component={DropDownMenu} />
        <Route path="/MonthlyInitialization/option2" Component={DropDownMenu} />
    </Routes>
   
    </Router>
  </>) ;
};

export default Menuitem;
