import Navbar from './Home/Navbar';
import './App.css';
import Slide from './Home/Slide';
import AboutUs from './Home/AboutUs';
import Courses from './Home/Courses';
import Video from './Home/Video';
import Services from './Home/Services';
import Footer from './Home/Footer';
import { Row, Col, Container } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <div className='Home'>
        <Navbar/>
        <Video/>
        <AboutUs/>
        <Courses/>
        <Services/>
        <Container>
        <Row>
        <h1 className='mt-5 mb-5'>Our Gallery</h1>
        <Col> <Slide/></Col>
        <Col> <Slide/></Col>
        </Row>
        <Row>
        <h1 className='mt-5 mb-5'>College tieups</h1>
        <Col> <Slide/></Col>
        <Col> <Slide/></Col>
        <Col> <Slide/></Col>
        </Row>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
