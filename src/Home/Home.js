import React from 'react';
import Slide1 from './Slide1';
import AboutUs from './AboutUs';
import Courses from './Courses';
import Video from './Video';
// import Services from './Services';
import Footer from './Footer';
import { Row, Col, Container } from 'react-bootstrap';
import CollegeTieups from './CollegeTieups';
import Counter from './Counter/Counter';
import MoveToTop from './MoveToTop';
import SocialMedia from './SocialMedia';
import Navbar from './Navbar';
import Slide2 from './Slide2';
import Slide3 from './Slide3';
import Slide4 from './Slide4';
// import HorizontalSlider from './HorizontalSlider';
import WhatsappChat from './WhatsappChat';
import Team from './Team/Team';
import logo from './logowhite.jpg'

const Home = () => {

    return (
        <div>
            <div className='Home'>
        <Navbar/>
        <Container>
        <Row>
            <Col xs={12} md={5} style={{marginTop:'10%'}}>
            <img width='80%' src={logo} alt="logo" /> 
            </Col>
            <Col className='mt-5'>
            <Video/>
            <h4 className='mt-3'>Elevate your career and soar to new heights with us – Join our innovative drone company and be part of the future of aerial technology!</h4>
            </Col>
        </Row>
        </Container>
        {/* <Video/> */}
        <AboutUs/>
        <Courses/>
        <Counter/>
        {/* <Services/> */}
        <Team/>
        <Container>
        <Row>
        <h1 className='mt-5 mb-5'>Our Gallery</h1>
        <Col xs={12} md={6} className='mt-2'> <Slide1/></Col>
        <Col xs={12} md={6} className='mt-2'> <Slide2/></Col>
        </Row>
        <Row className='mt-5'>
        <h1 className='mt-5 mb-5'>College Tie-ups</h1>
            <Slide3/>
        </Row>
        <Row>
        {/* <h1 className='mt-5 mb-5'>In-house Workshops</h1> */}
        {/* <HorizontalSlider/> */}
        </Row>
        <Row>
        <h1 className='mt-5 mb-5'>Workshops and Seminars</h1>
            <Slide4/>
        </Row>
        <CollegeTieups/>
        </Container>
        <MoveToTop/>
        <Footer/>
        <SocialMedia/>
        <WhatsappChat/>
        </div>
        </div>
    );
}

export default Home;
