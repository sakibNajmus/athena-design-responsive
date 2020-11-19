import React from 'react';
import './Services.css'
import experience from '../../../resources/Illustration/Group 65@2x.png'
import interfacedesign from '../../../resources/Illustration/Group 66@2x.png'
import prototype from '../../../resources/Illustration/Group 69@2x.png'
import illustration from '../../../resources/Illustration/Group 72@2x.png'

const Services = () => {
    return (
        <section id="services" className="mt-5">
            <div className="container py-5">
            <div className="service-description text-center mb-5">
                <h3>What we do</h3>
                <p>Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength</p>
            </div>

            <div className="row">
                <div className="col-md-3 text-center mb-3">
                    <div className="service-card">                        
                        <img className="img-fluid w-25" src={experience} alt=""/>
                        <h5 className="mt-3 mb-2">Experience Design</h5>
                        <p>The point of using Lorem<br/>Ipsum is that it has a more-orless<br/>normal.</p>
                    </div>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <div className="service-card">                        
                        <img className="img-fluid w-25" src={interfacedesign} alt=""/>
                        <h5 className="mt-3 mb-2">Experience Design</h5>
                        <p>The point of using Lorem<br/>Ipsum is that it has a more-orless<br/>normal.</p>
                    </div>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <div className="service-card">                        
                        <img className="img-fluid w-25" src={prototype} alt=""/>
                        <h5 className="mt-3 mb-2">Experience Design</h5>
                        <p>The point of using Lorem<br/>Ipsum is that it has a more-orless<br/>normal.</p>
                    </div>
                </div>
                <div className="col-md-3 text-center mb-3">
                    <div className="service-card">                        
                        <img className="img-fluid w-25" src={illustration} alt=""/>
                        <h5 className="mt-3 mb-2">Experience Design</h5>
                        <p>The point of using Lorem<br/>Ipsum is that it has a more-orless<br/>normal.</p>
                    </div>
                </div>
            </div>
            </div>
        </section>
    );
};

export default Services;