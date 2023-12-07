import React from 'react';
import { Container } from 'react-bootstrap';
// import drone from './dronepic1.png';
import logo from './logowhite.jpg'
import GetStarted from './GetStarted';
// import image from './bgimage.png';

const AboutUs = () => {

    return (
        <div id='aboutus'>
            <Container>
                {/* <Row> */}
                    <h1 className='mt-5'>About us</h1>
                    <hr></hr>
                    {/* <Col lg={6} xs={1}>
                    <img className="w-100" src={drone} alt="Drone pic" style={{ marginTop: '0%' }} />
                    </Col> */}
                    {/* <Col> */}
                    <img width='50%' src={logo} alt="logo" />
                    <h1 className='' style={{fontSize:'200%'}} >Drone technology grows rapidly, we will help you <br></br>learn this with ease!</h1>
                    <h4 className='mt-5' style={{ fontFamily: 'serif',fontSize:'150%' }}>We have brilliant minds to bring your imagination into real life.<br></br> YOU CAN FLY offers great service with a team of experts <br></br> by providing drone training to the next generation with dreams.</h4>
                    {/* <Button className='m-5' style={{fontFamily:'cursive'}}>GET STARTED</Button> */}
                    <GetStarted/>
                    {/* </Col> */}
                {/* </Row> */}
                
            </Container>
        </div>
    );
}

export default AboutUs;
