import React from 'react';
// import { Container } from 'react-bootstrap';
import video from './ycfvideo1.mp4'

const Video = () => {
    return (
        <div>
            {/* <Container> */}
            <video width="100%" height="60%" autoPlay muted controls>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {/* </Container> */}
        </div>
    );
}

export default Video;
