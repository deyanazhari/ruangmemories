import React from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
// import mask from "../../Assets/icons/mask.png";
// import hand from "../../Assets/icons/hand.png";
// import handshake from "../../Assets/icons/handshake.png";
// import washing from "../../Assets/icons/washing.png";
import wedding from "../../Assets/icons/wedding.png";
import './staysSafe.css';

function staysSafe (){
    return(
        <>
        <Container fluid className="back">
            <Container>
                <Row className="mx-auto text-center pb-1">
                    <img src={wedding} className="icon mx-auto "/>
                    <h6 className="textstay">It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event:</h6>
                </Row>
                <Row className="mx-auto text-center pt-2">
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={wedding} className="icon"/>
                    <p className="textstay">Face Mask</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={wedding} className="icon"/>
                    <p className="textstay">Face Mask</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={wedding} className="icon"/>
                    <p className="textstay">Face Mask</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={wedding} className="icon"/>
                    <p className="textstay">Face Mask</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={wedding} className="icon"/>
                    <p className="textstay">Face Mask</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default staysSafe;