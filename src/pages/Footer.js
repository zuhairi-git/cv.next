import React from 'react';
import DayOfMylife from '../vector/DayOfMylife.svg'

class App extends React.Component {
    render() {
        return (
            <div className="App overflow-x-hidden">
                <div id="footer" className="footer wow fadeIn" data-wow-delay="0.2s">
                    <div className="container-fluid">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-4 col-xs-12">
                                    <div className="footer-info">
                                        <div className="footer-social">
                                            <img src={require("../img/cvlanes-bg.png")} style={{ height: '256px' }} alt="Logo" />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 align-items-center text-center">
                                    <div className="footer-info">
                                        <img src={DayOfMylife} alt="Ali" style={{ height: '230px' }} />
                                        <h3>A Day Of My Life</h3>
                                    </div>
                                </div>
                                <div className="col-md-4 col-xs-12 mb-2">
                                    <div className="footer-info">
                                        <div className='mt-3 fs-5 text-start ps-3 text-white'>
                                            <div className='mb-3'>
                                                <h4 className='mb-0 text-light'>Ali Zuhairi</h4>
                                                <div className='footer-text'>Professional Product Designer</div>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='mb-0 text-light'>Links</h4>
                                                <div>
                                                    <a href='/' className='footer-text footer-links footer-link-uderline'>Home</a><br />
                                                    <a href='/portfolio' className='footer-text footer-links footer-link-uderline'>Portfolio Projects</a><br />
                                                    <div className='border-start'>
                                                        <a href='/portfolio/collaboration' className='ms-3 footer-text footer-links footer-link-uderline'>Collaboration Workflow Platform</a><br />
                                                        <a href='/portfolio/jobseeking' className='ms-3 footer-text footer-links footer-link-uderline'>Job Seeking</a><br />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className='mb-3'>
                                                <h4 className='mb-0 text-light'>Address</h4>
                                                <div className='footer-text'>Espoo, Suurpelto</div>
                                                <div className='footer-text'>044 2 844 844</div>
                                                <div className='footer-text'>zohairi@live.com</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container copyright">
                            <p>&copy; CV Lanes 2023 | Made With React JS</p>
                        </div>
                    </div>
                </div>


            </div>

        );
    }
}

export default App;
