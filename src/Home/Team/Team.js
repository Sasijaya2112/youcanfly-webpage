import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
// import sample from './sample.png'
import coo from './Gopi.jpg'
import ceo from './ceo.jpg'
import saras from './saras.jpg'
import hanurag from './hanurag.jpg'
import muni from './muni.jpg'
import sasi from './sasi.jpg'
import sethu from './sethu.jpeg'

function Team() {
  return (
    <Container id='team'>
        <h1 className='mt-5'>Our Team</h1>
        <hr/>
      <Row className='mt-5 justify-content-center'>
        <Col xs={12} md={4} className='mt-5'>
          <a href='https://www.linkedin.com/in/narayenyoucanfly/' target='blanl'><Image src={ceo} style={{width:'200px', height:'200px'}} className='team-image' roundedCircle /></a>
          <h2 className='mt-3'>CEO & Founder</h2>
          <h3>Mr.Lakshmi Narayanan</h3>
          <h6>(Chief Executing Officer)</h6>
        </Col>
        <Col xs={12} md={4} className='mt-5'>
        <a href='https://www.linkedin.com/in/gopi-kupparao-89350212/' target='blanl'><Image src={coo} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle /></a>
          <h2 className='mt-3'>COO</h2>
          <h3>Mr. Gopi Kupparao</h3>
          <h6>(Chief Operating Officer)</h6>
        </Col>
        </Row>
        <Row className='justify-content-center'>
        <Col xs={12} md={4} className='mt-5'>
        <a href='https://www.linkedin.com/in/saraswathe-baskaran-a10106192/' target='blanl'><Image src={saras} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle /></a>
          <h3 className='mt-3'>Ms. Saraswathe</h3>
          <h6>(Assistant Manager - Outreach)</h6>
        </Col>
        <Col xs={12} md={4} className='mt-5'>
        <a href='https://www.linkedin.com/in/hanurag18/' target='blanl'><Image src={hanurag} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle /></a>
          <h3 className='mt-3'>Mr. Hanurag</h3>
          <h6>(Senior UAV Engineer)</h6>
        </Col>
        <Col xs={12} md={4} className='mt-5'>
        <a href='https://www.linkedin.com/in/muneeswaran-purushothaman-95a4151a0/' target='blanl'><Image src={muni} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle /></a>
          <h3 className='mt-3'>Mr. Muneeshwaran</h3>
          <h6>(Senior UAV Engineer)</h6>
        </Col>
        <Col xs={12} md={4} className='mt-5'>
        <a href='https://www.linkedin.com/in/sasidharan-jayabalan-273b90192/' target='blanl'><Image src={sasi} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle /></a>
          <h3 className='mt-3'>Mr. Sasidharan</h3>
          <h6>(Junior UAV Engineer)</h6>
        </Col>
        <Col xs={12} md={4} className='mt-5'>
        <a href='https://www.linkedin.com/in/sethuram-b-2962a2229/' target='blanl'><Image src={sethu} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle /></a>
          <h3 className='mt-3'>Mr. Sethuraman</h3>
          <h6>(Drone Pilot)</h6>
        </Col>
        {/* <Col xs={12} md={4} className='mt-5'>
          <Image src={sample} style={{width:'200px',height:'200px'}} className='team-image' roundedCircle />
        </Col> */}
      </Row>
      <hr/>
    </Container>
  );
}

export default Team;