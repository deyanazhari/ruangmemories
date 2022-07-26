import React from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
import model1 from "../../Assets/model1.jpg"
import './loveStory.css';

function loveStory(){
    return(
        <>
        <Container className="padd">
            <Card sm={5} 
            className="cardstory px-sm-3 "
            >
                <Card.Body  >
                <Row className="g-2" >
                <Col md={4} className="col-12">
                            <Card.Title className="cardtitle1">Love Story</Card.Title>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext" data-aos="fade-up">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext" data-aos="fade-up">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext" data-aos="fade-up">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle" data-aos="fade-up">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext" data-aos="fade-up">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext" data-aos="fade-up">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext" data-aos="fade-up">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                        </Col>
                        <Col md={4} className="colimg col-6 g-2 ">
                        <img src={model1} className="rounded img-thumbnail cardimg"/>
                        </Col>
                        <Col md={4}  className="colimg1 col-6 g-2">
                        <Card.Img   className="rounded img-thumbnail cardimg1" src={model1}/>
                        </Col>
                </Row>
                </Card.Body>
            </Card>
        </Container>
        </>
    );
}
export default loveStory;