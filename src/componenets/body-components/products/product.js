import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./product.css";

const Products=()=>{
    return(
        <div className='productsContainer'>
            <h2>Our Products</h2>
            <Container style={{marginTop:40}}>
                <Row>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../../../static/images/rice2.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Enquire</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={require('../../../static/images/rice1.jpg')} />
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                            Some quick example text to build on the card title and make up the
                            bulk of the card's content.
                            </Card.Text>
                            <Button variant="primary">Enquire</Button>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../../../static/images/rice3.jpg')} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Enquire</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={require('../../../static/images/rice4.jpg')} />
                    <Card.Body>
                        <Card.Title>Card Title</Card.Title>
                        <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                        </Card.Text>
                        <Button variant="primary">Enquire</Button>
                    </Card.Body>
                    </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Products;