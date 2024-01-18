import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
// import { useState } from 'react';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
// import { AiOutlineInstagram } from "react-icons/ai";
// import { AiFillInstagram } from "react-icons/ai";
// import { PiFacebookLogoFill } from "react-icons/pi";
// import { PiFacebookLogoLight } from "react-icons/pi";
// import { TbBrandYoutubeFilled } from "react-icons/tb";
// import { TbBrandYoutube } from "react-icons/tb";
// import { PiLinkedinLogoFill } from "react-icons/pi";
// import { PiLinkedinLogoLight } from "react-icons/pi";
import { FaChalkboardTeacher } from "react-icons/fa";
import { GiDeliveryDrone } from "react-icons/gi";
import { GiHighGrass } from "react-icons/gi";
import { BiSolidCctv } from "react-icons/bi";
import { IoMapSharp } from "react-icons/io5";
import { GrInspect } from "react-icons/gr";
import { TbDrone } from "react-icons/tb";
import { MdLocationOn } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { FaBloggerB } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import TermsandCondition from './TermsandCondition';
import PrivacyPolicy from './PrivacyPolicy';
import RefundPolicy from './RefundPolicy';
// import { Link } from 'react-router-dom';

const Footer = () => {
    // const [isHoveredFacebook, setIsHoveredFacebook] = useState(false);
    // const [isHoveredInstagram, setIsHoveredInstagram] = useState(false);
    // const [isHoveredYoutube, setIsHoveredYoutube] = useState(false);
    // const [isHoveredLinkedin, setIsHoveredLinkedin] = useState(false);
  
    // const handleMouseEnterFacebook = () => {
    //   setIsHoveredFacebook(true);
    // };
  
    // const handleMouseLeaveFacebook = () => {
    //   setIsHoveredFacebook(false);
    // };
  
    // const handleMouseEnterInstagram = () => {
    //   setIsHoveredInstagram(true);
    // };
  
    // const handleMouseLeaveInstagram = () => {
    //   setIsHoveredInstagram(false);
    // };

    // const handleMouseEnterYoutube = () => {
    //     setIsHoveredYoutube(true);
    // }

    // const handleMouseLeaveYoutube = () => {
    //     setIsHoveredYoutube(false);
    // }

    // const handleMouseEnterLinkedin = () => {
    //     setIsHoveredLinkedin(true);
    // }

    // const handleMouseLeaveLinkedin = () => {
    //     setIsHoveredLinkedin(false);
    // }

    return (
        <footer className="bg-dark text-light mt-5">
            <Container>
                {/* <Row style={{ marginLeft: '0%' }} className="justify-content-md-center">
                    <Col xs={3} md={1} className='mt-5 mb-5'>
                    <a href="https://www.facebook.com/ycf.puducherry" target="_blank" rel="noopener noreferrer">
                        {isHoveredFacebook ? (
                            <PiFacebookLogoLight size={50} id='facebook' onMouseEnter={handleMouseEnterFacebook} onMouseLeave={handleMouseLeaveFacebook} />
                        ) : (
                            <PiFacebookLogoFill size={50} id='facebook' onMouseEnter={handleMouseEnterFacebook} onMouseLeave={handleMouseLeaveFacebook} />
                        )}
                        </a>
                    </Col>
                    <Col xs={3} md={1} className='mt-5'>
                    <a href="https://www.instagram.com/youcanfly_puducherry/" target="_blank" rel="noopener noreferrer">
                    {isHoveredInstagram ? (
                            <AiOutlineInstagram size={50} id='facebook' onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram} />
                        ) : (
                            <AiFillInstagram size={50} id='facebook' onMouseEnter={handleMouseEnterInstagram} onMouseLeave={handleMouseLeaveInstagram} />
                        )}
                        </a>
                    </Col>
                    <Col xs={3} md={1} className='mt-5'>
                    <a href="https://www.youtube.com/@you_can_fly" target="_blank" rel="noopener noreferrer">
                    {isHoveredYoutube ? (
                            <TbBrandYoutube size={50} id='facebook' onMouseEnter={handleMouseEnterYoutube} onMouseLeave={handleMouseLeaveYoutube} />
                        ) : (
                            <TbBrandYoutubeFilled size={50} id='facebook' onMouseEnter={handleMouseEnterYoutube} onMouseLeave={handleMouseLeaveYoutube} />
                        )}   
                        </a> 
                    </Col>
                    <Col xs={3} md={1} className='mt-5'>
                    <a href="https://www.linkedin.com/in/youcanfly-in-a8213a288/" target="_blank" rel="noopener noreferrer">
                    {isHoveredLinkedin ? (
                            <PiLinkedinLogoLight size={50} id='facebook' onMouseEnter={handleMouseEnterLinkedin} onMouseLeave={handleMouseLeaveLinkedin} />
                        ) : (
                            <PiLinkedinLogoFill size={50} id='facebook' onMouseEnter={handleMouseEnterLinkedin} onMouseLeave={handleMouseLeaveLinkedin} />
                        )}    
                        </a>
                    </Col>
                </Row> */}
                <Row>
                <Col md={2} className='mt-5' id='footeralign1'>
                        <h5>Quick Links</h5>
                        <a href='#aboutus' style={{textDecoration:'none'}}><p className='mt-4' id='quicklinks'><IoMdHome size={25}/> &nbsp;AboutUs</p></a>
                        <a href='/blog' style={{textDecoration:'none'}}><p id='quicklinks'><FaBloggerB size={25}/> &nbsp;Blog</p></a>
                        <a href='https://sasijaya2112.github.io/youcanfly_lms/' style={{textDecoration:'none'}}><p id='quicklinks'><MdComputer size={25}/> &nbsp;LMS Login</p></a>
                    </Col>
                    <Col md={3} className='mt-5' id='footeralign'>
                        <h5>Services</h5>
                        <p className='mt-4' id='services'><FaChalkboardTeacher size={25}/> &nbsp;Training</p>
                        <p id='services'><GiDeliveryDrone size={25}/> &nbsp;Photography</p>
                        <p id='services'><GiHighGrass size={25}/> &nbsp;Agricultural Spraying</p>
                        <p id='services'><BiSolidCctv size={25}/> &nbsp;Surveillance</p>
                        <p id='services'><IoMapSharp size={25}/> &nbsp;Mapping and Surveying</p>
                        <p id='services'><GrInspect size={25}/> &nbsp;Inspection</p>
                        <a href='/dronerepair' style={{textDecoration:'none', color:'white'}}><p id='services'><TbDrone size={25}/> &nbsp;Drone Repair</p></a>
                    </Col>
                    
                    <Col md={3}className='mt-5' id='footeralign'>
                        <h5>Address</h5>
                        <p className='mt-4'>
                            <MdLocationOn size={25}/>
                            &nbsp;No. 1,2,3,4 MRR Towers <br></br>
                            &nbsp; &nbsp; &nbsp; &nbsp;Thendral Nagar, Engineers Colony <br></br>
                            &nbsp; &nbsp; &nbsp; &nbsp;Mudaliarpet, Puducherry - 605004 <br></br>
                            &nbsp; &nbsp; &nbsp; &nbsp;India
                        </p>
                        <p className='mt-4'><FaPhone />  &nbsp;<a href="tel:+917867897000" style={{textDecoration:'none'}} id='quicklinks'>+91 786 789 7000</a></p>
                        <p><MdEmail/> &nbsp;&nbsp;<a href='mailto:info@youcanfly.in' style={{textDecoration:'none'}} id='quicklinks'>info@youcanfly.in</a></p>
                        {/* <p>info@youcanfly.in</p> */}
                    </Col>

                    <Col md={3} className='mt-5'>
                        <h5>Location</h5>
                        <div className="google-map-code mt-3">
                            <iframe title="location" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.815990435756!2d79.8039597751848!3d11.917890688308974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53612226dc7ab9%3A0xd5566b406c8c9954!2sYou%20Can%20Fly!5e0!3m2!1sen!2sin!4v1701865341748!5m2!1sen!2sin" width="100%" height="250" frameborder="0" style={{ border: 0 }} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col className="mt-5" md={4}>
                        <span id='quicklinks'><TermsandCondition/>&nbsp;</span>|<span id='services'>&nbsp;<PrivacyPolicy/></span> |<span id='services'>&nbsp;<RefundPolicy/></span>
                    </Col>
                </Row>
                <Row>
                    <Col className="text-center">
                        <hr/>
                        <p>Copyright&copy; {new Date().getFullYear()} Yourbackers Aeromodelling Private Ltd</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
