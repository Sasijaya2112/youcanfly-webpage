import React from 'react';
import { Row, Col, Image } from 'react-bootstrap';
import christ from './College logos/CHRIST.png';
import donbosco from './College logos/donbosco.png';
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
        <Col><Image src={christ} id='collegelogo'></Image></Col>
        <Col><Image src={mvit} id='collegelogo'></Image></Col>
        <Col><Image src={dana} id='collegelogo'></Image></Col>
        </Row>
        <Row className='mt-5 mb-5'>
        <Col><Image src={surya} id='collegelogo'></Image></Col>
        <Col><Image src={donbosco} id='collegelogo'></Image></Col>
        <Col><Image src={smvec} id='collegelogo'></Image></Col>
        </Row>
        <Row className='mt-5 mb-5'>
        <Col><Image src={rgcet} id='collegelogo'></Image></Col>
        <Col><Image src={psg} id='collegelogo'></Image></Col>
        <Col><Image src={kamaraj} id='collegelogo'></Image></Col>
        </Row>
        </div>
    );
}

export default CollegeTieups;
