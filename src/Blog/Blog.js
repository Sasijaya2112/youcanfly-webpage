import React from 'react';
import { Container} from 'react-bootstrap';
import Navbar from './Navbar';
import SocialMedia from '../Home/SocialMedia';
import BlogCard from './BlogCard';

const AerialBlog = () => {
    return (
        <div>
            <Navbar/>
            <Container>
                <BlogCard/>
            </Container>
            <SocialMedia/>
        </div>
    );
}

export default AerialBlog;
