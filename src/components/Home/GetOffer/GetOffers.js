import React from 'react';
import './GetOffers.css'

const GetOffers = () => {
    return (
     <section className="offers-container ">
            <div className="text-center pt-5 ">
            <h1 className="font-weight-bold">Get your design right, right now</h1>
            <p className="text-muted p-2">Be the first know our latest offers and updates!
            </p>          
            <div className="d-flex justify-content-center shadow rounded email-submit">
                <input className="form-control align-self-center mr-sm-2" placeholder="Enter your email address" />
                <button className="btn rounded px-3 my-1 my-sm-0 align-self-center text-light">Get Started</button>
            </div>
        </div>
     </section>
    );
};

export default GetOffers;