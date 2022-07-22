import React from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import './Home.css';
import Wedding from "../weddinginvitation/weddingInvitation.jsx"
import Bride from "../bridegroom/brideGroom.jsx"
import Save from "../savethedate/saveTheDate.jsx"
import Love from "../lovestory/loveStory.jsx"
import Gallery from "../ourgallery/ourGallery.jsx"
import Instagram from "../instagramfilter/instagramFilter.jsx"
import Rsvp from "../rsvp/rsvp.jsx"
import Gift from "../weddinggift/weddingGift"
import Stayssafe from "../stayssafe/staysSafe"
import Footer from "../footer/Footer"
import {FcInvite} from "react-icons/fc";
function Home(){
    return (
        <>
<Container fluid className="home-section " id="home">
    <Container  className="home-content">
        <Row>
        <Col  className="home-header">
              <h1 className="heading">
                The Wedding of
                
              </h1>
              <h1 className="heading-name">
                Vicky & Yudha
                {/* <strong className="main-name"> SOUMYAJIT BEHERA</strong> */}
              </h1>
              <h1 className="text">
              Saturday, 2nd July 2022
              </h1>
              <br/>
              <h1 className="text1">
              Dear,
              </h1>
              <h1 className="text2">
              SKOTIPALIM
              </h1>
              <h1 className="text3">
              You're Invited
              </h1>
              <div className=" mx-auto">
              <Button 
              variant="light"
              className="button but"
              ><FcInvite className="enve"/> Open Invitation</Button>{' '}
              </div>
            </Col>
        </Row>
        
    </Container>
</Container>
<Wedding/>
<Bride/>
<Save/>
<Love/>
<Gallery/>
<Instagram/>
<Rsvp/>
<Gift/>
<Stayssafe/>
<Footer/>
</>
    );
}
export default Home;