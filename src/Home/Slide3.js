import Carousel from 'react-bootstrap/Carousel';
import s1 from './Slide Images/clg tieups/1.jpg'
import s2 from './Slide Images/clg tieups/2.jpg'
import s3 from './Slide Images/clg tieups/3.jpg'
import s4 from './Slide Images/clg tieups/4.jpg'
import s5 from './Slide Images/clg tieups/5.png'
// import s6 from './Slide Images/clg tieups/6.jpg'


function Slide3() {
  return (
    <div>
    <Carousel>
      <Carousel.Item data-bs-theme="light" className='custom-carousel'>
      <img
          className="d-block w-100"
          src={s1}
          alt="First slide"
          
        /> 
        </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={s2}
          alt="First slide"
        /> 
        </Carousel.Item>
      <Carousel.Item>
      <img
          className="d-block w-100"
          src={s3}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s4}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s5}
          alt="First slide"
        /> 
        </Carousel.Item>
        {/* <Carousel.Item>
      <img
          className="d-block w-100"
          src={s6}
          alt="First slide"
        /> 
        </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default Slide3;