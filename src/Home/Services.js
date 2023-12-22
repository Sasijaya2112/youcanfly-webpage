import { Row, Col, Image } from 'react-bootstrap';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import aerial from './Courses Images/Aerial.png'
import agri from './Courses Images/agri1.png'
import dronerepair from './Courses Images/uav.png'

function JustifiedExample() {
    
    return (
        <div className='container'>
            <h1 className='mt-5' id='services'>Services we provide</h1>
            <h6>(click each tab to reveal)</h6>
            <Tabs
                defaultActiveKey="profile"
                id="justify-tab-example"
                className="mb-3 mt-5"
                justify
            >
                <Tab eventKey="Aerial photography" title="Aerial photography">
                    <Row>
                        <Col md={6}>
                            <Image src={aerial} width='80%' rounded className='mt-5'></Image>
                        </Col>
                        <Col className='mt-5'>
                            <p>Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                                <br></br><br></br>
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                            </p>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Agri drone spraying" title="Agridrone spraying">
                    <Row>
                        <Col md={6}>
                            <Image src={agri} width='80%' rounded className='mt-5'></Image>
                        </Col>
                        <Col className='mt-5'>
                            <p>Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                                <br></br><br></br>
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                            </p>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Surveillance" title="Surveillance">
                    <Row>
                        <Col md={6}>
                            <Image src={dronerepair} width='80%' rounded className='mt-5'></Image>
                        </Col>
                        <Col className='mt-5'>
                            <p>Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                                <br></br><br></br>
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                            </p>
                        </Col>
                    </Row>
                </Tab>
                <Tab eventKey="Drone Repair" title="Drone Repair">
                    <Row>
                        <Col md={6}>
                            <Image src={dronerepair} width='80%' rounded className='mt-5'></Image>
                        </Col>
                        <Col className='mt-5'>
                            <p>Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                                <br></br><br></br>
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.
                                Lorem ipsum dolor sit amet. Et voluptate minus ea voluptatem tempore hic omnis galisum. 33 dolor consequatur in enim nobis vel quod harum aut ipsa ipsam sit quia nisi. Qui assumenda sint aut perferendis libero quo esse ipsa.Et vero saepe et internos Quis aut quod veniam rem suscipit soluta ut labore praesentium ut dolorem quibusdam in fuga provident.
                            </p>
                        </Col>
                    </Row>
                </Tab>
            </Tabs>
        </div>
    );
}

export default JustifiedExample;