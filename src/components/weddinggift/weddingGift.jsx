import React from "react";
import { Container, Card,Row,Col,Button} from "react-bootstrap";
import './weddingGift.css';
import card from "../../Assets/card.jpg";

function weddingGift(){
    return(
        <>
        <Container fluid className="backgift">
            <Row className="pt-5 mx-auto">
                <h1 className="text-center p-4">Wedding Gift</h1>
                <h5 className="text-center ">For some who may want to take the time to send us gift, please kindly tap the button down below:</h5>
            <Col sm={6} className="pt-5" >
                <Card className="cardboard mx-auto ">
                    <Card.Body >
                        {/* <Card.ImgOverlay > */}
                        <Card.Title className="pt-4">BCA</Card.Title>
                        <Card.Text>87053229571</Card.Text>
                        <Card.Text>Siti Hutami Novickirana</Card.Text>
                        <Button variant="primary" >Copy</Button>
                        {/* </Card.ImgOverlay> */}
                    </Card.Body>
                </Card>
            </Col>
            <Col sm={6} className="pt-5">
                <Card className="cardboard mx-auto">
                    <Card.Body>
                        {/* <Card.Img src={card}/>
                        <Card.ImgOverlay> */}
                        <Card.Title className="pt-4">BCA</Card.Title>
                        <Card.Text>87053229571</Card.Text>
                        <Card.Text>Siti Hutami Novickirana</Card.Text>
                        <Button variant="primary" >Copy</Button>
                        {/* </Card.ImgOverlay> */}
                    </Card.Body>
                </Card>
            </Col>
            
            </Row>
        </Container>
        </>
    )
}
export default weddingGift;