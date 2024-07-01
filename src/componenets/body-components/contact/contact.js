import "./contact.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { windowWidth } from "../../../const";

const Contact=()=>{
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
    }

    setValidated(true);
  };
  if (windowWidth && windowWidth>768) {
    return(
        <div className="contactContainer">
            <h2>For Instant Enquiry</h2>
            <Row>
                <Col>
                    <div className="contactInfoContainer">
                        <div className="contactText">
                            <h1>Contact Us</h1>
                            <h1> For More Information </h1>
                        </div>
                    </div>
                   
                    
                    
                </Col>
                <Col>
                <Card style={{ marginTop:40}}>
        <Card.Body style={{ backgroundColor:"#CFCFCF"}}>
            <Row>
                <Form style={{textAlign:'left'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Jhon Doe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                </Form>
            </Row>
        </Card.Body>

    </Card>
                </Col>
            </Row>
    
    
        </div>
    )
  }else{
    return(
        <div className="contactContainer">
            <h2>For Instant Enquiry</h2>
            <Row>
                <Col>
                <Card style={{ marginTop:40}}>
        <Card.Body style={{ backgroundColor:"#CFCFCF"}}>
            <Row>
                <Form style={{textAlign:'left'}}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="email" placeholder="Jhon Doe" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>
                    <Button variant="primary">Submit</Button>
                </Form>
            </Row>
        </Card.Body>

    </Card>
                </Col>
            </Row>
    
    
        </div>
    )
  }
    
}

export default Contact;