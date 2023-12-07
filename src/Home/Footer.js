import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { AiOutlineInstagram } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { PiFacebookLogoFill } from "react-icons/pi";
import { PiFacebookLogoLight } from "react-icons/pi";
import { TbBrandYoutubeFilled } from "react-icons/tb";
import { TbBrandYoutube } from "react-icons/tb";
import { PiLinkedinLogoFill } from "react-icons/pi";
import { PiLinkedinLogoLight } from "react-icons/pi";

const Footer = () => {
    const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
    const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);
    const [isHoveredYoutube, setIsHoveredYoutube] = useState(false);
    const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  
    const handleMouseEnterFacebook = () => {
      setIsHoveredFacebook(true);
    };
  
    const handleMouseLeaveFacebook = () => {
      setIsHoveredFacebook(false);
    };
  
    const handleMouseEnterInstagram = () => {
      setIsHoveredInstagram(true);
    };
  
    const handleMouseLeaveInstagram = () => {
      setIsHoveredInstagram(false);
    };

    const handleMouseEnterYoutube = () => {
        setIsHoveredYoutube(true);
    }

    const handleMouseLeaveYoutube = () => {
        setIsHoveredYoutube(false);
    }

    const handleMouseEnterLinkedin = () => {
        setIsHoveredLinkedin(true);
    }

    const handleMouseLeaveLinkedin = () => {
        setIsHoveredLinkedin(false);
    }

    return (
        <footer className="bg-dark text-light mt-5">
            <Container>
                <Row style={{ marginLeft: '0%' }} className="justify-content-md-center">
                    <Col xs={3} md={1} className='mt-5 mb-5'>
                    <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        {isHoveredFacebook ? (
                            <PiFacebookLogoLight size={50} id='facebook' onMouseEnter={handleMouseEnterFacebook} onMouseLeave={handleMouseLeaveFacebook} />
                        ) : (
                            <PiFacebookLogoFill size={50} id='facebook' onMouseEnter={handleMouseEnterFacebook} onMouseLeave={handleMouseLeaveFacebook} />
                        )}
                        </a>
                    </Col>
                    <Col xs={3} md={1} className='mt-5'>
                    <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    {isHoveredInstagram ? (
                            <AiOutlineInstagram size={50} id='facebook' onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram} />
                        ) : (
                            <AiFillInstagram size={50} id='facebook' onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram} />
                        )}
                        </a>
                    </Col>
                    <Col xs={3} md={1} className='mt-5'>
                    <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
                    {isHoveredYoutube ? (
                            <TbBrandYoutube size={50} id='facebook' onMouseEnter={handleMouseEnterYoutube} onMouseLeave={handleMouseLeaveYoutube} />
                        ) : (
                            <TbBrandYoutubeFilled size={50} id='facebook' onMouseEnter={handleMouseEnterYoutube} onMouseLeave={handleMouseLeaveYoutube} />
                        )}   
                        </a> 
                    </Col>
                    <Col xs={3} md={1} className='mt-5'>
                    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    {isHoveredLinkedin ? (
                            <PiLinkedinLogoLight size={50} id='facebook' onMouseEnter={handleMouseEnterLinkedin} onMouseLeave={handleMouseLeaveLinkedin} />
                        ) : (
                            <PiLinkedinLogoFill size={50} id='facebook' onMouseEnter={handleMouseEnterLinkedin} onMouseLeave={handleMouseLeaveLinkedin} />
                        )}    
                        </a>
                    </Col>
                </Row>
                <Row>
                    <Col md={3} className='mt-5'>
                        <h5>Contact</h5>
                        <p className='mt-4'><FaPhone />  &nbsp;+91 786 789 7000</p>
                        <p><MdEmail /> &nbsp;&nbsp;info@youcanfly.in</p>
                    </Col>
                    <Col md={3} className='mt-5'>
                        <h5>Address</h5>
                        <p className='mt-4'>
                            No. 1,2,3,4 MRR Towers <br></br>
                            Thendral Nagar, Engineers Colony <br></br>
                            Mudaliarpet, Puducherry - 605004 <br></br>
                            India
                        </p>
                        {/* <p>info@youcanfly.in</p> */}
                    </Col>

                    <Col md={6} className='mt-3'>
                        <h5>Location</h5>
                        <div className="google-map-code mt-3">
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.815990435756!2d79.8039597751848!3d11.917890688308974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53612226dc7ab9%3A0xd5566b406c8c9954!2sYou%20Can%20Fly!5e0!3m2!1sen!2sin!4v1701865341748!5m2!1sen!2sin" width="70%" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col className="text-center mt-4">
                        <p>Copyright&copy; {new Date().getFullYear()} Yourbackers Aeromodelling Private Ltd</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
