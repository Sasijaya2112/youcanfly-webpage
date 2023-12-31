import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Accordion from 'react-bootstrap/Accordion';
import Alert from 'react-bootstrap/Alert';
import aero from './agri.jpg';
import { Image } from 'react-bootstrap';

function AgriculturalDrone() {
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
            Agricultural Drone Operation
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='container mt-3 mb-3'>
            <Image src={aero} className='w-100 animated-image'></Image><br></br><br></br>
            Agricultural drone spraying involves the use of unmanned aerial vehicles (UAVs) equipped with spraying systems to apply fertilizers, pesticides, or other agricultural inputs to crops. These drones are equipped with tanks and nozzles that dispense precise amounts of liquid or granular substances onto fields or crops. This technology offers farmers the advantage of precision application, allowing for targeted and efficient distribution of agrochemicals, reducing waste, and potentially minimizing environmental impact. Agri drone spraying can cover large areas quickly, accessing challenging or remote terrain that might be difficult for traditional spraying equipment to reach.
          </div>
            <Alert key='warning' variant='warning'>
              Selling out soon! Book your seats now
            </Alert>
          <Accordion>
            <Accordion.Item eventKey="0">
              <Accordion.Header>Chapter #1</Accordion.Header>
              <Accordion.Body>
                Introduction to Drones
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
                Standard operation procedure
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>Chapter #4</Accordion.Header>
              <Accordion.Body>
                Risk assessment and troubleshooting
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>Chapter #5</Accordion.Header>
              <Accordion.Body>
                Battery management 
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="5">
              <Accordion.Header>Chapter #6</Accordion.Header>
              <Accordion.Body>
                Crop dusting techniques for various crops
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="6">
              <Accordion.Header>Chapter #7</Accordion.Header>
              <Accordion.Body>
                Log analysis and management
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="7">
              <Accordion.Header>Chapter #8</Accordion.Header>
              <Accordion.Body>
                Simulation and on-field practical session
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AgriculturalDrone;