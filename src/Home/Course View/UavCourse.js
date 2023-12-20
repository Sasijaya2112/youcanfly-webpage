import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import uav from './uav.png';
import { Image } from 'react-bootstrap';

function UavCourse() {
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
            UAV Engineering
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container mt-3 mb-3'>
            <Image src={uav} className='w-100'></Image><br></br><br></br>
            UAV (Unmanned Aerial Vehicle) engineering involves the design, development, and construction of autonomous or remotely piloted aircraft used for various purposes like surveillance, mapping, delivery, and more. It encompasses creating robust systems for flight control, navigation, sensors, and communication, often leveraging cutting-edge technologies like AI, machine learning, and advanced materials. UAV engineers focus on optimizing aerodynamics, payload capacity, energy efficiency, and reliability while adhering to safety standards and regulatory compliance. The field requires expertise in aeronautical engineering, electronics, software development, and often involves interdisciplinary collaboration to advance UAV capabilities and applications.
          </div>
            <Alert key='warning' variant='warning'>
              Selling out soon! Book your seats now
            </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter #1</Accordion.Header>
              <Accordion.Body>
                Introduction to UAV Engineering
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Chapter #2</Accordion.Header>
              <Accordion.Body>
                Rules and Regulation, DGCA
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>Chapter #3</Accordion.Header>
              <Accordion.Body>
                Design of structure
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter #4</Accordion.Header>
              <Accordion.Body>
                Autopilot and it's functions
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter #5</Accordion.Header>
              <Accordion.Body>
                Integration of UAV with Autopilot
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default UavCourse;