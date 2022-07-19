import React from "react";
import { Container, Card, Row, Col} from "react-bootstrap";
import model1 from "../../Assets/model1.jpg"
import './loveStory.css';

function loveStory(){
    return(
        <>
        <Container className="padd">
        {[
        'Secondary',
      ].map((variant) => (
            <Card sm={5}
            className="cardlove"
            bg={variant.toLowerCase()}
          key={variant}
          text={variant.toLowerCase() === 'light' ? 'dark' : 'white'}
            >
                <Card.Body>
                <Row g={0}>
                        <Col md={4}>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                            <Card.Title className="cardtitle">April 2021 - First Date</Card.Title>
                            <Card.Text className="cardtext">We first met online due to a pandemic. After texting for almost a week, we decided to meet in person. Since it was Ramadhan, we planned to have breakfast together at Kimukatsu, Grand Indonesia.</Card.Text>
                        </Col>
                    <Col md={6} className="colimg">
                        <Card.Img md={8} thumbnail float-right className="cardimg img-thumbnail" src={model1}/>
                        <Card.Img md={8} thumbnail float-right className="cardimg img-thumbnail" src={model1}/>
                    </Col>
                        
                </Row>
                </Card.Body>
            </Card>
      ))}
        </Container>
        </>
    );
}
export default loveStory;