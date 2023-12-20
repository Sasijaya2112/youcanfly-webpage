import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import aerial from './aerial.png';
import { Image } from 'react-bootstrap';

function AerialCinematography() {
  const [lgShow, setLgShow] = useState(false);

  return (
    <>
      <Button onClick={() => setLgShow(true)}>View Course</Button>

      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Aerial Cinematography
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container mt-3 mb-3'>
            <Image src={aerial} className='w-100' alt='aerial view'></Image><br></br><br></br>
            Aerial cinematography refers to the art and technique of capturing video or film footage from an elevated perspective, typically using drones, helicopters, airplanes, or other aerial platforms. It involves using specialized equipment like cameras mounted on stabilized gimbals to achieve smooth, high-quality shots from the air. Aerial cinematography is widely used in filmmaking, documentaries, commercials, and other visual storytelling mediums to provide unique and breathtaking aerial views that enhance storytelling, evoke emotions, and offer perspectives otherwise impossible to attain from the ground.
          </div>
            <Alert key='warning' variant='warning'>
              Selling out soon! Book your seats now
            </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter #1</Accordion.Header>
              <Accordion.Body>
                Introduction to Drone
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chapter #2</Accordion.Header>
              <Accordion.Body>
                Rules and Regulations of DGCA
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Chapter #3</Accordion.Header>
              <Accordion.Body>
                Scope of Aerial Cinematography
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter #4</Accordion.Header>
              <Accordion.Body>
                Filming Skills 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter #5</Accordion.Header>
              <Accordion.Body>
                Drone safety and maintenance
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AerialCinematography;