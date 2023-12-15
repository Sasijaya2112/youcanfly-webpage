import Carousel from 'react-bootstrap/Carousel';
import slide1 from './Slide Images/agri.jpg'
import slide2 from './Slide Images/church.jpg'
import slide3 from './Slide Images/harbour.jpg'

function Slide2() {
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

export default Slide2;