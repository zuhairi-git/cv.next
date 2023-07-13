import React from 'react';
import WOW from 'wowjs';
import TypewriterComponent from 'typewriter-effect';
import Hero from '../img/Hero-left.png'
import MyCV from '../pdf/CV.pdf'
import TopNav from '../pages/TopNav';
import BackToTopButton from '../generic/BackToTopButton';
import Footer from '../pages/Footer'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import WorkSkillset from './WorkSkillset';
import WorkExperience from './WorkExperience';
import WorkAchievements from './WorkAchievements';

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <>
                <TopNav />

                <div className='hero-bg'>
                    <div className="hero hero-bg-img" id="home">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-6">
                                    <div className="hero-content">
                                        <div className="hero-text mb-3 text-start">
                                            <div className='text-light' style={{ fontSize: '1.4rem' }}><b>I'm</b></div>
                                            <h1>Ali Zuhairi</h1>
                                            <h2 style={{ fontSize: '1.4rem' }}>
                                                <TypewriterComponent
                                                    options={{
                                                        strings: ['Professional Product Designer', 'Web Designer', 'Workflow Management Developer', 'Web UI Developer', 'Front End UI Developer', 'App Designer', 'App UI Developer'],
                                                        autoStart: true,
                                                        delay: 30,
                                                        deleteSpeed: 10,
                                                        loop: true,
                                                    }}
                                                />
                                            </h2>
                                        </div>
                                        <hr className='text-light' />
                                        <div className="reminderSelf text-start mt-4 mb-5">
                                            <h5 className='reminderSelf'>NOTE TO SELF</h5>
                                            <div className='text-light'>
                                                <FormatQuoteIcon /> Always remember to seek inspiration from the world around you. The smallest details and the foremost wonders can ignite a spark within your mind and lead you to create something exceptional. Allow your imagination to roam freely, unbound by limitations, and be fearless in pushing the boundaries of what's possible.<FormatQuoteIcon />
                                            </div>
                                            <i className='text-light'><b>- Ali</b></i>
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
                </div>

                <div className="about wow fadeIn" data-wow-delay="0.1s" id="about">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-lg-6 mt-5">
                                <div className="about-content">
                                    <div className="section-header text-left">
                                        <p className='sectionSeparator'>About Me</p>
                                        <h2>10 Years Experience</h2>
                                    </div>
                                    <div className="about-text mb-4">
                                        <p>
                                            As a product designer, the Double Diamond design model serves as the bedrock of my design process. It empowers me to embrace divergent thinking, exploring a multitude of ideas and possibilities, ultimately leading to the creation of innovative products. Simplicity and elegance are fundamental principles that underpin my design philosophy, driving me to craft designs that are both visually appealing and intuitively functional.
                                        </p>
                                        <p>
                                            Moreover, I possess strong problem-solving skills, which enable me to approach complex challenges with a strategic and analytical mindset.
                                        </p>
                                        <p>
                                            With this approach, I am well-equipped to conceptualize, prototype, and iterate upon designs that are not only visually striking but also highly functional and user-centric. By incorporating the Double Diamond model into my design process and emphasizing simplicity, elegance, and problem-solving, I consistently create designs that captivate users and solve complex challenges with precision and creativity.
                                        </p>
                                    </div>
                                    <div className='row'>
                                        <div className='col-md-6 hidden-xxs hidden-xs hidden-sm mb-5'>
                                            <a className="btn button-primary" href="#team">Get In Touch</a>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl hidden-xxl mb-4'>
                                            <a className="btn button-primary w-100" href="#teammobile">Get In Touch</a>
                                        </div>
                                        <div className='col-md-6 hidden-xxs hidden-xs hidden-sm'>
                                            <a className="btn button-primary" href={MyCV}>My CV (PDF)</a>
                                        </div>
                                        <div className='col-xs-12 col-sm-12 hidden-md hidden-lg hidden-xl hidden-xxl'>
                                            <a className="btn button-primary w-100" href={MyCV}>My CV (PDF)</a>
                                        </div>
                                    </div>

                                </div>
                            </div>
                            <WorkSkillset />

                        </div>
                    </div>
                </div>

                <WorkExperience />

                <div className='separator'></div>
                <div className='custom-bg'>
                    <div class="custom-shape-divider-top-1688373964">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                        </svg>
                    </div>

                    <WorkAchievements />
                    <div class="custom-shape-divider-bottom-1688374069">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M1200 0L0 0 892.25 114.72 1200 0z" class="shape-fill"></path>
                        </svg>
                    </div>
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
                                            <a className="btn button-primary" href="https://twitter.com/AliZohairi"><i class="fa-brands fa-twitter"></i></a>
                                            <a className="btn button-primary" href="https://www.linkedin.com/in/ali-zuhairi/"><i class="fa-brands fa-linkedin-in"></i></a>
                                            <a className="btn button-primary" href="https://www.facebook.com/zuhairi.one"><i class="fa-brands fa-facebook-f"></i></a>
                                        </div>
                                        <div className="team-social">
                                            <a className="btn button-primary" href="https://www.tiktok.com/@zuhairi.ali"><i class="fa-brands fa-tiktok"></i></a>
                                            <a className="btn button-primary" href="https://www.youtube.com/@Ali.Zuhairi"><i class="fa-brands fa-youtube"></i></a>
                                            <a className="btn button-primary" href="mailto:zohairi@live.com"><i class="fa-solid fa-envelope"></i></a>
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
                                            <a className="btn button-primary buttonIconBrands" href="https://www.tiktok.com/@zuhairi.ali"><i class="fa-brands fa-tiktok"></i></a>
                                            <a className="btn button-primary buttonIconBrands" href="https://www.youtube.com/@Ali.Zuhairi"><i class="fa-brands fa-youtube"></i></a>
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
