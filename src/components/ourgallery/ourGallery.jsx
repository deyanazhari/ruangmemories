import React from "react";
import {} from "react-bootstrap";
import './ourGallery.css';
import image1 from  "../../Assets/Gallery/image1.jpg";
import image2 from  "../../Assets/Gallery/image2.jpg";
import image3 from  "../../Assets/Gallery/image3.jpg";
import image4 from  "../../Assets/Gallery/image4.jpg";
import image5 from  "../../Assets/Gallery/image5.jpg";
import image10 from  "../../Assets/Gallery/image10.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

function ourGallery (){
    AOS.init();

    return(
        <>
        <div className="container-fluid back">
        <div className="container pt-3">
            <div >
                <h1 className="our">Our Gallery</h1>
            </div>
            <div className="row g-2">
                <div className="col-sm-6 col-6 mb-1">
                    <a href={image1} data-lightbox="mygallery" data-aos="zoom-in">
                        <img src={image1} className="img-fluid gallery" data-aos="zoom-in" />
                    </a>
                </div>
                <div className="col-sm-6 col-6 mb-1">
                    <a href={image2} data-aos="zoom-in" >
                        <img src={image2} className="img-fluid gallery" data-aos="zoom-in"/>
                    </a>
                </div>
                <div className="col-sm-8 col-8 mb-1">
                <a href={image3}>
                        <img src={image5} className="img-fluid gallery" data-aos="zoom-in"/>
                    </a>
                </div>
                <div className="col-sm-4 col-4">
                    <div className="col-lg-12 col-12 mb-1">
                    <a href={image4} data-lightbox="mygallery">
                            <img src={image4} className="img-fluid gallery" data-aos="zoom-in"/>
                        </a>
                    </div>
                    <div className="col-sm-12 col-12 mb-1">
                    <a href={image4} data-lightbox="mygallery">
                            <img src={image5} className="img-fluid gallery" data-aos="zoom-in"/>
                        </a>
                    </div>
                </div>
                <div className="col-sm-12 col-12 mb-1">
                    <a href={image10} data-lightbox="mygallery">
                        <img src={image10} className="img-fluid gallery" data-aos="zoom-in"/>
                    </a>
                </div>
                <div className="col-sm-6 col-6 mb-1">
                    <a href={image4} data-lightbox="mygallery">
                        <img src={image4} className="img-fluid gallery " data-aos="zoom-in"/>
                    </a>
                </div>
                <div className="col-sm-6 col-6 mb-1">
                    <a href={image4} data-lightbox="mygallery">
                        <img src={image4} className="img-fluid gallery" data-aos="zoom-in"/>
                    </a>
                </div>
            </div>
        </div>
        </div>
        </>
    );
}
export default ourGallery;