import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import aero from './disaster.jpg';
import { Image } from 'react-bootstrap';

function DisasterManagement() {
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
            Disaster Management
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container mt-3 mb-3'>
            <Image src={aero} className='w-100 animated-image'></Image><br></br><br></br>
            Drones are pivotal in disaster response, swiftly assessing damage and locating survivors with aerial cameras and sensors. They establish communication networks, deliver crucial supplies to inaccessible areas, and aid in environmental monitoring. Their ability to map affected regions assists in planning effective response strategies, enabling rapid and targeted assistance during crises.
          </div>
            <Alert key='warning' variant='warning'>
              Selling out soon! Book your seats now
            </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter #1</Accordion.Header>
              <Accordion.Body>
                Introduction to drones
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chapter #2</Accordion.Header>
              <Accordion.Body>
                Rules and Regulations by DGCA
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Chapter #3</Accordion.Header>
              <Accordion.Body>
                UAV in disaster management
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter #4</Accordion.Header>
              <Accordion.Body>
                Types of disaster and risks involved
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter #5</Accordion.Header>
              <Accordion.Body>
                Post disaster management by UAV 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Chapter #6</Accordion.Header>
              <Accordion.Body>
                Simulation and on-field flying session
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DisasterManagement;