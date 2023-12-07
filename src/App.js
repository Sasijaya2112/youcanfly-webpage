import Navbar from './Home/Navbar';
import './App.css';
import Slide from './Home/Slide';
import AboutUs from './Home/AboutUs';
import Courses from './Home/Courses';
import Video from './Home/Video';
import Services from './Home/Services';
import Footer from './Home/Footer';
import { Row, Col, Container } from 'react-bootstrap';
import CollegeTieups from './Home/CollegeTieups';
import Counter from './Home/Counter/Counter';
// import CounterClients from './Home/Counter/CounterClients';
// import CounterAerialFilm from './Home/Counter/CounterAerialFilm';
// import CounterProjects from './Home/Counter/CounterProjects';


function App() {
  return (
    <div className="App">
      <div className='Home'>
        <Navbar/>
        <Video/>
        <AboutUs/>
        <Courses/>
        <Counter/>
        <Services/>
        <Container>
        <Row>
        <h1 className='mt-5 mb-5'>Our Gallery</h1>
        {/* <Container> */}
        <Col xs={12} md={6} className='mt-2'> <Slide/></Col>
        <Col xs={12} md={6} className='mt-2'> <Slide/></Col>
        {/* </Container> */}
        </Row>
        <CollegeTieups/>
        </Container>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
