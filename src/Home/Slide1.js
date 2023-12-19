import Carousel from 'react-bootstrap/Carousel';
import slide1 from './Slide Images/Kamalsir.jpg'
import slide2 from './Slide Images/schoolclass.jpg'
import slide3 from './Slide Images/smvec.jpg'
import slide4 from './Slide Images/agridrone.jpg';
import slide5 from './Slide Images/kamal.PNG';
import slide6 from './Slide Images/petit.jpg';

function Slide1() {
  return (
    <div>
    <Carousel>
      <Carousel.Item data-bs-theme="light" className='custom-carousel'>
      <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
          
        /> 
        </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide2}
          alt="First slide"
        /> 
        </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide3}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide4}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide5}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide6}
          alt="First slide"
        /> 
        </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Slide1;