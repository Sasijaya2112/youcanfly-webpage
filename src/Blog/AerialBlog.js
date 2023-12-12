import React from 'react';
import { Container, Image} from 'react-bootstrap';
import Navbar from './Navbar';
import SocialMedia from '../Home/SocialMedia';
import aerial from './aerialcinema.png';
import BlogCard from './BlogCard';

const AerialBlog = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <BlogCard/>
                {/* <h1 className='mt-5' >Aerial Cinematography</h1>
                <Image src={aerial} className='w-100 mt-5'/> */}
            </Container>
            <SocialMedia/>
        </div>
    );
}

export default AerialBlog;
