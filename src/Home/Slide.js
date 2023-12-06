import Carousel from 'react-bootstrap/Carousel';
import slide1 from './Slide Images/1.png'
import slide2 from './Slide Images/2.png'
import slide3 from './Slide Images/3.png'

function Slide() {
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
    </Carousel>
    </div>
  );
}

export default Slide;