import React from "react";
import { Container, Card,Row, ListGroup, Button} from "react-bootstrap";
import './instagramFilter.css';

function instagramFilter(){
    return(
        <>
        <Container fluid className="instagram">
            <Row className="cardif">
            <Card className="mx-auto p-3 " style={{ width: '18rem' }}>
            <Card.Body >
            <ListGroup variant="flush">
                <ListGroup.Item>V&y Wedding</ListGroup.Item>
                <ListGroup.Item>
                    <Card.Text>Saved Effect</Card.Text>
                    <Card.Text>TryIt</Card.Text>
                </ListGroup.Item>
                
            </ListGroup>
            </Card.Body>
            </Card>
            <div>
                <h1 className="text-center pt-5 textif ">Help us capture the best moment in our wedding day with the following Instagram Filter in your social media Stories </h1>
            </div>
            <div className="pt-5">
            <Button className="mx-auto " variant="primary">Instagram Filter</Button>{' '}
            </div>
            </Row>
        </Container>
        </>
    )
}

export default instagramFilter;