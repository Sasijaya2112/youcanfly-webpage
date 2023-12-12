import React from 'react';
import Slide from './Slide';
import AboutUs from './AboutUs';
import Courses from './Courses';
import Video from './Video';
import Services from './Services';
import Footer from './Footer';
import { Row, Col, Container } from 'react-bootstrap';
import CollegeTieups from './CollegeTieups';
import Counter from './Counter/Counter';
import MoveToTop from './MoveToTop';
import SocialMedia from './SocialMedia';
import Navbar from './Navbar';

const Home = () => {
    return (
        <div>
            <div className='Home'>
        <Navbar/>
        <Video/>
        <AboutUs/>
        <Courses/>
        <Counter/>
        <Services/>
        <Container>
        <Row>
        <h1 className='mt-5 mb-5'>Our Gallery</h1>
        {/* <Container> */}
        <Col xs={12} md={6} className='mt-2'> <Slide/></Col>
        <Col xs={12} md={6} className='mt-2'> <Slide/></Col>
        {/* </Container> */}
        </Row>
        <CollegeTieups/>
        </Container>
        <MoveToTop/>
        <Footer/>
        <SocialMedia/>
        </div>
        </div>
    );
}

export default Home;
