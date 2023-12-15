import Carousel from 'react-bootstrap/Carousel';
import s1 from './Slide Images/workshop/1.jpg'
import s2 from './Slide Images/workshop/2.jpg'
import s3 from './Slide Images/workshop/3.jpg'
import s4 from './Slide Images/workshop/4.jpg'
import s5 from './Slide Images/workshop/5.jpg'
import s6 from './Slide Images/workshop/6.jpg'
import s7 from './Slide Images/workshop/7.jpg'
import s8 from './Slide Images/workshop/8.jpg'
import s10 from './Slide Images/workshop/10.jpg'
import s11 from './Slide Images/workshop/11.jpg'
import s12 from './Slide Images/workshop/12.jpg'
// import s13 from './Slide Images/workshop/13.jpg'


function Slide4() {
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
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s6}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s7}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s8}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s10}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s11}
          alt="First slide"
        /> 
        </Carousel.Item>
        <Carousel.Item>
      <img
          className="d-block w-100"
          src={s12}
          alt="First slide"
        /> 
        </Carousel.Item>
        {/* <Carousel.Item>
      <img
          className="d-block w-100"
          src={s13}
          alt="First slide"
        /> 
        </Carousel.Item> */}
    </Carousel>
    </div>
  );
}

export default Slide4;