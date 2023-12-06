import React from 'react';
import { Container } from 'react-bootstrap';
// import drone from './dronepic1.png';
import logo from './ycflogo.png'
import GetStarted from './GetStarted';
// import image from './bgimage.png';

const AboutUs = () => {

    const divStyle = {
        backgroundImage: 'url("src/Home/bgimage.png")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100vh', // Adjust height as needed
        // You can add more styles here
    };

    return (
        <div id='aboutus' style={divStyle}>
            <Container>
                {/* <Row> */}
                    <h1 className='mt-5'>About us</h1>
                    <hr></hr>
                    {/* <Col lg={6} xs={1}>
                    <img className="w-100" src={drone} alt="Drone pic" style={{ marginTop: '0%' }} />
                    </Col> */}
                    {/* <Col> */}
                    <img className="w-50" src={logo} alt="logo" style={{ marginTop: '-10%' }} />
                    <h1 className='' style={{ marginTop: '-12%', fontFamily: 'cursive' }}>Drone technology grows rapidly, we will help you <br></br>learn this with ease!</h1>
                    <h4 className='mt-5' style={{ fontFamily: 'serif' }}>We have brilliant minds to bring your imagination into real life.<br></br> YOU CAN FLY offers great service with a team of experts <br></br> by providing drone training to the next generation with dreams.</h4>
                    {/* <Button className='m-5' style={{fontFamily:'cursive'}}>GET STARTED</Button> */}
                    <GetStarted/>
                    {/* </Col> */}
                {/* </Row> */}
                
            </Container>
        </div>
    );
}

export default AboutUs;
