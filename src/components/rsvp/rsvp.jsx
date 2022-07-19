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
                        <Card.Body>
                        <Row className="g-0">
                        <Col md={4}>
                        <Card.Title className="text-start">
                        Rsvp
                        </Card.Title>
                        <Card.Text className="text-start">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form :</Card.Text>
                        </Col>
                        <Col md={8}>
                        <Form md={8}>
                            <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                            <Card.Title className="text-start">
                        Rsvp
                        </Card.Title>
                                <Form.Control type="name" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Select aria-label="Default select example">
                            <option>Number of Guest </option>
                            <option value="1">3</option>
                            <option value="2">2</option>
                            <option value="3">1</option>
                            </Form.Select>
                            <Form.Group className="mb-2" controlId="formBasicCheckbox">
                            <Form.Check 
                            type="radio"
                            id="checkbox"
                            label="Yes. I will attend"
                             />
                             <Form.Check 
                            type="radio"
                            id="checkbox"
                            label="Sorry, I can't attend"
                             />
                            </Form.Group>
                            
                            <Button variant="primary" type="submit">
                                Submit Rsvp
                            </Button>
                            </Form>
                            </Col>
                            </Row>
                        </Card.Body>
                </Card>
                </Row>
                <Row className="pt-5">
                <Card className="mb-3 mx-auto cardrsvp">
                        <Card.Body>
                        <Row className="g-0">
                        <Col md={4}>
                        <Card.Title>
                        Wishes
                        </Card.Title>
                        </Col>
                        <Col md={8}>
                        <Form md={8} classNmae="float-right">
                            <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                                <Form.Control type="name" placeholder="Name" />
                            </Form.Group>
                            <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                                <Form.Control type="text" placeholder="Please leave us a message" />
                            </Form.Group>
                            <Button variant="primary" type="submit" >
                                Send Wish
                            </Button>
                            </Form>
                            <Row className="pt-2">
                            <Card border="primary" className="pb-3">
                            <Card.Body >
                            <Card.Title className="text-start">
                            Rsvp
                            </Card.Title>
                            </Card.Body>
                            </Card>
                            </Row>
                            </Col>
                            </Row>
                        </Card.Body>
                </Card>
                </Row>
            </Container>
        </Container>
        </>
    );
}

export default rsvp;