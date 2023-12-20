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
                <h1 className='mt-5'>Welcome to You Can Fly Drone Technology Academy!</h1>
                <hr></hr>
                {/* <h1 className='' style={{ fontSize: '200%' }} ></h1> */}
                <img width='60%' src={logo} alt="logo" />
                <h4 className='mt-3' style={{ fontFamily: 'serif', fontSize: '150%' }}>
                    At You Can Fly, we believe in empowering individuals to soar to new heights through cutting-edge drone technology education. Our academy is a hub of innovation, education, and hands-on experience designed to cultivate a new generation of skilled drone pilots and enthusiasts.
                    <br></br><br></br>
                    <b>Our Mission:</b><br></br>
                    At the core of You Can Fly Drone Technology Academy is our unwavering mission to democratize access to drone education. We strive to break barriers and make drone technology accessible to everyone, from aspiring professionals seeking career opportunities to hobbyists looking to explore the limitless possibilities of unmanned aerial vehicles.
                    <br></br><br></br>
                    <b>Who We Are:</b><br></br>
                    You Can Fly is more than just an academy; we are a community of passionate individuals who share a common fascination for drones and their incredible potential. Our team is composed of seasoned experts, industry professionals, and dedicated educators who are committed to providing the highest quality of education and support.</h4>
                <GetStarted />
            </Container>
        </div>
    );
}

export default AboutUs;
