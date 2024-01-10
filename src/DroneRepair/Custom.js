import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './custom.jpg'

function Custom() {
  return (
    <Card className='w-100'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>Custom drone service</Card.Title>
        <Card.Text>
        We provide custom drone service by professionals or businesses to meet the unique needs, preferences, or specifications of drone users. This can encompass a variety of services aimed at enhancing, modifying, repairing, or optimizing drones according to individual requirements.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Custom;