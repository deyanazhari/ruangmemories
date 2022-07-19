import React from "react";
import {} from "react-bootstrap";
import './ourGallery.css';
import image1 from  "../../Assets/Gallery/image1.jpg";
import image2 from  "../../Assets/Gallery/image2.jpg";
import image3 from  "../../Assets/Gallery/image3.jpg";
import image4 from  "../../Assets/Gallery/image4.jpg";
import image5 from  "../../Assets/Gallery/image5.jpg";
import image10 from  "../../Assets/Gallery/image10.jpg";

function ourGallery (){
    return(
        <>
        <div className="container-fluid back">
        <div className="container">
            <div>
                <h1 style={{color:'white'}}>Our Gallery</h1>
            </div>
            <div className="row">
                <div className="col-lg-6 mb-3">
                    <a href={image1} data-lightbox="mygallery">
                        <img src={image1} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-lg-6 mb-3">
                    <a href={image2} >
                        <img src={image2} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-lg-8 mb-3">
                <a href={image3}>
                        <img src={image5} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-lg-4 px-0">
                <div className="col-lg-12 mb-3">
                <a href={image4} data-lightbox="mygallery">
                        <img src={image4} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-lg-12 mb-3">
                <a href={image4} data-lightbox="mygallery">
                        <img src={image5} className="img-fluid"/>
                    </a>
                </div>
                </div>
                <div className="col-lg-4 mb-3">
                    <a href={image10} data-lightbox="mygallery">
                        <img src={image10} className="img-fluid"/>
                    </a>
                </div>
                <div className="col-lg-4 m-3">
                    <a href={image4} data-lightbox="mygallery">
                        <img src={image4} className="img-fluid"/>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default ourGallery;