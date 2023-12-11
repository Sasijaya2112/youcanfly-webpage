import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import { Image } from 'react-bootstrap';
import myImage from './ycflogo.png'
// import emailjs from '@emailjs/browser';
import $ from 'jquery';

function ContactUs() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [name, setName] = useState();
  const [mail, setMail] = useState();
  const [contact, setContact] = useState();
  const [query, setQuery] = useState();


  // const handleSubmit = (e) => {
  //   e.preventDefault();

  //   console.log(name, mail, contact, query);

  //   const templateParams = {
  //     name: name,
  //     mail: mail,
  //     contact: contact,
  //     query: query
  //   };

  //   emailjs.sendForm('service_97f0sbl', 'template_0bz96rr', templateParams, 'bWodJ6suy7VUOXslw')
  //     .then((result) => {
  //       console.log(result.text);
  //       console.log('message sent');
  //     })
  //     .catch((error) => {
  //       console.log(error.text);
  //     });

  //   setShow(false);
  // }
  const handleSubmit = (e) => {
    e.preventDefault();
    var data = {
      service_id: 'service_97f0sbl',
      template_id: 'template_0bz96rr',
      user_id: 'bWodJ6suy7VUOXslw',
      template_params: {
        'name': name,
        "mail": mail,
        'contact': contact,
        'query': query
      }
    };

    $.ajax('https://api.emailjs.com/api/v1.0/email/send', {
      type: 'POST',
      data: JSON.stringify(data),
      contentType: 'application/json'
    }).done(function () {
      alert('Your mail is sent!');
    }).fail(function (error) {
      alert('Oops... ' + JSON.stringify(error));
    });
    setShow(false);
  }

  // const form = useRef();



  return (
    <>
      <Button variant="outline-primary" className='m-3' onClick={handleShow}>
        Contact Us
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Reach us!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Image src={myImage} alt="ycflogo" fluid style={{ height: '120px', width: '120px', marginLeft: '36%' }} />
          <div style={{ marginLeft: '30%' }}>
            <p>Contact: +91 786 789 7000</p>
            <p>&nbsp;&nbsp;Email: info@youcanfly.in</p>
          </div>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder=""
                autoFocus
                onChange={(e) => setName(e.target.value)}
                name='name'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="example@email.com"
                autoFocus
                onChange={(e) => setMail(e.target.value)}
                name='mail'
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control
                type="text"
                placeholder="+91"
                autoFocus
                onChange={(e) => setContact(e.target.value)}
                name='contact'
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >
              <Form.Label>Query</Form.Label>
              <Form.Control as="textarea" rows={3} onChange={(e) => setQuery(e.target.value)} name='query' />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleSubmit} type="submit">
            Send Query
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ContactUs;