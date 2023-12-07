import React, { useRef, useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap';
import ycf_logo from './ycflogo.png';
import ContactUs from './ContactUs';
import { TbDrone } from "react-icons/tb";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";

function NavScrollExample() {
  const servicesDropdownRef = useRef(null);
  const coursesDropdownRef = useRef(null);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [coursesDropdownOpen, setCoursesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleServicesMouseEnter = () => {
      setServicesDropdownOpen(true);
    };

    const handleServicesMouseLeave = () => {
      setServicesDropdownOpen(false);
    };

    const handleCoursesMouseEnter = () => {
      setCoursesDropdownOpen(true);
    };

    const handleCoursesMouseLeave = () => {
      setCoursesDropdownOpen(false);
    };

    if (servicesDropdownRef.current) {
      servicesDropdownRef.current.addEventListener('mouseenter', handleServicesMouseEnter);
      servicesDropdownRef.current.addEventListener('mouseleave', handleServicesMouseLeave);
    }

    if (coursesDropdownRef.current) {
      coursesDropdownRef.current.addEventListener('mouseenter', handleCoursesMouseEnter);
      coursesDropdownRef.current.addEventListener('mouseleave', handleCoursesMouseLeave);
    }

    return () => {
      if (servicesDropdownRef.current) {
        servicesDropdownRef.current.removeEventListener('mouseenter', handleServicesMouseEnter);
        servicesDropdownRef.current.removeEventListener('mouseleave', handleServicesMouseLeave);
      }
      if (coursesDropdownRef.current) {
        coursesDropdownRef.current.removeEventListener('mouseenter', handleCoursesMouseEnter);
        coursesDropdownRef.current.removeEventListener('mouseleave', handleCoursesMouseLeave);
      }
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className='bg-body-tertiary' sticky="top">
        <Container fluid>
          <div className="mb-0">
            <Image src={ycf_logo} alt="ycflogo" fluid style={{ height:'120px', width:'120px' }}/>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginLeft:'15%' }} navbarScroll>
              <Nav.Link href="#aboutus" className='m-md-3' id='navbutton'><TbDrone size={30} /> About Us</Nav.Link>
              {/* Services NavDropdown */}
              <NavDropdown
                title={<span><AiOutlineSolution size={30} style={{ marginRight: '5px' }} /> Services</span>}
                className='m-md-3'
                id='navbutton'
                show={servicesDropdownOpen}
                onMouseEnter={() => setServicesDropdownOpen(true)}
                onMouseLeave={() => setServicesDropdownOpen(false)}
                ref={servicesDropdownRef}
              >
                
                <NavDropdown.Item href="#services">Aerial Photography</NavDropdown.Item>
                <NavDropdown.Item href="#services">
                Agrid drone spraying
              </NavDropdown.Item>
              <NavDropdown.Item href="#services">
                Surveillance
              </NavDropdown.Item>
              <NavDropdown.Item href="#services">
                Drone Repair
              </NavDropdown.Item>
              </NavDropdown>
              {/* Courses NavDropdown */}
              <NavDropdown
                title={<span><FaBookBookmark size={25} style={{ marginRight: '5px' }} /> Courses</span>}
                className='m-md-3'
                id='navbutton'
                show={coursesDropdownOpen}
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
                ref={coursesDropdownRef}
              >
                <NavDropdown.Item href="#aeromodelling">Aeromodelling</NavDropdown.Item>
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
              <Nav.Link href="#action2" className='m-md-3' id='navbutton'><FaBloggerB size={30} /> Blog</Nav.Link>
              <Nav.Link href="#action2" className='m-md-3' id='navbutton'><MdComputer size={30}/> LMS login</Nav.Link>
              <ContactUs/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
