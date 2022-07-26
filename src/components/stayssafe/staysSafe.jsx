import React from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
import mask from "../../Assets/icons/mask.png";
import sanitizer from "../../Assets/icons/sanitizer.png";
import handshake from "../../Assets/icons/nohandshake.png";
import washing from "../../Assets/icons/washing.png";
import distancing from "../../Assets/icons/distancing.png";
import './staysSafe.css';

function staysSafe (){
    return(
        <>
        <Container fluid className="back">
            <Container>
                <Row className="mx-auto text-center p-3">
                    <img  className="icon mx-auto "/>
                    <h6 className="textstay">It’s important to us that everyone stays safe, please read carefully our Wedding Day Covid-19 Guidance before attending the event:</h6>
                </Row>
                <Row className="mx-auto text-center pt-2 px-4">
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={mask} className="icon"/>
                    <p className="textstay">Face Mask</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={sanitizer} className="icon"/>
                    <p className="textstay">Hand Sanitizer</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img  src={washing} className="icon"/>
                    <p className="textstay">Washing Hand</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img src={handshake} className="icon"/>
                    <p className="textstay">Avoid Handshake</p>
                    </Col>
                    <Col lg={2} className="mx-auto col-6" >
                    <img className="icon" src={distancing}/>
                    <p className="textstay">Social Distancing</p>
                    </Col>
                </Row>
            </Container>
        </Container>
        </>
    )
}

export default staysSafe;