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
        <Col><Image src={christ} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        <Col><Image src={mvit} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        <Col><Image src={dana} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        </Row>
        <Row className='mt-5 mb-5'>
        <Col><Image src={surya} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        <Col><Image src={donbosco} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        <Col><Image src={smvec} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        </Row>
        <Row className='mt-5 mb-5'>
        <Col><Image src={rgcet} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        <Col><Image src={psg} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        <Col><Image src={kamaraj} style={{width:'50%',cursor:'pointer'}}></Image></Col>
        </Row>
        </div>
    );
}

export default CollegeTieups;
