import React, { useRef, useState, useEffect } from 'react';
import { Nav, Navbar, NavDropdown, Container, Image } from 'react-bootstrap';
import ycf_logo from './ycflogo.png';
import ContactUs from './ContactUs';
import { TbDrone } from "react-icons/tb";
import { FaBloggerB } from "react-icons/fa";
import { AiOutlineSolution } from "react-icons/ai";
import { FaBookBookmark } from "react-icons/fa6";
import { MdComputer } from "react-icons/md";
import { Link } from 'react-router-dom';
import { IoIosPeople } from "react-icons/io";
import { GiAutoRepair } from "react-icons/gi";

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

    const servicesDrop = servicesDropdownRef.current;
    const coursesDrop = coursesDropdownRef.current;

    if (servicesDrop) {
      servicesDrop.addEventListener('mouseenter', handleServicesMouseEnter);
      servicesDrop.addEventListener('mouseleave', handleServicesMouseLeave);
    }

    if (coursesDrop) {
      coursesDrop.addEventListener('mouseenter', handleCoursesMouseEnter);
      coursesDrop.addEventListener('mouseleave', handleCoursesMouseLeave);
    }

    return () => {
      if (servicesDrop) {
        servicesDrop.removeEventListener('mouseenter', handleServicesMouseEnter);
        servicesDrop.removeEventListener('mouseleave', handleServicesMouseLeave);
      }
      if (coursesDrop) {
        coursesDrop.removeEventListener('mouseenter', handleCoursesMouseEnter);
        coursesDrop.removeEventListener('mouseleave', handleCoursesMouseLeave);
      }
    };
  }, []);

  return (
    <div>
      <Navbar expand="lg" className='bg-body-tertiary' sticky="top">
        <Container fluid>
          <div className="mb-0">
          <Link to='/youcanfly-webpage/home'>
            <Image src={ycf_logo} alt="ycflogo" fluid style={{ height:'120px', width:'120px' }}/>
            </Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="me-auto my-2 my-lg-0" style={{ maxHeight: '100px', marginLeft:'2%' }} navbarScroll>
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
                {/* <NavDropdown.Item href="#services">Training</NavDropdown.Item> */}
                <NavDropdown.Item className="nav-dropdown-item" href="#services">Aerial Photography</NavDropdown.Item>
                <NavDropdown.Item className="nav-dropdown-item" href="#services">
                Agricultural spraying
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#services">
                Surveillance
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#services">
                Drone Repair & Maintenance
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item className="nav-dropdown-item" href="#services">
                Mapping and Surveying 
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#services">
                Inspection
              </NavDropdown.Item>             
              </NavDropdown>
              {/* Courses NavDropdown */}
              <NavDropdown
                title={<span><FaBookBookmark size={30} style={{ marginRight: '5px' }} />Training Courses</span>}
                className='m-md-3'
                id='navbutton'
                show={coursesDropdownOpen}
                onMouseEnter={() => setCoursesDropdownOpen(true)}
                onMouseLeave={() => setCoursesDropdownOpen(false)}
                ref={coursesDropdownRef}
              >
                <NavDropdown.Item className="nav-dropdown-item" href="#aeromodelling">Aeromodelling</NavDropdown.Item>
                <NavDropdown.Item className="nav-dropdown-item" href="#uav">
                UAV Engineering
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#aerial">
                Aerial Cinematography
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#dronepilot">
                Drone Piloting
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#agri">
                Agricultural Drone
              </NavDropdown.Item>
              <NavDropdown.Item className="nav-dropdown-item" href="#disaster">
                Disaster Management
              </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href='#team' className='m-md-3' id='navbutton'><IoIosPeople size={30} /> Our Team</Nav.Link>
              <Nav.Link href='/youcanfly-webpage/dronerepair' className='m-md-3' id='navbutton'><GiAutoRepair size={30} /> Drone Repair</Nav.Link>
              {/* <Link to='/youcanfly-webpage/blog'> */}
              <Nav.Link href='/youcanfly-webpage/blog' className='m-md-3' id='navbutton'><FaBloggerB size={30} /> Blog</Nav.Link>
              {/* </Link> */}
              <Nav.Link href="https://sasijaya2112.github.io/youcanfly_lms/" target='blank' className='m-md-3' id='navbutton'><MdComputer size={30}/> LMS login</Nav.Link>
              <ContactUs/>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavScrollExample;
