import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import aero from './dronepiloting.jpg';
import { Image } from 'react-bootstrap';

function DronePiloting() {
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
            Basic Drone Piloting
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container mt-3 mb-3'>
            <Image src={aero} className='w-100 animated-image'></Image><br></br><br></br>
            Drone piloting involves the operation and control of unmanned aerial vehicles (UAVs), commonly known as drones. It includes flying these aircraft using remote controls or in some cases, autonomous flight systems. Drone pilots are responsible for navigating the drone, controlling its movements, managing its flight path, and operating any onboard equipment such as cameras or sensors. Piloting a drone requires knowledge of aviation regulations, understanding of airspace rules, proficiency in handling the remote controller, and often specialized training for specific types of drones or missions. Drone pilots may work in various industries, including photography, videography, surveying, agriculture, and more, where aerial perspectives are advantageous or necessary.
          </div>
            <Alert key='warning' variant='warning'>
              Selling out soon! Book your seats now
            </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter #1</Accordion.Header>
              <Accordion.Body>
               Introduction to UAV
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
                Components and assembly of drones
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter #4</Accordion.Header>
              <Accordion.Body>
                Simulation training
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter #5</Accordion.Header>
              <Accordion.Body>
                On-field piloting session
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default DronePiloting;