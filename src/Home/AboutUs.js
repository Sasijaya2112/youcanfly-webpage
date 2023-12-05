import React from 'react';
import { Container } from 'react-bootstrap';
import drone from './dronepic1.png';
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
            <img
          className="w-50"
          src={drone}
          alt="Drone pic"
          style={{marginTop:'-10%'}}
        /> 
            <h1 className='' style={{marginTop:'-10%',fontFamily:'cursive'}}>Drone technology grows rapidly,<br></br> we will help you <br></br>learn this with ease!</h1>
            <h4 className='mt-5' style={{fontFamily:'serif'}}>We have brilliant minds to bring your imagination into real life.<br></br> YOU CAN FLY offers great service with a team of experts <br></br> by providing drone training to the next generation with dreams.</h4>
            {/* <Button className='m-5' style={{fontFamily:'cursive'}}>GET STARTED</Button> */}
            <GetStarted/>
            </Container>
        </div>
    );
}

export default AboutUs;
