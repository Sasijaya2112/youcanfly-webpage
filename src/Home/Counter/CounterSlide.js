import Carousel from 'react-bootstrap/Carousel';
import slide1 from './CounterSlide Images/1.png';
import slide2 from './CounterSlide Images/2.png';
import slide3 from './CounterSlide Images/3.png';
// import ExampleCarouselImage from 'components/ExampleCarouselImage';

function CounterSlide() {
  return (
    <Carousel fade className='mt-5' id='counterslide'>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide1}
          alt="First slide"
          
        /> 
        {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide2}
          alt="First slide"
          
        /> 
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
      </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={slide3}
          alt="First slide"
          
        /> 
        {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
      </Carousel.Item>
          </Carousel>
  );
}

export default CounterSlide;