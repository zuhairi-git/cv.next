import React from 'react';
import TopNavGeneric from './TopNavGeneric';
import Footer from './Footer';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioList from './PortfolioList';
import BackToTopButton from '../generic/BackToTopButton';

const PortfolioPage = () => {
    return (

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
    );
};
export default PortfolioPage;
