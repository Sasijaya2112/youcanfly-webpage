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
                    <h1 className='mt-5'>About us</h1>
                    <hr></hr>
                    <h1 className='' style={{fontSize:'200%'}} >Drone technology grows rapidly, we will help you <br></br>learn this with ease!</h1>
                    <img width='60%' src={logo} alt="logo" />
                    <h4 className='mt-3' style={{ fontFamily: 'serif',fontSize:'150%' }}>We have brilliant minds to bring your imagination into real life.<br></br> YOU CAN FLY offers great service with a team of experts <br></br> by providing drone training to the next generation with dreams.</h4>
                    <GetStarted/>
            </Container>
        </div>
    );
}

export default AboutUs;
