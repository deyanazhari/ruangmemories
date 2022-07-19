import React from "react";
import './brideGroom.css';
import model1 from "../../Assets/model1.jpg"
import model2 from "../../Assets/model2.jpg"
import {Container} from "react-bootstrap";
function brideGroom(){
    return(
        <>
        <Container fluid className="groom">
            <div>
                <h1 className="brideText">
                    Bride and Groom
                </h1>
                <h1 className="groomText">
                We would like to invite you to witness and be a part of our new beginning.
                </h1>
            </div>
            <figure className="figure ms-5">
            <img src={model2} class="rounded float-start rounded-circle ms-5"
            style={{width:200, height:200}}
            />
            <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
            </figure>
            <figure className="figure ms-5">
            <img src={model1} class="rounded float-end rounded-circle ms-5" style={{width:200, height:200}}/>
            <figcaption class="figure-caption text-end">A caption for the above image.</figcaption>
            </figure>
        </Container>
        </>
    );
}
export default brideGroom;