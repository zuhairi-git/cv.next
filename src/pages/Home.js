import React from 'react';
import WOW from 'wowjs';
import TopNav from '../pages/TopNav';
import BackToTopButton from '../generic/BackToTopButton';
import Footer from '../pages/Footer'
import WorkHero from './WorkHero';
import WorkAbout from './WorkAbout';
import WorkExperience from './WorkExperience';
import WorkAchievements from './WorkAchievements';
import { Helmet } from 'react-helmet';

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <>
                <Helmet>
                    <title>CV Lanes | Webpage</title>
                    <meta name="title" content="CV Lanes | Webpage" />
                    <meta name="description" content="Professional Product/UI/UX Designer" />

                    <meta property="og:type" content="website" />
                    <meta property="og:url" content="https://next.cvlanes.com/" />
                    <meta property="og:title" content="CV Lanes | Webpage" />
                    <meta property="og:description" content="Professional Product/UI/UX Designer" />
                    <meta property="og:image" content="../img/covers/default-image-wide.jpg" />

                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content="https://next.cvlanes.com/" />
                    <meta property="twitter:title" content="CV Lanes | Webpage" />
                    <meta property="twitter:description" content="Professional Product/UI/UX Designer" />
                    <meta property="twitter:image" content="../img/covers/default-image-wide.jpg" />
                </Helmet>

                <TopNav />

                <WorkHero />
                <div className="custom-shape-divider-bottom-1688374069">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
                <WorkAbout />
                <div className="custom-shape-divider-bottom-1688374069">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
                <WorkExperience />
                <div className="custom-shape-divider-bottom-1688374069">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>
                <WorkAchievements />
                <div className="custom-shape-divider-bottom-1688374069">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 0L0 0 892.25 114.72 1200 0z" className="shape-fill"></path>
                    </svg>
                </div>

                <div className="team mb-5 mt-5 hidden-xxs hidden-xs hidden-sm" id="team">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>Social Media</p>
                            <h2>Get in touch with me</h2>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="team-item">
                                    <div className="team-img">
                                        <img src={require("../img/takeAction.jpg")} alt="Ali" />
                                    </div>
                                    <div className="team-text text-start">
                                        <div style={{ borderLeft: 'solid 3px #FFE54C', paddingLeft: '10px' }} className='mb-3'>
                                            <h2>Ali Zuhairi</h2>
                                            <h4 style={{ marginBottom: '0', lineHeight: '20px' }}>Creative Problem-Solving, Divergent Thinking, Thoughtful Disruption & Exploring New Perspectives</h4>
                                        </div>
                                        <div className="team-social pb-1">
                                            <a className="btn button-primary" href="https://twitter.com/AliZohairi"><i className="fa-brands fa-twitter"></i></a>
                                            <a className="btn button-primary" href="https://www.linkedin.com/in/ali-zuhairi/"><i className="fa-brands fa-linkedin-in"></i></a>
                                            <a className="btn button-primary" href="https://www.facebook.com/zuhairi.one"><i className="fa-brands fa-facebook-f"></i></a>
                                        </div>
                                        <div className="team-social">
                                            <a className="btn button-primary" href="https://www.tiktok.com/@zuhairi.ali"><i className="fa-brands fa-tiktok"></i></a>
                                            <a className="btn button-primary" href="https://www.youtube.com/@Ali.Zuhairi"><i className="fa-brands fa-youtube"></i></a>
                                            <a className="btn button-primary" href="mailto:zohairi@live.com"><i className="fa-solid fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="team mb-5 mt-5 hidden-md hidden-lg hidden-xl hidden-xxl" id="teammobile">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>Social Media</p>
                            <h2>Get in touch with me</h2>
                        </div>
                        <div className="row d-flex justify-content-center">
                            <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.0s">
                                <div className="team-item">
                                    <div className="team-img" style={{ width: '100%' }}>
                                        <img src={require("../img/takeAction.jpg")} alt="Ali" />
                                    </div>
                                </div>
                                <div className="col-lg-12 wow fadeInUp" data-wow-delay="0.0s">
                                    <div className="text-start">
                                        <div style={{ borderLeft: 'solid 3px #FFE54C', paddingLeft: '10px' }} className='mb-3'>
                                            <h2>Ali Zuhairi</h2>
                                            <p style={{ marginBottom: '0', lineHeight: '20px' }}>Creative Problem-Solving, Divergent Thinking, Thoughtful Disruption & Exploring New Perspectives</p>
                                        </div>
                                        <div className="team-social text-center d-flex pb-1">
                                            <a className="btn button-primary buttonIconBrands" href="https://twitter.com/AliZohairi"><i className="fab fa-twitter"></i></a>
                                            <a className="btn button-primary buttonIconBrands" href="https://www.linkedin.com/in/ali-zuhairi/"><i className="fab fa-linkedin-in"></i></a>
                                            <a className="btn button-primary buttonIconBrands" href="https://www.facebook.com/zuhairi.one"><i className="fab fa-facebook-f"></i></a>
                                            <a className="btn button-primary buttonIconBrands" href="https://www.tiktok.com/@zuhairi.ali"><i className="fa-brands fa-tiktok"></i></a>
                                            <a className="btn button-primary buttonIconBrands" href="https://www.youtube.com/@Ali.Zuhairi"><i className="fa-brands fa-youtube"></i></a>
                                            <a className="btn button-primary buttonIconBrands" href="mailto:zohairi@live.com"><i className="fa fa-envelope"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='separator'></div>

                <div className="review mt-5" data-wow-delay="0.1s" id="review">
                    <div className="container">
                        <div className="section-header text-center wow zoomIn" data-wow-delay="0.1s">
                            <p className='sectionSeparator'>Thank You for the</p>
                            <h2>Recommendations</h2>
                        </div>

                        <div className="review-icon">
                            <i className="fa fa-quote-left"></i>
                        </div>
                        <div className="reviews-carousel row d-flex">
                            <div className="col-md-12 col-xs-12 wow fadeIn flex-fill mb-4" data-wow-delay="0.3s">
                                <div className="review-image-square">
                                    <img className='image-square bg-info' src={require("../img/review-constantine.png")} alt="Buda" />
                                </div>
                                <div className="review-item flex-fill">
                                    <div className="review-text custom-bg">
                                        <div className='text-start mb-3'>
                                            Ali is an exceptional and experienced UI/UX designer with more than ten years of professional experience specialising in product design for technology companies. Ali believes that design is not about deliverables and beautiful pixels but about solving problems and achieving business and user goals. As a product designer, Ali focuses on usability, user experience, and user research in his designs. He has worked with small and large teams as well as a freelancer and enjoys the challenge of solving user problems. He always delivers on time and on budget.
                                        </div>
                                        <h3>Constantin Buda</h3>
                                        <div>CMO at Vidalico Digital | Hubspot Agency Partner | SicTic Member</div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-12 col-xs-12 wow fadeIn flex-fill mb-4" data-wow-delay="0.4s">
                                <div className="review-image-square">
                                    <img className='image-square bg-info' src={require("../img/review-fahad.png")} alt="M" />
                                </div>
                                <div className="review-item flex-fill">
                                    <div className="review-text custom-bg">
                                        <div className='text-start mb-3'>
                                            Ali is a creative product designer. You will find a lot of artists with too busy layouts and art forms. But Ali takes a lead in impressive yet simple and relevant product designs. He has this cunning ability to solve complex problem with simple solutions using his design skills. His arts speaks visually, does the job perfectly and leaves a long lasting impression. I've worked with Ali in past and it was truly a fun experience. Would love to do that again and I highly recommend Ali too.
                                        </div>
                                        <h3>Fahad M</h3>
                                        <div>IT Contractor | Travelodge Hotels Limited</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <BackToTopButton />
                <Footer />

            </>
        );
    }
}

export default App;
