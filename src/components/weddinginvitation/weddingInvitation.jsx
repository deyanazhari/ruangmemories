import React from "react";
import{Container, Button} from "react-bootstrap";
import './weddingInvitation.css';
import { FaCalendarCheck } from "react-icons/fa";
function weddingInvitation(){
    
    return(
        <>
        <Container fluid className="wedding img-fluid" id="wedding">
        <div className="textwedding">
        <h1 className="textwedding1">
            Wedding Invitation
        </h1>
        <h1 className="textwedding2">Vicky & Yudha</h1>
        <Button 
              variant="light"
              className="button"
             
              ><FaCalendarCheck className="enve"/> Open Invitation</Button>{' '}
              
        </div>
        <Container fluid>
            

        </Container>
        
        </Container>
        
        </>
    );
};

export default weddingInvitation;