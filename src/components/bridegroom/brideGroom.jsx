import React from "react";
import './brideGroom.css';
import model1 from "../../Assets/model1.jpg"
import model2 from "../../Assets/model2.jpg"
import {Container,Row,Col} from "react-bootstrap";
function brideGroom(){
    return(
        <>
        <Container fluid className="groom">
            <div>
                <h1 className="brideText">
                    Bride and Groom
                </h1>
                <h1 className="groomText pt-2">
                We would like to invite you to witness and be a part of our new beginning.
                </h1>
            </div>
            <Row className="mx-auto">
                <Col md={5} className="rounded float-center col-12">
                    <figure className=" figure fig1 ">
                    <img src={model2} class=" rounded-circle"
                    style={{width:200, height:200}}
                    />
                    <figcaption class="figure-caption text-center figtext">Vicky</figcaption>
                    <figcaption class="figure-caption text-center figtext1">Siti Hutami Novickirana</figcaption>
                    <figcaption class="figure-caption text-center ">Second Daughter of Mr. Ilyas Ibrahim and <br/>
                    Mrs. Ratna Ningrum</figcaption>
                    </figure>
                </Col>
                <Col md={2} className="12 mx-auto text-center pb-2">
                    <h1 className="danText">&</h1>
                </Col>
                <Col md={5} className="col-12 rounded float-start">
                    <figure className="figure fig2">
                    <img src={model1} class=" rounded-circle " style={{width:200, height:200}}/>
                    <figcaption class="figure-caption text-center figtext">Yudha</figcaption>
                    <figcaption class="figure-caption text-center figtext1">Muhammad Yudha Yusi Putra</figcaption>
                    <figcaption class="figure-caption text-center ">First Son of Mr. Mansyur and <br/>
                    Mrs. Nidawati 
                    </figcaption>
                    </figure>
                </Col>
            </Row>
        </Container>
        </>
    );
}
export default brideGroom;