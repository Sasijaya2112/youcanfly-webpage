// import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Image } from 'react-bootstrap';
import ycf_logo from './ycflogo.png';
import ContactUs from './ContactUs';

function NavScrollExample() {

  return (
    <div>
    <Navbar expand="lg" className='bg-body-tertiary' sticky="top">
      <Container fluid>
      <div className="mb-0">
            <Image src={ycf_logo} alt="ycflogo" fluid style={{height:'120px',width:'120px'}}/>
            </div>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft:'22%' }}
            navbarScroll
          >
            <Nav.Link href="#aboutus" className='m-md-3' id='navbutton'>About Us</Nav.Link>
            <Nav.Link href="#action2" className='m-md-3' id='navbutton'>Blog</Nav.Link>
            <Nav.Link href="#services" className='m-md-3' id='navbutton'>Services</Nav.Link>
            <NavDropdown title="Courses" className='m-md-3' id='navbutton'>
              <NavDropdown.Item href="#aeromodelling">
                Aeromodelling
              </NavDropdown.Item>
              <NavDropdown.Item href="#uav">
                UAV Engineering
              </NavDropdown.Item>
              <NavDropdown.Item href="#aerial">
                Aerial Cinematography
              </NavDropdown.Item>
              <NavDropdown.Item href="#dronepilot">
                Drone Piloting
              </NavDropdown.Item>
              <NavDropdown.Item href="#agri">
                Agricultural Drone
              </NavDropdown.Item>
              <NavDropdown.Item href="#disaster">
                Disaster Management
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#action3" className='m-md-3' id='navbutton'>LMS</Nav.Link>
            {/* <Button variant="outline-primary" className='m-3'>Contact Us</Button> */}
            <ContactUs/>
            </Nav>
            
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  );
}

export default NavScrollExample;