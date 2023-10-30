import React from 'react';
import WOW from 'wowjs';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import BlogAuthor from './BlogAuthor';
import BlogList from './BlogList';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTopButton from '../generic/BackToTopButton';
import SocialMeida from '../generic/SocialMedia';
import { CopyrightImageLong } from '../generic/Functions';

class App extends React.Component {
    state = {
        showAdditionalContent: true,
        showHideButton: false,
        // Copyright Image
        showCopyrightImage: true,

    };

    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }

    toggleAdditionalContent = () => {
        this.setState(prevState => ({
            showAdditionalContent: !prevState.showAdditionalContent,
            showHideButton: true
        }));
    };

    toggleHideContent = () => {
        this.setState(prevState => ({
            showAdditionalContent: !prevState.showAdditionalContent,
            showHideButton: false
        }));
    };
    render() {
        // Date Publish
        const dateOfPublish = '16-08-2023';

        return (
            <div>
                <TopNavGeneric />
                <div className="blog01" id="home">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                        <h1 className='primary-title text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>It's blogging time!</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className='blog-width m-5-xl m-5-lg m-1-xs m-1-sm mx-auto'>
                        <h4 className='primary-title'>Suggesting the implementation of a transparency mandate for the hiring procedure</h4>
                        <BlogAuthor datePublished={dateOfPublish} />

                        <div className='quoteContainer mb-5'>
                            <q className='mb-4'>
                                Enhancing transparency isn't just about processes; it's about crafting a seamless journey that empowers job seekers and employers. Verifying job posts and applicants adds security, while a unified platform fosters accessibility and efficient hiring. The journey should be fueled by continuous improvement and personalized growth.
                            </q>
                            <p className='quoteLine'>
                                Ali
                            </p>
                        </div>
                        <section>
                            <div className='text-center'>
                                <h3 className='mt-5'>Hiring process</h3>
                                <div className='titleUnderLine mb-4'></div>
                            </div>
                            <p>
                                The idea behind this is not to solely make some processes more transparent, but also a way to improve the experience for both job seekers and the employers by creating  a seamless experience.
                            </p>
                            <p>
                                Additionally, it's crucial to establish a method for verifying both the job posting and the applicant to filter out the scams and enhance overall security.
                            </p>
                            <p>
                                In order to achieve transparency in the hiring process, it is essential that the process is accessible to all job applicants. This involves clearly outlining the job requirements and conducting a thorough comparison of applicants to determine the most suitable candidate in all steps.
                            </p>
                            <div className='text-center mb-1 mt-1'>
                                <div className='bg-image'>
                                    <img className='rounded' src={require('../img/blog/hiring-process/Hiring-Flow.png')} style={{ maxWidth: '100%' }} alt='Framwork' />
                                </div>
                            </div>

                            <p>
                                To streamline this process, a unified platform should be established to serve as a centralized database for job seekers. This eliminates the need for job applicants to register across multiple platforms. Instead, they can easily register for platforms that have already been integrated with the TE-office.
                            </p>
                            <p>
                                The proposed framework for utilizing this database includes exploring options for seamless integration with various platforms, ensuring a cohesive and efficient experience for both employers and job seekers.
                            </p>
                            <div className='text-center mb-5 mt-5'>
                                <div className='bg-image'>
                                    <img className='w-100' src={require('../img/blog/hiring-process/hiring-process.jpg')} style={{ width: '100%' }} alt='Hiring' />
                                </div>
                            </div>
                            <p>
                                To nurture a continuous dedication to self-improvement and fortify one's self-assurance, it is crucial to provide adequate information that is customized to the particular areas in which personal growth is being pursued.
                                This transformation will fundamentally reshape the hiring process, shifting it from a simple acceptance or rejection model to a platform that can provide constructive feedback for enhancement. Furthermore, you can see your improvement and growth by sign in into one platform.
                            </p>
                        </section>

                        <section>
                            <div className='text-center'>
                                <h3 className='mt-5'>Framework</h3>
                                <div className='titleUnderLine mb-4'></div>
                            </div>
                            <div className='mb-5'>
                                <h4>
                                    Permission to get your information from Te-office:
                                </h4>
                                <p>
                                    For a more comprehensive grasp of the idea, let's suppose that the TE-office possesses both the capability and a user-friendly API suitable for integration across all platforms. This API can serve as the foundational registration method, allowing all TE-office job seeker clients with appropriate access to seamlessly apply for jobs.
                                </p>
                                <p>
                                    When using TE-office for applications, employers in Finland can be confident that the applicant possesses a valid job permit and that the provided information is reliable.
                                </p>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        {this.state.showCopyrightImage && <CopyrightImageLong />}
                                        <img className='rounded' src={require('../img/blog/hiring-process/Permission.png')} style={{ maxWidth: '100%' }} alt='Framwork' />
                                    </div>
                                </div>
                                <p>
                                    In order to submit an application for a job that mandates registration, you have the option to sign-in/sign-up using your TE-office account. This allows for the automatic population of many essential fields, such as your name, CV, phone number, email address, and more.
                                </p>
                            </div>

                            <div className='mb-5'>
                                <h4>
                                    Fill the Form
                                </h4>
                                <p>
                                    Each job posting should include a section where applicants can specify their relevant skills based on the job description. This approach simplifies the process of identifying the most suitable candidates and serves as a solid starting point for the selection process.
                                </p>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        {this.state.showCopyrightImage && <CopyrightImageLong />}
                                        <img className='rounded' src={require('../img/blog/hiring-process/Fill-Form.png')} style={{ maxWidth: '100%' }} alt='Framwork' />
                                    </div>
                                    <div className='description ms-3 mb-3'>This should be part of the process, rather than the entire process itself.</div>
                                </div>
                            </div>

                            <div className='mb-5'>
                                <h4>
                                    Candidates Qualifications:
                                </h4>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        {this.state.showCopyrightImage && <CopyrightImageLong />}
                                        <img className='rounded' src={require('../img/blog/hiring-process/Candidates.png')} style={{ maxWidth: '100%' }} alt='Framwork' />
                                    </div>
                                    <div className='description ms-3 mb-3'>To ensure the privacy of personal data as set by GDPR, it is necessary to encrypt the names of the candidates.</div>
                                </div>
                                <p>
                                    Text
                                </p>
                            </div>
                            <div className='mb-5'>
                                <h4>
                                    First Interview:
                                </h4>
                                <div className='text-center mb-1 mt-1'>
                                    <div className='bg-image'>
                                        {this.state.showCopyrightImage && <CopyrightImageLong />}
                                        <img className='rounded' src={require('../img/blog/hiring-process/Interview-1.png')} style={{ maxWidth: '100%' }} alt='Framwork' />
                                    </div>
                                </div>
                                <p>
                                    Text
                                </p>
                            </div>
                        </section>

                        <SocialMeida />

                        <Container>
                            <Row>
                                <Col>
                                    <h3 className="text-center mt-5">More Posts</h3>
                                    <div className="titleUnderLine mb-4"></div>
                                </Col>
                            </Row>
                            <BlogList idsToShow={[1, 2, 3]} style={{ fontSize: '60%' }} />
                        </Container>
                    </div>

                </div>
                <BackToTopButton />
                <Footer />
            </div>

        );
    }
}

export default App;
