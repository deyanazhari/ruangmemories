import React from "react";
import './saveTheDate.css';
import {Container} from "react-bootstrap";

function saveTheDate(){
    return(
        <>
        <Container fluid className="savethedate">
            <Container>
            <div className="STD">
                <h1 style={{color:"white"}} className="fontSave" >Save The Date</h1>
            </div>
        <div className="row">
            <div className="col-sm-6 my-4 ">
                <div className="card justify-content-end" style={{width:450}}>
                    <div className="card-body" >
                        <h5 className="card-title fontSat">Saturday</h5>
                        <p className="card-text font2nd">2nd July 2022</p>
                        <h5 className="card-title fontAkad">Akad</h5>
                        <p className="card-text fontAt">AT: 4:30 - 5:30 PM</p>
                        <h5 className="card-title fontArkava">Arkava Luxury Ballroom Kemang</h5>
                        <p className="card-text fontJl">Jl. Kemang Raya No.54, RW.2, Bangka, Kec. Mampang Prpt., Kota Jakarta Selatan</p>
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
            <div class="contCd col-sm-12 col-12 mx-auto">
                <h1 id="headline" className="textCd pt-3">Countdown To The Big Day</h1>
                <div id="countdown" className="">
                    <ul className="text-center">
                    <li className="col-3 text-center"><span id="days"></span>Days</li>
                    <li className="col-3 text-center"><span id="hours"></span>Hours</li>
                    <li className="col-3 text-center"><span id="minutes"></span>Minutes</li>
                    <li className="col-3 text-center"><span id="seconds"></span>Seconds</li>
                    </ul>
                </div>
            </div>
        </div>
        </Container>
        </Container>
        
        </>
    );
}

export default saveTheDate;