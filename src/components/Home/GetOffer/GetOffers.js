import React from 'react';
import './GetOffers.css'

const GetOffers = () => {
    return (
     <section className="offers-container ">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <div className="text-center pt-5 ">
                        <h1 className="font-weight-bold" style={{fontSize: '35px'}}>Get your design right, right now</h1>
                        <p className="text-muted p-2">Be the first know our latest offers and updates!</p>          
                        <div className="d-flex justify-content-center align-items-center shadow rounded email-submit">
                            <input className="form-control align-self-center mr-sm-2" placeholder="Enter your email address" />
                            <button className="mr-2 w-50">Get Started</button>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
     </section>
    );
};

export default GetOffers;