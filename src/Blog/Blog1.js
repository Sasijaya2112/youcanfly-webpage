import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import blog1image from './aerialcinema.png';
import { Container, Image } from 'react-bootstrap';

function Blog1() {
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
                    <Modal.Title>What is an Aerial Shot in Film ?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Image src={blog1image} className='w-100'></Image>
                    <Container>
                        <div style={{ fontSize: '130%' }}>
                            <br/>
                            <b>Ever wondered how filmmakers defy gravity to capture those jaw-dropping aerial shots that leave us breathless?</b><hr />
                            Explore the skies of cinematic artistry with our latest blog: 'Soaring to New Heights: The Magic Behind Aerial Shots in Filmmaking.' Are you ready to elevate your understanding of storytelling from a whole new perspective?"
                            In the realm of filmmaking, the camera is an omnipotent tool, capable of transporting viewers to diverse worlds, introducing them to captivating characters, and evoking a myriad of emotions. Among the vast array of cinematic techniques, aerial shots hold a unique position, offering a bird's-eye perspective that elevates storytelling to breathtaking heights.
                            What is an Aerial Shot?<br /><br />
                            An aerial shot, also known as a bird's-eye view or a God's-eye view, is a cinematographic technique that captures a scene from an elevated vantage point, often using drones, helicopters, or cranes. This elevated perspective allows filmmakers to showcase the grandeur of landscapes, establish the spatial relationships between characters and their surroundings, and impart a sense of scale and awe.
                            Impact of Aerial Shots in Filmmaking
                            Aerial shots serve a multitude of purposes in filmmaking, ranging from establishing a sense of place to conveying narrative significance. They can be employed to:
                            <br/><br/><b>What is an Aerial Shot?</b><br/>
                            An aerial shot, also known as a bird's-eye view or a God's-eye view, is a cinematographic technique that captures a scene from an elevated vantage point, often using drones, helicopters, or cranes. This elevated perspective allows filmmakers to showcase the grandeur of landscapes, establish the spatial relationships between characters and their surroundings, and impart a sense of scale and awe.
                            <br/><br/><b>Impact of Aerial Shots in Filmmaking</b><br/>
                            Aerial shots serve a multitude of purposes in filmmaking, ranging from establishing a sense of place to conveying narrative significance. They can be employed to:
                            <br/><b>Introduce Vast Landscapes:<br/></b> Aerial shots effectively capture the sweeping expanses of deserts, forests, or cityscapes, providing a sense of scale and grandeur.
                            <br/><b>Establish Spatial Relationships:<br/></b> Aerial shots can effectively illustrate the relationships between characters, their surroundings, and other elements in the scene.
                            <br/><b>Create Visual Metaphors:<br/></b> Aerial shots can convey symbolism and metaphor, emphasizing isolation, vulnerability, or the insignificance of individuals within a vast landscape.
                            <br/><b>Emphasize Action and Movement:<br/></b> Aerial shots can dynamically capture the flow of action sequences, car chases, or large-scale battles.
                            <br/><b>Reveal Narrative Turns:<br/></b> Aerial shots can serve as plot devices, revealing hidden secrets, introducing new characters, or providing a significant turning point in the story.
                            <br/><br/><b>Examples of Memorable Aerial Shots in Film<br/></b>
                            Cinematic history is replete with iconic aerial shots that have left an indelible mark on audiences. Here are a few notable examples:
                            <br/><br/><b>The Opening Sequence of "North by Northwest" (1959):<br/></b> Alfred Hitchcock masterfully employs an aerial shot to introduce Cary Grant's character as he peacefully sleeps on a train, juxtaposed with the bustling activity of the crop-dusting plane preparing for its perilous mission.
                            <br/><b>The Aerial Chase in "Bullitt" (1968):<br/></b> Steve McQueen's iconic car chase through the streets of San Francisco is captured in a series of breathtaking aerial shots, showcasing the raw intensity and high-speed thrills of the pursuit.
                            <br/><b>The Aerial Montage in "Lawrence of Arabia" (1962):<br/></b> David Lean's epic desert drama employs aerial shots to depict the vastness of the Arabian landscape, emphasizing the isolation and vulnerability of Lawrence's journey.
                            <br/><b>The Opening Sequence of "The Lord of the Rings:<br/></b> The Fellowship of the Ring" (2001): Peter Jackson's sweeping aerial shot of the Shire establishes the idyllic setting and introduces the viewers to the tranquil world of hobbits.
                            <br/><b>The Aerial Shot Reveal in "The Sixth Sense" (1999):<br/></b> M. Night Shyamalan's mind-bending thriller employs a subtle aerial shot to reveal a shocking twist, leaving audiences stunned and rethinking the entire narrative
                        </div>
                    </Container>
                </Modal.Body>
            </Modal>
        </>
    );
}

export default Blog1;