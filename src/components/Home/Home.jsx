import React, {useEffect } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";
import saxo from "../../Assets/music/saxo.mp3"
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
import AOS from 'aos';
import 'aos/dist/aos.css';
// import useSound from 'use-sound';
import ReactAudioPlayer from 'react-audio-player';
function Home(){
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    return (
        <>
<Container fluid className="home-section " id="home" data-aos="fade-down"
     data-aos-anchor-placement="top-bottom" data-aos-duration="2000">
              <div className="home-header">
              <h1 className="heading" data-aos="zoom-in" data-aos-duration="2000">
                The Wedding of
              </h1>
              </div>
              <h1 className="heading-name" data-aos="" data-aos-duration="">
                Visky & Yudha
                {/* <strong className="main-name"> SOUMYAJIT BEHERA</strong> */}
              </h1>
              <h1 className="text">
              Saturday, 2nd July 2022
              </h1>
              <br/>
              <div className="pt-5">
              <h1 className="text1">
              Dear,
              </h1>
              </div>
              <h1 className="text2">
              SKOTIPALIM
              </h1>
              <h1 className="text3">
              You're Invited
              </h1>
              <div className=" mx-auto but">
              <Button 
              variant="light"
              className="button"
              href="https://react-bootstrap.netlify.app/components/spinners/"
              ><FcInvite className="enve"/> Open Invitation</Button>{' '}
              </div>
            <ReactAudioPlayer
              src={saxo}
              autoPlay
              aria-label="music"
              
            />
</Container>
<Wedding/>
<Bride/>
<Save/>
<Love/>
<Gallery/>
{/* <Instagram/> */}
<Rsvp/>
{/* <Gift/> */}
<Stayssafe/>
<Footer/>
</>
    );
}
export default Home;