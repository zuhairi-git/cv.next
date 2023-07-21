import React from 'react';
import WOW from 'wowjs';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import BlogAuthor from './BlogAuthor';
import BlogList from './BlogList';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTopButton from '../generic/BackToTopButton';
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
        // Date Publish
        const dateOfPublish = '2023-06-20';

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

                        <div className='quoteContainer mb-5'>
                            <q className='mb-4'>
                                I have a feeling that with the progress of AI and the advancements in machine learning, our world will reach such a level of sophistication that most humans may appear <span className='quoteHighlight'>primitive once more.</span>
                            </q>
                            <p className='quoteLine'>
                                Ali
                            </p>
                        </div>
                        <section>
                            <div className='text-center'>
                                <h3 className='mt-5'>Introducing Claude.ai</h3>
                                <div className='titleUnderLine mb-4'></div>
                            </div>
                            <p>
                                Introducing Claude.ai
                                Claude.ai is an AI assistant developed by Anthropic with a primary focus on being helpful, honest, and harmless. It possesses several key capabilities that make it stand out:
                                <ol>
                                    <li>Natural Language Processing: Claude excels at comprehending and responding to complex natural language requests and queries.</li>
                                    <li>Conversational Intelligence: Designed for seamless, contextually relevant conversations, Claude engages users in a natural dialogue.</li>
                                    <li>Limited World Knowledge: While Claude has some general knowledge to address basic factual questions, it currently doesn't match the knowledge depth of other AI assistants.</li>
                                    <li>User Privacy Focus: Committed to safeguarding user privacy and data, Claude does not collect or store personal information.</li>
                                    <li>Honesty: Claude is upfront about its limitations and won't attempt to guess answers, ensuring transparency in its responses.</li>
                                    <li>Helpfulness: The primary objective of Claude is to offer valuable information and steer users in the right direction.</li>
                                    <li> Safety-by-Design: Anthropic has diligently crafted Claude to be safe, preventing it from providing harmful, dangerous, or unethical responses.</li>
                                </ol>
                            </p>
                            <div className='text-center mb-5 mt-5'>
                                <div className='bg-image'>
                                    <img className='w-100' src={require('../img/blog/Human-AI/itsmeai.webp')} style={{ width: '100%' }} alt='AI' />
                                </div>
                            </div>
                        </section>

                        <section>
                            <div className='text-center'>
                                <h3 className='mt-5'>How to access?</h3>
                                <div className='titleUnderLine mb-4'></div>
                            </div>
                            <p>
                                To access Claude.ai, there are different options depending on your location. If you are in the US or UK, you can readily find Claude.ai available. However, if you reside elsewhere, you can still access it by using a VPN (Virtual Private Network). One recommended method is to use the Opera browser on your mobile device, which offers a built-in VPN service that is free to use. By setting the VPN to the United States, you can access Claude.ai from any location.
                                Alternatively, if you have a premium VPN subscription, you can use that instead. Simply connect to a server in the United States to access Claude.ai.
                                As of July 21, 2023, I successfully accessed Claude.ai free of charge by following these steps:
                                <ol>
                                    <li>Download the Opera browser from either the Google Play Store (for Android devices) or the App Store (for iOS devices).</li>
                                    <li>Install the browser on your mobile device.</li>
                                    <li>Open the Opera browser and navigate to the settings menu.</li>
                                    <li>Look for the VPN option and enable it.</li>
                                    <li>Select the United States as the VPN server location.</li>
                                    <li>Once the VPN is active, visit Claude.ai, and you should be able to access the website as if you were located in the United States.</li>
                                </ol>
                            </p>
                            <div className='text-center mb-5 mt-5'>
                                <div className='bg-image'>
                                    <img className='w-100' src={require('../img/blog/claudebanner.webp')} style={{ width: '100%' }} alt='AI' />
                                </div>
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
