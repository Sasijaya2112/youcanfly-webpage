import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import aerialshot from './aerial-shot.jpg';
import improveshots from './improve-aerial-shots.png';
import bestdrone from './best-drone.png';
import Blog1 from './Blog1';
import Blog2 from './Blog2';
import Blog3 from './Blog3';

function BlogCard() {
  return (
    <div className='container'>
      <Row className="justify-content-md-center mt-5">
        <h1>Aerial Cinematography</h1>
        <Col md={3} className='mt-5'>
    <Card className='w-100'>
      <Card.Img variant="top" src={aerialshot} />
      <Card.Body>
        <Card.Title>Aerial shots</Card.Title>
        <Card.Text>
        Aerial shots refer to photographs or videos taken from an elevated position, typically from an aircraft or drone. These shots offer unique perspectives and angles that are not possible from ground level. They provide a bird's-eye view of landscapes, cities, structures, or events, offering a broader context or a different visual experience.
        </Card.Text>
        {/* <Button variant="primary">Veiw Blog</Button> */}
        <Blog1/>
      </Card.Body>
    </Card>
    </Col>
    <Col md={3} className='mt-5'>
    <Card className='w-100'>
    <Card.Img variant="top" src={improveshots} />
    <Card.Body>
      <Card.Title>Improving aerial shots</Card.Title>
      <Card.Text>
      Improving aerial shots involves a multifaceted approach. Firstly, mastering your equipment is key; understand your drone or aerial setup thoroughly, learning its capabilities and limitations. Composition plays a significant role; experiment with angles, leading lines, and framing to create visually striking images.
      </Card.Text>
      {/* <Button variant="primary">Veiw Blog</Button> */}
      <Blog2/>
    </Card.Body>
  </Card>
  </Col>
  <Col md={3} className='mt-5'>
    <Card className='w-100'>
    <Card.Img variant="top" src={bestdrone} />
    <Card.Body>
      <Card.Title>Best drone for aerial shots</Card.Title>
      <Card.Text>
      Drones have revolutionized aerial cinematography, offering filmmakers unprecedented flexibility and creative possibilities. In the realm of aerial cinematography, drones are small, unmanned aerial vehicles equipped with high-quality cameras and stabilization systems. They're used to capture breathtaking aerial footage for films, documentaries and more.  
      </Card.Text>
      {/* <Button variant="primary">Veiw Blog</Button> */}
      <Blog3/>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  </div>
  );
}

export default BlogCard;