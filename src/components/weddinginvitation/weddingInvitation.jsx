import React from "react";
import{Container, Button} from "react-bootstrap";
import './weddingInvitation.css';
import wedding from  "../../Assets/icons/wedding.png"
import { FaCalendarCheck } from "react-icons/fa";

function weddingInvitation(){
    
    return(
        <>
        <Container fluid className="wedding img-fluid slide-up" id="wedding" data-aos="fade-down"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
        <div className="textwedding">
        <h2 className="textwedding1 mx-auto text-center" data-aos="zoom-in">
            Wedding Invitation
        </h2>
        <h2 className="textwedding2 mx-auto text-center " data-aos="zoom-in" data-aos-duration="2000">Vicky & Yudha</h2>
        <div className="mx-auto">
        <Button 
              variant="light"
              className="button  "
              ><FaCalendarCheck className="enve "/> Open Invitation</Button>{' '}
              </div>
        </div>
        <div className="mx-auto text-center logowed">
            <img className="imgwed"/>
            <h1 className="textwed" >Vicky & Yudha</h1>
            <h1 className="textwed1"data-aos="zoom-in" data-aos-duration="2000">"And one of His signs is that He created mates for you from yourselves that you may find rest in them, and <br/> He put between you love and compassion; most surely there are signs in this for a people who reflect.”</h1>
            <p style={{color:'white'}} data-aos="zoom-in" data-aos-duration="2000">(QS Ar-Rum : 21)</p>
        </div>
        
        </Container>
        
        </>
    );
};

export default weddingInvitation;