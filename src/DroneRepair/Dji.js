// import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import image from './dji.jpg'

function Dji() {
  return (
    <Card className='w-100'>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>DJI repair & service</Card.Title>
        <Card.Text>
        Our DJI repair and service department is equipped to address a wide range of issues, from minor glitches to complex technical challenges. We understand the value of your DJI drone and the importance of keeping it in top-notch condition for seamless flights and optimal performance.
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
}

export default Dji;