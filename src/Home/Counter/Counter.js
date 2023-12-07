import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CounterClients from './CounterClients';
import CounterProjects from './CounterProjects';
import CounterAerialFilm from './CounterAerialFilm';

const Counter = () => {
    return (
        <div className='mt-5'>
            <h3>Explore your world without limitations</h3>
            <p></p>
            <Row className='mt-5'>
                <Col><CounterClients/></Col>
                <Col><CounterProjects/></Col>
                <Col><CounterAerialFilm/></Col>
            </Row>
        </div>
    );
}

export default Counter;
