import React from 'react'
import { Container, Card,Row,Col,Form,Button} from "react-bootstrap";
import './rsvp.css';
import axios from 'axios';

class rsvp extends React.Component{
    constructor(){
        super()
        this.state = {
        users:[],
        nama: null,
        person: null,
        comments: null,
        attend: true, 

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
    saveDataToAPI(e){
        e.preventDefault()
        const apiUrl = 'https://weddingbewok.herokuapp.com/attendance'
        const attendance = {
        name :this.state.nama,
        person:this.state.person,
        comments:this.state.comments,
        attend: this.state.attend
        }
        axios.post(apiUrl,attendance)
        .then( Resp => {
            let users = this.state.users
            users.push( Resp.data )
            this.setState({})
        })
    
    }
    render(){
        const { users } = this.state
        return(
        <Container fluid className="rsvpBack">
            { users.length < 1 && <div>loading...</div> }
            <pre>debug nama: { this.state.nama } </pre>
            <pre>debug person: { this.state.person } </pre>
            <pre>comments person: { this.state.comments } </pre>
            <pre>attend: { this.state.attend } </pre>
        <Container fluid className="rsvpFront">
            <Row className="pt-5">
            <Card className="mb-3 mx-auto cardrsvp card-color">
                    <Card.Body>
                    <Row className="g-0">
                    <Col md={4}>
                    <Card.Title className="text-center font-rsvp">
                    Rsvp
                    </Card.Title>
                    <Card.Text className=" font-prep">Please kindly help us prepare everything better by confirming your attendance to our wedding event with the following RSVP form :</Card.Text>
                    </Col>
                    <Col md={8}>
                    <Form md={8} 
                    method="post"
                    onSubmit={ (e) => this.saveDataToAPI(e) }
                    >
                        <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                            <Form.Control 
                            type="text" 
                            placeholder="Enter Name" 
                            name="nama" 
                            onChange={(e) =>{
                                this.setState({ nama: e.target.value})
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 text-left" controlId="formBasicEmail">
                            <Form.Control
                             type="text"
                            placeholder="Number of Guest" 
                            name="person" 
                            onChange={(e) =>{
                                this.setState({ person: e.target.value})
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 pt-3 text-start" controlId="formBasicText" >
                            <Form.Control 
                            type="text" 
                            placeholder="Please leave us a message" 
                            name="comments" 
                            onChange={(e) =>{
                                this.setState({ comments: e.target.value})
                            }}
                            />
                        </Form.Group>
                        <Form.Group className="mb-2 text-start" controlId="formBasicCheckbox" >
                        <Form.Check 
                        type="radio"
                        id="checkbox"
                        value= "true"
                        style={{color:'white'}}
                        label="Yes. I will attend"
                        onChange={(e) =>{
                            this.setState({ attend: e.target.value})
                        }}
                         />
                         <Form.Check 
                         style={{color:'white'}}
                        type="radio"
                        value="false"
                        id="checkbox"
                        label="Sorry, I can't attend"
                        onChange={(e) =>{
                            this.setState({ attend: e.target.value})
                        }}
                         />
                        </Form.Group>
                        <Button className="button-rsvp" type="submit">
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
                        
                        
                        
                        </Form>
                        <Row className="pt-2">
                        <Card className="pb-3 message-color border-0 ">
                        <Card.Body >
                        <Row className="overflow-auto scroll-message" id="myscroll">
                        {this.state.users.map((users,idx) => (
                            
                            <ul>
                            <Card >
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