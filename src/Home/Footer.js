import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhone } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    return (
        <footer className="bg-dark text-light mt-5">
            <Container>
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
