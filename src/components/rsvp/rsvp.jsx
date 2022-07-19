import React from "react";
import { Container, Card,Row,Col,Form,Button} from "react-bootstrap";
import './rsvp.css';

function rsvp (){
    return(
        <>
        <Container fluid className="rsvpBack">
            <Container fluid className="rsvpFront">
            <Row className="pt-5">
                <Card className="mb-3 mx-auto cardrsvp">
                    <Row className="g-0">
                    <Col className="col-md-4">
                        <h1>
                        Rsvp
                        </h1>
                        <p>Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form :</p>
                        </Col>
                        <Col className="col-md-8">
                        <Card.Body>
                        <Form>
                            <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                                <Form.Label className="formtext">Name</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                
                            </Form.Group>

                            <Form.Select aria-label="Default select example">
                            <option>Number of Guest </option>
                            <option value="1">3</option>
                            <option value="2">2</option>
                            <option value="3">1</option>
                            </Form.Select>
                            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check 
                            type="checkbox"
                            id="checkbox"
                            label="Yes. I will attend"
                             />
                             <Form.Check 
                            type="checkbox"
                            id="checkbox"
                            label="Sorry, I can't attend"
                             />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                            </Form>
                        </Card.Body>
                        </Col>

                    </Row>
                </Card>
            </Row>
            </Container>
        </Container>
        </>
    );
}

export default rsvp;