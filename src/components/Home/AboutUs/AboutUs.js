import React from 'react';
import aboutbanner from '../../../resources/Illustration/20 [Converted]@2x.png'

const AboutUs = () => {
    return (
        <section className="container my-5 pt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid" src={aboutbanner} alt=""/>
                </div>

                <div className="col-md-5 offset-md-1 mb-5">
                    <h1 style={{fontSize: '40px'}}>Stay Running & Project</h1>
                    <p className="my-4">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letter.</p>
                    <button className="btn-main">Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;