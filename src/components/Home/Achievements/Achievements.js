import React from 'react';
import './Achievements.css';
import happy from '../../../resources/Illustration/happy-emojy3.png';
import marketing from '../../../resources/Illustration/marketing@2x.png';
import surface1 from '../../../resources/Illustration/surface1@2x.png';
import transportation from '../../../resources/Illustration/transportation@2x.png';

const Achievements = () => {
    return (
        <section className="achievement-container py-5">
                <div className="container"> 
            <div className="row pt-5">
                <div className="col-md-5 p-5 ">
                <h2 className="font-weight-bold">Our Achievements</h2>
                    <p className="text-muted"> <small> It is a long established fact that a reader will be distracted by
                        the readable content of a page when looking at its layout. The
                        point of using Lorem Ipsum is that it has a more-or-less normal
                        distribution of letter</small></p>
                </div>
                <div className="col-md-7 ">
                    <div className="row text-center">
                        <div className="col-md-6 col-sm-12 p-2">
                            <div className="happy-clients shadow achievement d-flex align-items-center pl-5">                               
                                <div className="">
                                    <img style={{width: '80px'}} src={happy} alt=""/>
                                </div>
                                <div className="">
                                    <h3>700+</h3>
                                    <p>Happy Clients</p>
                                </div>                               
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 p-2">
                            <div className="projects-completed shadow achievement d-flex align-items-center pl-5">
                                <div className="">
                                    <img className="" src={marketing} alt=""/>
                                </div>
                                <div className="">
                                    <h3>140+</h3>
                                    <p>Projects completed</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 p-2">
                            <div className="crazy-minds shadow achievement d-flex align-items-center pl-5">
                                <div className="">
                                <img src={surface1} alt=""/>
                                </div>
                                <div className="">
                                    <h3>25+</h3>
                                    <p>Crazy Mind</p>
                                </div>                                
                            </div>
                        </div>
                        <div className="col-md-6 col-sm-12 p-2 ">
                            <div className="running-projects shadow achievement d-flex align-items-center pl-5">
                                <div className="">
                                <img src={transportation} alt=""/>
                                </div>
                                <div className="">
                                    <h3>75+</h3>
                                    <p>Running Projects</p>
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </section>
        
    );
};

export default Achievements;