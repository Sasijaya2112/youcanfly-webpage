import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import sample from './sample.png'
import coo from './Gopi.jpg'
import ceo from './ceo.jpg'

function Team() {
  return (
    <Container id='team'>
        <h1 className='mt-5'>Our Team</h1>
        <hr/>
      <Row className='mt-5 justify-content-center'>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={ceo} style={{width:'200px'}} roundedCircle />
          <h2 className='mt-3'>CEO & Founder</h2>
          <h3>Mr.Lakshmi Narayanan</h3>
          <h6>(Chief Executing Officer)</h6>
        </Col>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={coo} style={{width:'200px'}} roundedCircle />
          <h2 className='mt-3'>COO</h2>
          <h3>Mr. Gopi Kupparao</h3>
          <h6>(Chief Operating Officer)</h6>
        </Col>
        </Row>
        <Row className='mt-5 justify-content-center'>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} roundedCircle />
        </Col>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} roundedCircle />
        </Col>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} roundedCircle />
        </Col>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} roundedCircle />
        </Col>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} roundedCircle />
        </Col>
        <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} roundedCircle />
        </Col>
      </Row>
      <hr/>
    </Container>
  );
}

export default Team;