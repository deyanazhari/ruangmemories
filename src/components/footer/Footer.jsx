import React from 'react'
import { Container, Card, Row, Col} from "react-bootstrap";
import "./Footer.css"
function Footer (){
    return (
      <Container fluid className="backfooter">
        <Container>
            <Row className="text-center  mx-auto rowfooter ">
                <p className="textfooter ">We look forward to celebrating our wedding with you. It will be one of the most wonderful days in our lives and we want you to come and join us as we officially tie the knot. It would not be the same without your presence.</p>
                <h5 className="pt-5  textfooter">Lots of Love</h5>
                <h5 className="pt-4 pb-3  textfooter">Vicky & Yudha</h5>
                <h5 className="pt-5  textfooter">Made With</h5>
                <h5 className="pt-5  textfooter">Ruang Invitation</h5>
            </Row>
        </Container>
      </Container>
    )
}

export default Footer;
