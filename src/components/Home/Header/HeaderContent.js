import React from 'react';
import headerbanner from '../../../resources/Illustration/16 [Converted]@2x.png'

const HeaderContent = () => {
    return (
        <section className="container my-5 pt-5">
            <div className="row d-flex justify-content-center align-items-center">
                <div className="col-md-5 mb-5">
                    <h1 style={{fontSize: '70px'}}>Florence <br/> agency</h1>
                    <p className="my-4">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                    <button className="btn-main">See Pricing</button>
                </div>

                <div className="col-md-6 offset-md-1">
                    <img className="img-fluid" src={headerbanner} alt=""/>
                </div>
            </div>
        </section>
    );
};

export default HeaderContent;