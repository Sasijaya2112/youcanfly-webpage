import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import christ from './College logos/CHRIST.png';
import acet from './College logos/acet.png';
import dana from './College logos/DANA.png';
// import donbosco from './College logos/donbosco.png';
import mvit from './College logos/MVIT.jpg';
import smvec from './College logos/smvec.jpg';
import surya from './College logos/surya.jpg';
import rgcet from './College logos/rgcet.png';
import psg from './College logos/psg.jpg';
import kamaraj from './College logos/kamaraj.png';

const CollegeTieups = () => {
    return (
        <div>
        <h1 className='mt-5 mb-5'>College tie-ups & Engagement</h1>
        <Row>
        <Col><a href='https://christcet.edu.in/' target="_blank" rel="noopener noreferrer"><Image src={christ} style={{width:'50%',cursor:'pointer'}}></Image></a> </Col>
        <Col><a href='https://www.achariya.in/school%20&%20college.html' target="_blank" rel="noopener noreferrer"><Image src={acet} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        <Col><a href='https://diet.ac.in/' target="_blank" rel="noopener noreferrer"><Image src={dana} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        </Row>
        <Row className='mt-5 mb-5'>
        <Col><a href='http://surya.ac.in/' target="_blank" rel="noopener noreferrer"><Image src={surya} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        <Col><a href='https://mvit.edu.in/' target="_blank" rel="noopener noreferrer"><Image src={mvit} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        <Col><a href='https://smvec.ac.in/' target="_blank" rel="noopener noreferrer"><Image src={smvec} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        </Row>
        <Row className='mt-5 mb-5'>
        <Col><a href='http://www.rgcet.edu.in/' target="_blank" rel="noopener noreferrer"><Image src={rgcet} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        <Col><a href='https://www.psgtech.edu/' target="_blank" rel="noopener noreferrer"><Image src={psg} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        <Col><a href='http://www.kamarajengg.edu.in/' target="_blank" rel="noopener noreferrer"><Image src={kamaraj} style={{width:'50%',cursor:'pointer'}}></Image></a></Col>
        </Row>
        </div>
    );
}

export default CollegeTieups;
