import "./contact.css"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { windowWidth } from "../../../const";

const Contact=()=>{
    const [name,setName] =  useState(null);
    const [email,setEmail] = useState(null);
    const [message,setMessage] = useState(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(
            {
                "name":name,
                "email": email,
                "message":message
            }
        )
    }
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
                <Form style={{textAlign:'left'}} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required placeholder="Jhon Doe" value={name} onChange={(e)=>setName(e.target.value)}  />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required placeholder="name@example.com"  value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" required minLength={50} maxLength={500} rows={3} value={message} onChange={(e)=>setMessage(e.target.value)} />
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
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
                <Form style={{textAlign:'left'}} onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput2" >
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" required placeholder="Jhon Doe" value={name} onChange={(e)=>setName(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" required placeholder="name@example.com" value={email} onChange={(e)=>setEmail(e.target.value)}/>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Example textarea</Form.Label>
                        <Form.Control as="textarea" required minLength={50} maxLength={500} rows={3} value={message} onChange={(e)=>setMessage(e.target.value)}/>
                    </Form.Group>
                    <Button variant="primary" type="submit">Submit</Button>
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