import React from 'react';
import TopNavGeneric from './TopNavGeneric';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioList from './PortfolioList';
import BackToTopButton from '../generic/BackToTopButton';
import { Helmet } from 'react-helmet-async';

const PortfolioPage = () => {
    return (
        <>
            <Helmet>
                <title>Portfolio</title>
                <meta name="title" content="Portfolio" />
                <meta name="description" content="Where Magic Happens" />

                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://next.cvlanes.com/portfolio" />
                <meta property="og:title" content="Portfolio" />
                <meta property="og:description" content="Where Magic Happens" />
                <meta property="og:image" content="https://cdn.cvlanes.com/images/covers/portfolio-collaboration-default-image.jpg" />

                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://next.cvlanes.com/portfolio" />
                <meta property="twitter:title" content="Portfolio" />
                <meta property="twitter:description" content="Where Magic Happens" />
                <meta property="twitter:image" content="https://cdn.cvlanes.com/images/covers/portfolio-collaboration-default-image.jpg" />
            </Helmet>

            <div className='portfolio-bg'>
                <TopNavGeneric />
                <div className="portfolio" id="portfolio">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-sm-12 col-md-6">
                                <div className="hero-content">
                                    <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                        <h1 className='text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow primary-title'>Where Magic Happens</h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Container>
                    <Row>
                        <Col>
                            <h1 className="text-center my-5 primary-title display-2">My Portfolio</h1>
                        </Col>
                    </Row>
                    <PortfolioList />
                </Container>
                <BackToTopButton />
                <Footer />
            </div>
        </>
    );
};

export default PortfolioPage;
