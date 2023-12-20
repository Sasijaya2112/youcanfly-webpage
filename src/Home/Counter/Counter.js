import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CounterClients from './CounterClients';
import CounterProjects from './CounterProjects';
import CounterAerialFilm from './CounterAerialFilm';
import CounterSlide from './CounterSlide';

const Counter = () => {
    return (
        <div className='mt-5 container'>
            <h3>Explore your world without limitations</h3><br></br>
            <p>Embark on a journey of limitless exploration with Drone Technology. Break free from conventional boundaries and elevate your perspective to new heights. Explore uncharted territories, capture breathtaking moments, and redefine what's possible. Whether you're a budding enthusiast or a seasoned professional, the world of drones awaits your creativity. Unleash the potential of limitless horizons, and discover a realm where the sky is no longer the limit—it's an open canvas for your imagination to soar.</p>
            <Row className='mt-5'>
                <Col><CounterClients/></Col>
                <Col><CounterProjects/></Col>
                <Col><CounterAerialFilm/></Col>
            </Row>
            <CounterSlide/>
        </div>
    );
}

export default Counter;
