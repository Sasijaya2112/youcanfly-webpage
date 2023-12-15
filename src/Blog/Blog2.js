import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import blog1image from './harbour.jpg';
import { Container, Image } from 'react-bootstrap';

function Blog2() {
    const values = [true];
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);

    function handleShow(breakpoint) {
        setFullscreen(breakpoint);
        setShow(true);
    }

    return (
        <>
            {values.map((v, idx) => (
                <Button key={idx} className="me-2 mb-2" onClick={() => handleShow(v)}>
                    View Blog
                    {/* {typeof v === 'string' && `below ${v.split('-')[0]}`} */}
                </Button>
            ))}
            <Modal show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>How to improve aerial shots?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={blog1image} className='w-100'></Image>
                    <Container>
                        <div style={{ fontSize: '130%' }}>
                            <br />
                            <b>What are the Best Tips to  Improve Aerial Cinematography?</b>
                            <br /><hr/>
                            Capturing stunning aerial shots can be incredibly rewarding. Here are some tips to enhance your aerial photography:<br /><br/>
                            <b>1.Choose the Right Equipment:</b><br />
                            Explore the essential tools and equipment needed for capturing stunning aerial shots.
                            <br />
                            <b>2.Mastering Camera Settings:</b><br />
                            Dive into the intricacies of camera settings tailored for aerial cinematography.
                            <br />
                            <b>3.Flight Planning and Safety:</b><br />
                            Learn the importance of meticulous planning and safety measures before taking flight.
                            <br />
                            <b>4.Understanding Lighting Conditions:</b><br />
                            Delve into how different lighting conditions impact aerial shots and how to adapt.
                            <br />
                            <b>5.Perfecting Composition Techniques:</b><br />
                            Explore composition principles specific to aerial cinematography for visually compelling results.
                            <br />
                            <b>6.Utilizing Movement and Angles:</b><br />
                            Discover how to leverage dynamic movement and unique angles to enhance your shots.
                            <br />
                            <b>7.Capture the Golden Hour and Twilight:</b><br />
                            The soft and diffused lighting during the golden hour and twilight can create stunning aerial shots with enhanced contrast and color. Plan your flights accordingly to capture these magical moments.
                            <br />
                            <b>8.Utilize Filters and Post-Processing:</b><br />
                            Enhance your aerial footage with the help of filters and post-processing techniques. Adjust color grading, contrast, and saturation to achieve the desired look and feel for your project.
                            <br />
                            <b>9.Post-Production Magic:</b><br />
                            Uncover tips for effective post-production editing to polish your aerial footage.
                            <br />
                            <b>10.Legal and Ethical Considerations:</b><br />
                            Understand the legal and ethical aspects of aerial cinematography, ensuring responsible practice.
                            <br />
                            <b>11.Seek Inspiration from Cinematic Masters:</b><br />
                            Uncover the secrets of acclaimed filmmakers' aerial techniques for compelling storytelling and captivating scenes. Elevate your skills with insights from both our experts and drone engineers at "You Can Fly”
                            Link for the course from Website / Landing page will  be Learning Management System( Particular course- Aerial Cinematography)

                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Blog2;