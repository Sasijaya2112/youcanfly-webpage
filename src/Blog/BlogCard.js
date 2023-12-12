import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Row, Col } from 'react-bootstrap';
import aerialshot from './aerial-shot.jpg';
import improveshots from './improve-aerial-shots.png';
import bestdrone from './best-drone.png';
import Blog1 from './Blog1';

function BlogCard() {
  return (
    <div>
      <Row className="justify-content-md-center mt-5">
        <h1>Aerial Cinematography</h1>
        <Col md={3} className='mt-5'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={aerialshot} />
      <Card.Body>
        <Card.Title>Aerial shots</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        {/* <Button variant="primary">Veiw Blog</Button> */}
        <Blog1/>
      </Card.Body>
    </Card>
    </Col>
    <Col md={3} className='mt-5'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={improveshots} />
    <Card.Body>
      <Card.Title>Improving aerial shots</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Veiw Blog</Button> */}
      <Blog1/>
    </Card.Body>
  </Card>
  </Col>
  <Col md={3} className='mt-5'>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={bestdrone} />
    <Card.Body>
      <Card.Title>Best drone for aerial shots</Card.Title>
      <Card.Text>
        Some quick example text to build on the card title and make up the
        bulk of the card's content.
      </Card.Text>
      {/* <Button variant="primary">Veiw Blog</Button> */}
      <Blog1/>
    </Card.Body>
  </Card>
  </Col>
  </Row>
  </div>
  );
}

export default BlogCard;