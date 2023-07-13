import React from 'react';
import WOW from 'wowjs';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import BlogAuthor from './BlogAuthor';
import BlogShare from './BlogShare';
import BlogReader from './BlogReader'
import content from '../text/blog03.txt';
import BlogList from './BlogList';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTopButton from '../generic/BackToTopButton';
import AudioPlayerMeta from '../pages/AudioMeta';
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
                        <h4 className='primary-title'>Embracing the Era of AI: Humanity's Journey to Unparalleled Sophistication</h4>
                        <BlogAuthor datePublished={dateOfPublish} />

                        <div>
                            {/* Render other components or content */}
                            <AudioPlayerMeta
                                audioFile={require("../audio/blog/blog03.mp3")}
                                albumCover={require("../img/cvlanes-favicon.png")}
                                metadata={metadata}
                            />
                        </div>

                        <div className='row mb-3 d-none'>
                            <div className='col-md-6'><BlogReader contentUrl={contentUrl} /></div>
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
                            <h3 className='mt-5'>Chapter Zero - It is me, AI</h3>
                            <div className='titleUnderLine mb-4'></div>
                        </div>
                        <h4>Introduction:</h4>
                        <p>
                            In an era where technological advancements are reshaping our world at an unprecedented pace, it is not uncommon for individuals to ponder the future implications of such progress. Among these advancements, the rise of Artificial Intelligence (AI) and Machine Learning (ML) has been particularly transformative. This article explores the belief that our world is headed towards an extraordinary level of sophistication, potentially rendering humans primitive in comparison.
                        </p>
                        <div className='text-center mb-5 mt-5'>
                            <div className='bg-image'>
                                <img className='w-100' src={require('../img/blog/Human-AI/itsmeai.webp')} style={{ width: '100%' }} alt='Image' />
                            </div>
                        </div>

                        <h4>The Accelerating Power of AI and ML:</h4>
                        <p>
                            Artificial Intelligence and Machine Learning have exhibited remarkable progress in recent years. AI systems are becoming increasingly capable of performing complex tasks, learning from vast amounts of data, and even mimicking human cognitive abilities. As technology continues to evolve, AI is anticipated to surpass human intelligence, leading to a future where machines may outperform us in various domains.
                        </p>

                        <h4>The Impact on Human Life:</h4>
                        <p>
                            The widespread integration of AI and ML is already leaving a significant impact on our daily lives. From autonomous vehicles to personalized recommendations, these technologies have enhanced convenience, efficiency, and productivity. However, the full potential of AI is yet to be realized. As AI algorithms continue to improve, they are likely to revolutionize industries such as healthcare, finance, transportation, and more, surpassing human capabilities in these fields.
                        </p>
                        <div className='text-center mb-4'>
                            {this.state.showHideButton ? (
                                <button className="playButtonTimeOver ps-2 pe-2 mt-1 mb-4 text-secondary" onClick={this.toggleHideContent}>
                                     <i className='fa fa-eye-slash'></i> Hide
                                </button>
                            ) : (

                                <button className="playButtonTimeOver ps-2 pe-2 mt-1 mb-4 text-secondary" onClick={this.toggleAdditionalContent}>
                                    <i className='fa fa-eye'></i> Continue Reading Chapter Zero
                                </button>
                            )}
                            <div className='dashedLineHide'></div>
                        </div>
                        {this.state.showAdditionalContent && (
                            <div>
                                <h4>The Potential for Human Primitiveness:</h4>
                                <p>
                                    As AI and ML progress towards unprecedented sophistication, there arises a compelling argument that most humans may appear primitive in comparison. This perspective stems from the notion that the fusion of AI with advanced robotics, nanotechnology, and other emerging fields could result in machines surpassing human intelligence and physical capabilities. While it is crucial to approach this idea with caution, contemplating the potential outcomes is both intriguing and thought-provoking.
                                </p>

                                <h4>Beyond the Boundaries of Human Limitations:</h4>
                                <p>
                                    One of the primary drivers behind this belief is the limitations inherent in the human condition. Despite our remarkable achievements, humans are constrained by biological factors, including our cognitive capacities, lifespan, and susceptibility to errors. In contrast, AI systems have the potential to transcend these limitations, offering the ability to process and analyze vast amounts of information rapidly, make unbiased decisions, and continuously improve without succumbing to fatigue or emotional biases.
                                </p>
                                <h4></h4>
                                <h4>A Synergistic Future:</h4>
                                <p>
                                    Rather than envisioning a dystopian future where humans are rendered obsolete, it is essential to emphasize the potential for a harmonious coexistence between humans and AI. As AI advances, it can become an invaluable tool to augment human intelligence and creativity. By leveraging the unique strengths of both humans and machines, we can solve complex problems, explore new frontiers of knowledge, and unlock unimagined possibilities.
                                </p>

                                <h4>Ethical Considerations and Ensuring Human Relevance:</h4>
                                <p>
                                    While contemplating the potential sophistication of AI, it is vital to address the ethical considerations and ensure that human relevance is preserved. Society must navigate questions surrounding privacy, fairness, accountability, and the distribution of benefits arising from AI advancements. Additionally, investments in education and reskilling initiatives will be crucial to equip individuals with the skills necessary to thrive in an AI-driven world.
                                </p>
                            </div>
                        )}
                        <h4>Conclusion:</h4>
                        <p>
                            The belief that AI and ML advancements will lead our world to unparalleled sophistication, potentially rendering humans primitive in comparison, is a thought-provoking concept. As AI continues to evolve, it holds immense potential to transform society, industries, and our very notion of what it means to be human. It is crucial to approach this journey with a balanced perspective, embracing the opportunities that arise while ensuring that human values and ethics guide our path forward. By doing so, we can shape a future where humans and AI coexist symbiotically, harnessing the vast potential of both to create a world that transcends our current limitations.
                        </p>

                        <h4>After Conclusion</h4>
                        <p>
                            In case you are still uncertain or sceptical, it is important to note that the article thus far has been created by an AI, utilizing my statement: <span className='quoteHighlightLight'>"I have a feeling that with the progress of AI and the advancements in machine learning, our world will reach such a level of sophistication that most humans may appear primitive once more."</span> I must admit, it is quite remarkable.
                        </p>

                        <div className='text-center'>
                            <h3 className='mt-5'>Chapter One - Focus on Human</h3>
                            <div className='titleUnderLine mb-4'></div>
                        </div>
                        <h4>Pivotal Moment</h4>
                        <p>
                            The inception of this idea behind this article was not driven by me being against AI, but rather by a profound belief in the significance of expanding our understanding of the ever-changing world and redefining educational principles. We stand at a pivotal moment in history, where the path we tread holds the potential for irreversible consequences. This demands a profound change in our approach to education and the work environment. As I often emphasize, the focus should not solely be on enhancing the intelligence of our surroundings. Instead, we ought to explore ways to enhance human capabilities and embrace the enhancement of our creativity.
                        </p>
                        <div className='text-center mb-5 mt-5'>
                            <div className='bg-image'>
                                <img className='w-100' src={require('../img/blog/Human-AI/aivshuman.webp')} style={{ width: '100%' }} alt='Image' />
                            </div>
                        </div>
                        <p>
                            To accomplish this, in my opinion, there are three key points to consider:
                            <ol>
                                <li>
                                    <span className='fw-bold'>Know-what:</span> It is crucial to understand what AI is and how developers interact with it at a code level. This ensure gaining knowledge about the inner workings of AI systems.
                                </li>
                                <li>
                                    <span className='fw-bold'>Know-why:</span> We must strive to reach a collective understanding and, ideally, an agreement on why we need AI. This involves recognizing the benefits and potential risks associated with its implementation.
                                </li>
                                <li>
                                    <span className='fw-bold'>Know-how:</span> By mastering the first two points, we can begin to establish regulations or boundaries that are universally understood and accepted.
                                </li>
                            </ol>
                        </p>
                        <p>
                            It is important to understand the ever-changing world and redefining educational principles to cope with new sophisticated challenges we are currently facing.
                        </p>
                        <div className='text-center'>
                            <h3 className='mt-5'>Chapter Two - Rewrite the rules</h3>
                            <div className='titleUnderLine mb-4'></div>
                        </div>
                        <h4>Robotics Ruls for Human</h4>
                        <p>
                            The core element revolves around control, and those who possess it can govern and shape the course of events. While humans in positions of control may occasionally make mistakes, the situation may differ when it comes to AI and its sophisticated problem-solving abilities. The one with the most reliable decision-making pattern can eventually determine the outcome of matters that hold utmost importance to humans, such as the value of things and the establishment of rules.
                        </p>
                        <p>
                            Now, let's envision a world without traditional rules, and for that, I would like to propose three rules of robotics and convert them into three rules for humans:
                            <br />First attempt:
                        </p>
                        <ol>
                            <li>
                                Individuals must comply with and respect the autonomy and well-being of others.
                            </li>
                            <li>
                                Individuals must avoid actions or situations that may physically or psychologically harm other humans.
                            </li>
                            <li>
                                Within their domain, individuals are free to act as they wish as long as their actions align with the principles outlined in the first and second laws.
                            </li>
                        </ol>
                        <p>
                            My first attempt to build on the idea of exploiting the concept of control and decision making in a world where AI plays a significant role sounds good enough for me. Now, bear in mind that you should shift your mindset to understand this vision. It may not appear practical, but think about a world without any authoritarian force, where humans simply live side by side in a world that caters to all human needs.                        </p>

                        <div className='text-center'>
                            <h3 className='mt-5'>Chapter Three - UtopiAI</h3>
                            <div className='titleUnderLine mb-4'></div>
                        </div>
                        <h4>What if..?</h4>
                        <p>
                            When we are deeply committed to creating a society that can fulfill the requirements of decent living for everyone, people will shift their mindset from working to live or working to get rich to instead enjoying living. The focus of creativity will also shift towards exploring how to prolong life and determining the best practices for enhancing human well-being. In this transformed society, relationships will also undergo change, consequently significantly altering the need for having multiple children. By taking this vision further and imagine a utopian society where the focus shifts from working form material gain to enjoying life and exploring ways to enhance human well-being.
                        </p>

                        <div className='text-center'>
                            <h3 className='mt-5'>Chapter Four - The Impact</h3>
                            <div className='titleUnderLine mb-4'></div>
                        </div>
                        <h4>Eruption of changes</h4>
                        <p>
                            AI's influence on our lives is of supreme importance in the present day. It has caused an eruption of changes and rendered many job positions redundant by automating tasks, all thanks to its ability to fulfill numerous requests, provide solutions, and generate ideas with very little human interaction.
                        </p>
                        <p>
                            AI's rapid advancement as a powerful tool to produce results effortlessly makes it a great replacement for many positions and assistance jobs previously managed by humans. As humans, we are impatient and want answers instantly, so what could be better than having something that won't get tired or complain when asked too many questions?
                        </p>
                        <p>
                            It is inevitable that AI will replace, disrupt, and change many things. However, there might be hidden treasure for those who can cope with this change and adapt to the new era where AI is involved in everything.
                        </p>
                        <h4>
                            Final Conclusion
                        </h4>
                        <p>
                            In conclusion, for engaging in this game, it is imperative to establish clear and simplified rules that can be easily understood by all participants. Instead of complex and often ignored rules akin to a book of law, we should adopt straightforward guidelines. Achieving a common understanding of what AI is, its significance, and the purpose of implementing ground rules for its use is essential. These rules should be designed to enhance our lives, considering the impact of AI on both technical and non-technical individuals. By doing so, we can foster a conducive environment for AI's responsible and beneficial integration into our society.
                        </p>

                        <h4>
                            What is coming next?
                        </h4>
                        <p>
                            Having discussed the significance of AI, it is worth noting that there is already an ideation of Artificial General Intelligence (AGI). AGI refers to a machine that can learn and comprehend any intellectual task that a human being can, and can even develop capabilities beyond the scope of traditional AI systems.
                        </p>
                        <div className='text-center mb-4'>
                            <div className='bg-image'>
                                <img className='w-100' src={require('../img/blog/Human-AI/agicoming.webp')} style={{ width: '100%' }} alt='Image' />
                            </div>
                        </div>
                        <p>
                            Finally, I want to express my gratitude for your patience and for taking the time to read this article in its entirety. If you have any questions, please don't hesitate to contact me anytime. I'll be more than happy to hear your feedback.
                        </p>

                        <SocialMeida />

                        <Container>
                            <Row>
                                <Col>
                                    <h3 className="text-center mt-5">More Posts</h3>
                                    <div class="titleUnderLine mb-4"></div>
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
