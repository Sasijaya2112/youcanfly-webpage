import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import aero from './aero.png';
import { Image } from 'react-bootstrap';

function AeromodellingCourse() {
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
            Aeromodelling
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container mt-3 mb-3'>
            <Image src={aero} className='w-100 animated-image'></Image><br></br><br></br>
            Aeromodelling is the art and hobby of designing, building, and flying miniature aircraft models. These models can range from simple, hand-launched gliders to intricate, radio-controlled airplanes or helicopters. The practice involves creating scaled-down replicas of real aircraft or entirely original designs, often using materials like balsa wood, foam, plastic, or even high-tech composite materials.
          </div>
            <Alert key='warning' variant='warning'>
              Selling out soon! Book your seats now
            </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter #1</Accordion.Header>
              <Accordion.Body>
                Introduction to Aeromodelling
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chapter #2</Accordion.Header>
              <Accordion.Body>
                Structure of an aircraft
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Chapter #3</Accordion.Header>
              <Accordion.Body>
                Parts of an aircraft
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter #4</Accordion.Header>
              <Accordion.Body>
                Electronics 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter #5</Accordion.Header>
              <Accordion.Body>
                Simulation flying
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AeromodellingCourse;