import React from 'react'
import { Container, Card,Row,Col,Form,Button} from "react-bootstrap";
import './rsvp.css';
import axios from 'axios';

const api = 'https://weddingbewok.herokuapp.com'

class rsvp extends React.Component{
    constructor(){
        super()
        this.state = {
            users: [{
                name: "udin",
                comments: ""
            }],
        }
    }
    componentWillMount(){
        const api = 'https://weddingbewok.herokuapp.com/attendance'
        axios.get(api)
        .then(data => {
            console.log(data)
            this.setState({
                users: data.data.data.attendance
            })
            
        })
    }
    render(){
        return(
        <Container fluid className="rsvpBack">
        <Container fluid className="rsvpFront">
            <Row className="pt-5">
            <Card className="mb-3 mx-auto cardrsvp card-color">
                    <Card.Body>
                    <Row className="g-0">
                    <Col md={4}>
                    <Card.Title className="text-start font-rsvp">
                    Rsvp
                    </Card.Title>
                    <Card.Text className=" font-prep">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form :</Card.Text>
                    </Col>
                    <Col md={8}>
                    <Form md={8}>
                        <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                        <Card.Title className="text-start" style={{color:'white'}} >
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
                        style={{color:'white'}}
                        label="Yes. I will attend"
                         />
                         <Form.Check 
                         style={{color:'white'}}
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
            <Card className="mb-3 mx-auto cardrsvp card-color">
                    <Card.Body>
                    <Row className="g-0">
                    <Col md={4}>
                    <Card.Title className="font-wishes">
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
                        <Card className="pb-3 message-color border-0 ">
                        <Card.Body >
                        <Row className="overflow-auto scroll-message" id="myscroll">
                        {this.state.users.map((users,idx) => (
                            
                            <ul>
                            <Card>
                            <Card.Title key={idx} className="fontli">{users.name}</Card.Title>
                            <Card.Text key={idx} className="fontli">{users.comments}</Card.Text>
                            </Card>
                            </ul>     
                                             
                        ))} 
                        </Row> 
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
        )
    }
}
export default rsvp;