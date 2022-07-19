import React from "react";
import './saveTheDate.css';
import {Container} from "react-bootstrap";

function saveTheDate(){
    return(
        <>
        <Container fluid className="savethedate">
            <div className="STD">
                <h1 style={{color:"white"}} >Save The Date</h1>
            </div>
        <div className="row">
        <div className="col-sm-6 my-4 ">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Saturday</h5>
                <p className="card-text">2nd July 2022</p>
                <h5 className="card-title">Akad</h5>
                <p className="card-text">AT: 4:30 - 5:30 PM</p>
                <h5 className="card-title">Arkava Luxury Ballroom Kemang</h5>
                <p className="card-text">Jl. Kemang Raya No.54, RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan</p>
                <a class="btn btn-primary">Google Maps</a>
            </div>
            </div>
        </div>
        <div className="col-sm-6 my-4 ">
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">Saturday</h5>
                <p className="card-text">2nd July 2022</p>
                <h5 className="card-title">Reception</h5>
                <p className="card-text">AT: 4:30 - 5:30 PM</p>
                <h5 className="card-title">Arkava Luxury Ballroom Kemang</h5>
                <p className="card-text">Jl. Kemang Raya No.54, RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan</p>
                <a href="#" class="btn btn-primary">Google Maps</a>
            </div>
            </div>
        </div>
        </div>
        <div class="container">
        <h1 id="headline" className="textCd pt-3">Countdown To The Big Day</h1>
        <div id="countdown">
            <ul>
            <li><span id="days"></span>days</li>
            <li><span id="hours"></span>Hours</li>
            <li><span id="minutes"></span>Minutes</li>
            <li><span id="seconds"></span>Seconds</li>
            </ul>
        </div>
        <div id="content" class="emoji">
            <span>🥳</span>
            <span>🎉</span>
            <span>🎂</span>
        </div>
        </div>
        </Container>
        
        </>
    );
}

export default saveTheDate;