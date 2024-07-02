import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./product.css";
import { windowWidth } from '../../../const';

const Products=()=>{
    console.log(windowWidth)
    if (windowWidth && windowWidth>768) {
        return(
            <div className='productsContainer'>
                <h2>Our Products</h2>
                <Container style={{marginTop:40}}>
                    <Row>
                        <Col>
                        <Card style={{ width: '18rem',height:"32rem" }}>
                            <Card.Img variant="top" src={require('../../../static/images/rice2.jpg')} />
                            <Card.Body>
                                <Card.Title><h3>1121 Basmati Rice</h3></Card.Title>
                                <Card.Text>
                                <p>1121 Basmati Rice has the world's longest grain, before as well as after cooking and gives 30% more volume than any other Basmati variety.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem',height:"32rem" }}>
                            <Card.Img variant="top" src={require('../../../static/images/rice1.jpg')} />
                            <Card.Body>
                                <Card.Title><h3>1718 Basmati Rice</h3></Card.Title>
                                <Card.Text>
                                <p>A new basmati variety, called 1718 is an improved version of the iconic pusa 1121. It is a modified rice seed of the PUSA 1121 basmati variety.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem',height:"32rem" }}>
                        <Card.Img variant="top" src={require('../../../static/images/rice3.jpg')} />
                        <Card.Body>
                            <Card.Title><h3>SUGANDHA NON-BASMATI RICE</h3></Card.Title>
                            <Card.Text>
                            <p>Sugandha Basmati Rice is highly aromatic and is appreciated for its slender grains and delicious taste. Nutritional value of Sugandha Basmati Rice is quite high.</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '18rem',height:"32rem" }}>
                        <Card.Img variant="top" src={require('../../../static/images/rice4.jpg')} />
                        <Card.Body>
                            <Card.Title><h3>PESTICIDE RESIDUE FREE RAW RICE</h3></Card.Title>
                            <Card.Text>
                            <p>After Paddy is harvested,it's inedible husk is removed, Post husk removal, rice goes through polishing to remove the bran & then we get the white rice</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }else{
        return(
            <div className='productsContainer'>
                <h3>Our Products</h3>
                <Container style={{marginTop:40}}>
                    <Row>
                        <Col>
                        <Card style={{ width: '9rem',height:"35rem" }}>
                            <Card.Img variant="top" src={require('../../../static/images/rice2.jpg')} />
                            <Card.Body>
                                <Card.Title><h3>1121 Basmati Rice</h3></Card.Title>
                                <Card.Text>
                                <p>1121 Basmati Rice has the world's longest grain, before as well as after cooking and gives 30% more volume than any other Basmati variety.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '9rem',height:"35rem" }}>
                            <Card.Img variant="top" src={require('../../../static/images/rice1.jpg')} />
                            <Card.Body>
                                <Card.Title><h3>1718 Basmati Rice</h3></Card.Title>
                                <Card.Text>
                                <p>A new basmati variety, called 1718 is an improved version of the iconic pusa 1121. It is a modified rice seed of the PUSA 1121 basmati variety.</p>
                                </Card.Text>
                            </Card.Body>
                            <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                            </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '9rem',height:"35rem" }}>
                        <Card.Img variant="top" src={require('../../../static/images/rice3.jpg')} />
                        <Card.Body>
                            <Card.Title><h3>SUGANDHA NON-BASMATI RICE</h3></Card.Title>
                            <Card.Text>
                            <p>Sugandha Basmati Rice is highly aromatic and is appreciated for its slender grains and delicious taste. Nutritional value of Sugandha Basmati Rice is quite high.</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                        <Col>
                        <Card style={{ width: '9rem',height:"35rem" }}>
                        <Card.Img variant="top" src={require('../../../static/images/rice4.jpg')} />
                        <Card.Body>
                            <Card.Title><h3>PESTICIDE RESIDUE FREE RAW RICE</h3></Card.Title>
                            <Card.Text>
                            <p>After Paddy is harvested,it's inedible husk is removed, Post husk removal, rice goes through polishing to remove the bran & then we get the white rice</p>
                            </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                            <Button variant="primary">Enquire</Button>
                            </Card.Footer>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
    
}

export default Products;