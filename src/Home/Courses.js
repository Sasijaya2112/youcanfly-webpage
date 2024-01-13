import React from 'react';
import { Card, Col, Row, Container } from 'react-bootstrap';
import image1 from './Courses Images/aeromodelling.png';
import image2 from './Courses Images/uav.png';
import image3 from './Courses Images/Aerial.png';
import image4 from './Courses Images/drone pilot.png';
import image5 from './Courses Images/agri1.png';
import image6 from './Courses Images/advancedronepiloting.png';
import image7 from './Courses Images/disaster.png';
import AeromodellingCourse from './Course View/AeromodellingCourse';
import UavCourse from './Course View/UavCourse';
import AerialCinematography from './Course View/AerialCinematography';
import DronePiloting from './Course View/DronePiloting';
import AgriculturalDrone from './Course View/AgriculturalDrone';
import DisasterManagement from './Course View/DisasterManagement';

const Courses = () => {
    return (
        <div>
            <h1 className='mt-5'>Courses we offer!</h1>
            <Container>
            <hr></hr>
            <Row className='mt-5' style={{marginLeft:'4%'}}>
            <Col className='m-3' id='aeromodelling'>
            <Card style={{ width: '18rem' }}  className='animated-image' >
                <Card.Img variant="top" src={image1} alt='aeromodelling'/>
                <Card.Body>
                    <Card.Title>Aeromodelling</Card.Title>
                    <Card.Text>
                    Aeromodelling is a hobby focused on building and flying model aircraft. Enthusiasts create scaled-down replicas of airplanes, helicopters, or drones. It involves craftsmanship, engineering skills, and provides hands-on experience in aviation principles.
                    </Card.Text>
                    {/* <Button variant="primary">View Course</Button> */}
                    <AeromodellingCourse/>
                </Card.Body>
            </Card>
            </Col>
            <Col className='m-3' id='uav'>
            <Card style={{ width: '18rem' }} className='animated-image' >
                <Card.Img variant="top" src={image2} />
                <Card.Body>
                    <Card.Title>UAV Engineering</Card.Title>
                    <Card.Text>
                    UAV (Unmanned Aerial Vehicle) engineering involves designing and building autonomous or remotely controlled aircraft. Engineers develop systems for navigation, communication, and payload integration to meet specific mission requirements.
                    </Card.Text>
                    <UavCourse/>
                </Card.Body>
            </Card>
            </Col>
            <Col className='m-3' id='aerial'>
            <Card style={{ width: '18rem' }} className='animated-image' >
                <Card.Img variant="top" src={image3} />
                <Card.Body>
                    <Card.Title>Aerial Cinematography</Card.Title>
                    <Card.Text>
                    Art of capturing video and film content from elevated perspectives using aircraft or drones. It enhances visual storytelling by providing unique aerial views and dynamic shots. This technique is widely employed in filmmaking and other documentries.
                   </Card.Text>
                    <AerialCinematography/>
                </Card.Body>
            </Card>
            </Col>
            <Col className='m-3' id='dronepilot'>
            <Card style={{ width: '18rem' }} className='animated-image' >
                <Card.Img variant="top" src={image4} />
                <Card.Body>
                    <Card.Title>Basic Drone <br></br> Piloting</Card.Title>
                    <Card.Text>
                    Drone piloting entails mastering controls for altitude, direction, and orientation using a remote. Pilots must adhere to airspace regulations, and practice safe flying techniques for successful and responsible drone operation. 
                    </Card.Text>
                    <DronePiloting/>
                </Card.Body>
            </Card>
            </Col>
            <Col className='m-3' id='agri'>
            <Card style={{ width: '18rem' }} className='animated-image' >
                <Card.Img variant="top" src={image5} />
                <Card.Body>
                    <Card.Title>Agricultural Drone Operation</Card.Title>
                    <Card.Text>
                    Agricultural drone operations involve deploying unmanned aerial vehicles for tasks such as crop monitoring and spraying. Drones assist in precision agriculture by providing data on crop health, pest detection, and optimizing resource.
                    </Card.Text>
                    <AgriculturalDrone/>
                </Card.Body>
            </Card>
            </Col>
            <Col className='m-3' id='disaster'>
            <Card style={{ width: '18rem' }} className='animated-image' >
                <Card.Img variant="top" src={image6} />
                <Card.Body>
                    <Card.Title>Advanced Drone <br></br> Piloting</Card.Title>
                    <Card.Text>
                    Advanced drone piloting involves mastering complex maneuvers, autonomous features, and advanced camera use while prioritizing safety, regulations, and real-time decision-making in diverse scenarios.
                    </Card.Text>
                    <DisasterManagement/>
                </Card.Body>
            </Card>
            </Col>
            <Col>
            <Card style={{ width: '18rem'}} id='disaster' className='mt-3 animated-image'  >
                <Card.Img variant="top" src={image7} />
                <Card.Body>
                    <Card.Title>Disaster Management</Card.Title>
                    <Card.Text>
                    Drones aid disaster management by providing aerial surveys for damage assessment and delivering essential supplies to inaccessible areas. Their swift deployment enhances emergency response efforts and facilitates timely decision-making in crisis situations.
                    </Card.Text>
                    <DisasterManagement/>
                </Card.Body>
            </Card></Col>
            </Row>
            </Container>
        </div>
    );
}

export default Courses;
