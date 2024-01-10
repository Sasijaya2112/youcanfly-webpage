import React from 'react';
import Navbar from '../DroneRepair/Navbar';
import SocialMedia from '../Home/SocialMedia';
import Footer from '../Home/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Custom from './Custom';
import Dji from './Dji';
// import Dji from './Dji';

const DroneRepair = () => {
    return (
        <div id='dronerepair'>
            <Navbar/>
            <Container>
            <Row className="justify-content-md-center">
            <h1 className='mt-5'>Drone Service and Repair</h1>
                <Col  md={3} className='mt-5'><Custom/></Col>
                <Col  md={3} className='mt-5'><Dji/></Col> 
            </Row>
            </Container>
            <SocialMedia/>
            <Footer/>
        </div>
    );
}

export default DroneRepair;
