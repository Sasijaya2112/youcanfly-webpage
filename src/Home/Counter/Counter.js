import React from 'react';
import { Row, Col } from 'react-bootstrap';
import CounterClients from './CounterClients';
import CounterProjects from './CounterProjects';
import CounterAerialFilm from './CounterAerialFilm';
import CounterSlide from './CounterSlide';

const Counter = () => {
    return (
        <div className='mt-5 container'>
            <h3>Explore your world without limitations</h3>
            <p>Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa. Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa. Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.</p>
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
