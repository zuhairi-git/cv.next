import React from 'react';
import WOW from 'wowjs';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import BlogAuthor from './BlogAuthor';
import BlogList from './BlogList';
import content from '../text/blog03.txt';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTopButton from '../generic/BackToTopButton';
import TextToSpeech from '../generic/TextToSpeech';
import SocialMeida from '../generic/SocialMedia';

class App extends React.Component {
    state = {
        showAdditionalContent: false,
        showHideButton: false
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
        // Content
        const contentUrl = content;
        // Date Publish
        const dateOfPublish = '2023-06-20';
        const metadata = {
            album: 'Album Name',
            artist: 'Artist Name',
            title: 'Audio Title'
        };

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
                        <h4 className='primary-title'>Claude.ai or Chat GPT: How to access Claude.ai?</h4>
                        <BlogAuthor datePublished={dateOfPublish} />

                        <div className='row mb-3 d-none'>
                            <div className='col-md-6'><TextToSpeech textFile={require('../text/blog03.txt')} /></div>
                        </div>


                        <div className='quoteContainer mb-5'>
                            <q className='mb-4'>
                                I have a feeling that with the progress of AI and the advancements in machine learning, our world will reach such a level of sophistication that most humans may appear <span className='quoteHighlight'>primitive once more.</span>
                            </q>
                            <p className='quoteLine'>
                                Ali
                            </p>
                        </div>
                        <div className='text-center'>
                            <h3 className='mt-5'>Introducing Claude.ai</h3>
                            <div className='titleUnderLine mb-4'></div>
                        </div>
                        <p>
                            Introducing
                            Here be text....
                        </p>
                        <div className='text-center mb-5 mt-5'>
                            <div className='bg-image'>
                                <img className='w-100' src={require('../img/blog/Human-AI/itsmeai.webp')} style={{ width: '100%' }} alt='AI' />
                            </div>
                        </div>



                        <SocialMeida />

                        <Container>
                            <Row>
                                <Col>
                                    <h3 className="text-center mt-5">More Posts</h3>
                                    <div className="titleUnderLine mb-4"></div>
                                </Col>
                            </Row>
                            <BlogList idsToShow={[1, 2]} style={{ fontSize: '60%' }} />
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
