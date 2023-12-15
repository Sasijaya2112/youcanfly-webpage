import React from 'react';
import { Container} from 'react-bootstrap';
import Navbar from './Navbar';
import SocialMedia from '../Home/SocialMedia';
import BlogCard from './BlogCard';
import Footer from '../Home/Footer';

const AerialBlog = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <BlogCard/>
            </Container>
            <SocialMedia/>
            <Footer/>
        </div>
    );
}

export default AerialBlog;
