import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import blog1image from './droneaerial.png';
import { Container, Image } from 'react-bootstrap';
import djiair from './bestdrones/djiair2s.jpg';
import djimavic from './bestdrones/djimavic3pro.png';
import autel from './bestdrones/autelevo2pro.png';
import skydio from './bestdrones/skydio2.png';
import phantom from './bestdrones/djiphantom4pro.png';

function Blog3() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    View Blog
                    {/* {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>What are the best drones for aerial cinematography?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={blog1image} className='w-100'></Image>
                    <Container>
                        <div style={{ fontSize: '130%' }}>
                            <br/>
                            <b>Best drones for aerial cinematography</b><br/><hr/>
                            The "best" drone for aerial shots can vary based on individual preferences, needs, and budget. However, several drones stand out for their excellent camera capabilities and overall performance:
                            <br/><br/>
                            <b>DJI Air 2S:</b><br/> Known for its compact size and exceptional camera quality, it captures stunning 20MP photos and 5.4K video. It offers intelligent features and obstacle sensors for safe flying.
                            <Image src={djiair} className='w-100'></Image>
                            <br/><br/>
                            <b>DJI Mavic 3 Pro:</b><br/> This drone boasts a powerful camera with a large sensor, allowing for impressive 20MP photos and 5.1K video. It offers exceptional image quality and features advanced obstacle avoidance.
                            <Image src={djimavic} className='w-100'></Image>
                            <br/><br/>
                            <b>Autel Robotics Evo II Pro:</b><br/> With a 6K camera, this drone delivers high-resolution imagery and offers a 1-inch sensor for excellent low-light performance. It's known for its portability and flight stability.
                            <Image src={autel} className='w-100'></Image>
                            <br/><br/>
                            <b>Skydio 2:</b><br/> Renowned for its autonomous flying capabilities and obstacle avoidance, it captures 12MP photos and 4K video. It's excellent for dynamic and complex shots.
                            <br/><Image src={skydio} className='w-100'></Image>
                            <br/><br/>
                            <b>DJI Phantom 4 Pro V2.0:</b><br/> Although an older model, it still holds up with a powerful camera capable of shooting 20MP stills and 4K video. It's reliable and offers excellent image quality.
                            <br/><Image src={phantom} className='w-100'></Image>
                            <br/><br/>
                            When choosing a drone for aerial shots, consider factors like camera quality, flight time, stability, portability, obstacle avoidance, and additional features that might suit your specific shooting needs. Always check local regulations before flying and consider factors like budget and intended use before making a purchase.
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Blog3;