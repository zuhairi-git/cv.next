import React from 'react';
import WOW from 'wowjs';
import TypewriterComponent from 'typewriter-effect';
import Hero from '../img/Hero-left.png'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

class WorkHero extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <>
                <div className="container">
                    <div className="hero" id="home">
                        <div className="row align-items-center justify-content-center">
                            <div className="col-sm-12 col-md-5">
                                <div className="p-3">
                                    <div className="mb-3">
                                        <div style={{ fontSize: '1.4rem' }}><b>I'm</b></div>
                                        <h1 className="display-2 fw-bold">Ali Al-Zuhairi</h1>
                                        <h2 style={{ fontSize: '1.4rem', minHeight: '3.5rem' }}>
                                            <TypewriterComponent
                                                options={{
                                                    strings: ['Professional Product Designer', 'Product Owner', 'Web Designer', 'Workflow Management Developer', 'Web UI Developer', 'Front End UI Developer', 'App Designer', 'App UI Developer'],
                                                    autoStart: true,
                                                    delay: 30,
                                                    deleteSpeed: 10,
                                                    loop: true,
                                                }}
                                            />
                                        </h2>
                                    </div>
                                    <hr />
                                    <div className="reminderSelf text-start mt-4 mb-5">
                                        <h5 className='reminderSelf'>NOTE TO SELF</h5>
                                        <div>
                                            <FormatQuoteIcon /> Always remember to seek inspiration from the world around you. The smallest details and the foremost wonders can ignite a spark within your mind and lead you to create something exceptional. Allow your imagination to roam freely, unbound by limitations, and be fearless in pushing the boundaries of what's possible.<FormatQuoteIcon />
                                        </div>
                                        <i><b>- Ali</b></i>
                                    </div>
                                    <div className='mb-3 d-none'>
                                        <a className="btn button-primary mb-2 hidden-xxs hidden-xs hidden-sm" href="#team">Contact Me</a>
                                        <a className="btn button-primary mb-2 hidden-md hidden-lg hidden-xl hidden-xxl" href="#teammobile">Contact Me</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-6 d-md-block">
                                <div className="hero-image pe-0 wow zoomIn" data-wow-delay="0.1s">
                                    <img src={Hero} alt="Ali" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        );
    }
}

export default WorkHero;
