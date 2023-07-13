import React from 'react';
import WOW from 'wowjs';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import { Row, Col, Card, Button } from 'react-bootstrap';
import BackToTopButton from '../generic/BackToTopButton';

class App extends React.Component {
    componentDidMount() {
        new WOW.WOW({
            live: false
        }).init();
    }
    render() {
        return (
            <div> {/* className="App overflow-x-hidden" */}
                <TopNavGeneric />
                <div className="App overflow-x-hidden">
                    <div className="collaboration" id="collaboration">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-sm-12 col-md-6">
                                    <div className="hero-content">
                                        <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                            <h1 className='primary-title text-light mt-lg-5 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>Collaboration Workflow Platform</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <h2 className='primary-title'>Collaboration Workflow Platform</h2>
                            <h5 className='mt-4'>Introduction</h5>
                            <p>
                                At the core of Collaboration Workflow Platform lies creativity, interconnectivity, and collaboration. As the name suggests, our service is designed to facilitate effective teamwork and streamline workflows, but we want to delve deeper into how our platform can help unleash your creative potential.
                            </p>
                            <p>
                                Our Collaboration Workflow Platform is designed to foster a culture of creativity by providing a seamless and efficient platform for live collaboration on documents. With our suite of tools and features, team members can work together in real-time, exchanging feedback and finalizing deals and content faster.
                                In addition, our platform promotes interconnectivity by removing communication barriers and enabling customers and team members to connect across various locations, time zones, and devices. This integration ensures that everyone is on the same page, improving communication and collaboration.
                                Lastly, Collaboration Workflow Platform emphasizes collaboration by providing a space for teamwork to thrive.
                            </p>
                            <p>
                                Our platform allows team members to work together seamlessly, sharing documents and resources, and leveraging each other's strengths. This collaborative approach encourages individuals to work towards common goals, resulting in greater outcomes.
                            </p>
                            <div className="row mt-5">
                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Project Type</h5>
                                    <p>Landing Page, Collaboration Workflow Platform (Web and Mobile), Mobile Application</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Timeline</h5>
                                    <p>18 Weeks</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Roles</h5>
                                    <p>Product Designer | Product Manager | User Research | Testing | User Behavior Analytics</p>
                                </div>

                                <div className="col-sm-12 col-md-3 wow fadeIn">
                                    <h5 className='mt-2'>Tools</h5>
                                    <p>Figma, Figma Jam, Maze</p>
                                </div>
                                <div>
                                    <img src={require('../img/collaboration/Platforms.png')} className='w-100 mt-4 border-thin pill-image' alt='Image'></img>
                                </div>
                                <hr className='m-5 border border-lite' />
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <h2 className='primary-title'>Objectives</h2>
                        </div>

                        <div className="m-lg-5 m-xs-3 m-sm-3">
                            <p>
                                If a service becomes too complex and involves advanced features, it can be problematic for users who don't have the time or need to learn new technologies, making it difficult for them to use the service.
                                Therefore, companies should consider delivering their services on different levels based on the needs of different user groups. </p>
                            <p>
                                A highly sophisticated service may provide a wide range of advanced options and customization, but can be challenging for users who are not familiar with the technology.
                            </p>
                            <p>
                                In contrast, a simple service may have fewer features and options, but it can be more straightforward to understand and use even for those without technical expertise.
                                Ultimately, the choice between sophistication and simplicity depends on the user's priorities and how they intend to use the service.
                            </p>
                            <p>My Objectives In This Project:</p>
                            <ul>
                                <li className='p-1'><b>User-Friendly:</b> Clarify the purpose behind each step.</li>
                                <li className='p-1'><b>Intuitive:</b> Using marketing business logic for communication.</li>
                                <li className='p-1'><b>Customizable:</b> More control over the UI</li>
                                <li className='p-1'><b>Consistent:</b> Consistency in design, colors, and icons should convey the same meaning across all interfaces.</li>
                                <li className='p-1'><b>Mobile Friendly:</b> Develop the design with a mobile-first approach in mind.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="d-none full-image mt-5" style={{ backgroundImage: 'url("../img/jobseeking/WorkFlowBG-2.jpg")' }}>
                        <div className="container-fluid">
                            <div className='m-lg-5 m-xs-3 m-sm-3'>
                                <h2 className='primary-title mb-3 mt-5'>Application Flow</h2>
                                <Col className="mb-5" md={12}>
                                    <Card>
                                        <Card.Img className='w-100 border border-1' variant="top" src="" />
                                        <Card.Body>
                                            <Card.Title className='primary-title'></Card.Title>
                                            <Card.Text>
                                                The MVP (Minimum Viable Product) workflow facilitates a quicker and more effective initiation of idea development and application towards achieving maturity. This approach is particularly crucial for startups and independent professionals who aim to rapidly build their portfolios, as I do.
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </div>
                        </div>
                    </div>

                    <div className="container-fluid">
                        <div className='m-lg-5 m-xs-3 m-sm-3'>
                            <hr className='m-5 border border-lite' />
                            <h2 className='primary-title'>Design Process</h2>
                            <img src={require('../img/jobseeking/DesignProcess.jpg')} className="w-100" alt="cover" />
                        </div>
                        <div className="m-lg-5 m-xs-3 m-sm-3">
                            <p>Double Diamond Design Model</p>
                            <ul>
                                <li className='p-1'><b>Discover:</b> Gain a comprehensive understanding of the problem domain by conducting research and collecting insights from interviews.</li>
                                <li className='p-1'><b>Define:</b> Establish the extent of the challenge by utilizing the insights and research collected during the Discover phase.</li>
                                <li className='p-1'><b>Develope:</b> Generate concepts for potential digital solutions.</li>
                                <li className='p-1'><b>Deliver:</b> Perform user testing and refine the solution based on feedback received.</li>
                            </ul>
                        </div>
                    </div>

                    <div className='custom-bg p-5 text-center'>
                        <h2 className='primary-title primary-title-color'>Discover Phase</h2>
                        <div class="titleUnderLineBrand"></div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Challenges</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    <ul>
                                        <li><b>Team-to-team and team-to-customer communication:</b> Clear and efficient communication between teams is crucial when designing and delivering services at different levels. Teams working on advanced features need to communicate effectively with those working on simpler versions to ensure consistency and avoid misunderstandings regarding capabilities, limitations, and dependencies.</li>
                                        <li><b>User research and feedback:</b> Understanding the needs and preferences of different user groups is essential. Collaboration between simple and advanced users in user research can provide valuable data and feedback that shape the development process and guide decisions on feature inclusion or simplification.</li>
                                        <li><b>Training:</b> Collaboration between different user levels requires training for advanced users to support and guide basic users effectively. Ensuring that even advanced features are presented in a way that all user levels can understand and use is crucial for effective collaboration.</li>
                                        <li><b>Documentation and support:</b> Providing comprehensive documentation and support for users across different levels, including technical writers, support teams, and developers, is necessary. Addressing common user questions and problems proactively and providing resources to assist users in utilizing the service optimally is essential.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Discovery</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>

                                <p>During the discovery phase, the focus intensifies on addressing challenges and establishing a connection between users, the service, and the competition.</p>
                                <p>When dealing with a complex product that encompasses varying levels of technicality, it becomes crucial to engage extensively with basic-level users while simultaneously refining and enhancing the solution to cater to sophisticated needs.
                                    This approach ensures a harmonious blend of simplicity and clarity on one hand, while incorporating advanced features that offer automation capabilities to basic users on the other. </p>
                                <p>By striking this balance, the product aims to provide a user experience that is both streamlined and comprehensive.</p>

                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Initial Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p><b>
                                    Comparative Analysis of Non-Technical Mobile App Users and Technical Users of a Sophisticated Collaboration Workflow Platform
                                </b></p>
                                <p>
                                    <b>Abstract:</b> This research aims to compare and analyze the characteristics, preferences, and behaviors of non-technical mobile app users and technical users who utilize a sophisticated Collaboration Workflow Platform. As mobile apps and Collaboration Workflow Platforms gain popularity, understanding the differences between these user groups becomes crucial for designers to optimize user experiences and tailor products to specific segments.
                                </p>
                                <p>
                                    Additionally, we acknowledge that mobile applications generally offer a low risk of data loss if developed properly, as even if the application crashes, data can usually be saved within the app and restored upon the next launch. This attribute makes mobile apps highly appealing to non-technical users who prioritize efficiency, simplicity, and the ability to accomplish more tasks in less time.
                                </p>
                                <p>
                                    In contrast, web users generally prefer web applications due to their accessibility across different devices and platforms. They enjoy the flexibility of accessing the application on various screens, and their performance tends to enhance when utilizing a larger screen. This is because a larger screen enables them to view a greater amount of data simultaneously, reducing the need for excessive scrolling and enhancing overall task efficiency.
                                </p>
                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Hypothesis</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    When creating a solution that encompasses various configurations across different operating systems, it is vital to incorporate creativity in order to streamline the experience for users who may have limited technical knowledge.
                                </p>
                                <p>
                                    Furthermore, it is essential to guarantee that the solution is user-friendly for other individuals by adhering to fundamental design principles and established practices.
                                </p>
                                <p>
                                    For instance, in many user interfaces, the green button is commonly associated with positive actions or affirmations. It serves as a representation of the primary or preferred action, such as confirming a selection, submitting a form, or initiating a desired process. The color green is often associated with notions of "go" or "success," thus conveying to users that pressing the green button will lead to a favorable outcome or progress within the interface.
                                </p>
                                <p>
                                    However, it is also crucial to consider accessibility in design, ensuring that the solution is usable by people with disabilities. By incorporating accessibility thinking into the design process, we can extend the user experience to individuals with diverse needs and ensure equal access to the solution.
                                </p>
                            </div>
                        </div>
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Primary Research</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    <b>User Study Objective:</b> To gather insights and feedback from users regarding the importance of creativity, user-friendliness, color choices, and accessibility in a solution encompassing various configurations across different operating systems.
                                </p>

                                <p><b>Methodology:</b></p>
                                <ol>
                                    <li>
                                        <b>Participants:</b> A diverse group of 11 participants, including individuals with varying technical knowledge and abilities.
                                    </li>
                                    <li>
                                        <b>Method:</b>
                                        <ul>
                                            <li>Participants were provided with a prototype of the solution and given time to explore its features. </li>
                                            <li>A semi-structured interview was conducted, consisting of open-ended questions related to creativity, user-friendliness, color choices, and accessibility. </li>
                                            <li>Participants were encouraged to share their thoughts, opinions, and any suggestions for improvement.</li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Data Collection:</b> Notes were taken during the interviews to capture participants' responses accurately.
                                    </li>
                                    <li>
                                        <b>Data Analysis:</b> Relative analysis was conducted to identify recurring themes and patterns in participants' responses.
                                    </li>
                                </ol>
                                <p><b>Results:</b></p>
                                <ol>
                                    <li>
                                        <b>Importance of Creativity:</b>

                                        <ul>
                                            <li>
                                                90% of participants emphasized the importance of creativity in simplifying complex processes and making the solution more intuitive.
                                            </li>
                                            <b className='text-info'>Quotes:</b>
                                            <li>
                                                Participant 1: "Creativity is crucial to make the solution user-friendly. It helps in presenting information in a way that even non-technical users can understand."
                                            </li>
                                            <li>
                                                Participant 2: "Innovative approaches can make the solution stand out and provide a better user experience."
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>User-Friendliness:</b>
                                        <ul>
                                            <li>
                                                95% of participants stated that a user-friendly interface was crucial for their overall satisfaction with the solution.
                                            </li>
                                            <b className='text-info'>Quotes:</b>
                                            <li>
                                                Participant 3: "If the interface is not user-friendly, it becomes frustrating to use the solution, especially for those with limited technical knowledge."
                                            </li>
                                            <li>
                                                Participant 4: "Consistency and predictability in the interface are key to a positive user experience."
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Color Choices:</b>
                                        <ul>
                                            <li>
                                                80% of participants acknowledged the impact of color choices on user experience and found the use of green for positive actions favorable.
                                            </li>
                                            <b className='text-info'>Quotes:</b>
                                            <li>
                                                Participant 5: "Green is associated with success and progress, so it gives me confidence when I see it used for positive actions."
                                            </li>
                                            <li>
                                                Participant 6: "Color coding helps in quickly understanding the purpose of different elements, and green feels natural for positive actions."
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Accessibility:</b>
                                        <ul>
                                            <li>
                                                85% of participants emphasized the importance of accessibility in the solution, highlighting the need for equal access for people with disabilities.
                                            </li>
                                            <b className='text-info'>Quotes:</b>
                                            <li>
                                                Participant 7: "As someone with a visual impairment, I appreciate when designers consider accessibility. It makes the solution inclusive for everyone."
                                            </li>
                                            <li>
                                                Participant 8: "Accessibility is not just a nice-to-have; it's a must-have. It ensures that nobody is left out and can use the solution independently."
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <b>Suggestions for Improvement:</b>
                                        <ul>
                                            <li>
                                                Participants recommended providing explanatory text for images/icons, improving keyboard navigation for desktop, and ensuring proper color contrast for better accessibility.
                                            </li>
                                            <b className='text-info'>Quotes:</b>
                                            <li>
                                                Participant 9: "Adding explanatory text for images/icons would help screen readers understand the content, making it more accessible for non-technical users."
                                            </li>
                                            <li>
                                                Participant 10: "Keyboard navigation is crucial for users who cannot use a mouse effectively. It should be intuitive and efficient."
                                            </li>
                                            <li>
                                                Participant 11: "Color contrast is vital for users with visual impairments. The solution should have sufficient contrast to make it readable for everyone."
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                                <p>
                                    <b>Conclusion:</b> The user study revealed that participants recognized the importance of creativity, user-friendliness, color choices, and accessibility in a solution encompassing various configurations across different operating systems. They highlighted the need for simplicity, consistency, and inclusivity in the design. Incorporating participants' suggestions for improvement would lead to a better and more efficient solution.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='custom-bg p-5 text-center'>
                        <h2 className='primary-title primary-title-color'>Define Phase</h2>
                        <div class="titleUnderLineBrand"></div>
                    </div>
                    <div className="container-fluid mb-2">
                        <Row className='m-lg-5 m-xs-2 m-sm-2 mt-3 mt-3'>
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Personas</h3>
                            </div>

                            <Col className="mb-5" md={9}>
                                <Card className='mb-4'>
                                    <Card.Img className='w-100' variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>
                                            <Row>
                                                <Col className='col-auto'>
                                                    <img src={require("../img/collaboration/avatars/john.png")} className="avatars" alt='Image' />

                                                </Col>
                                                <Col className='col-auto'>
                                                    John J.
                                                    <p className='avatars-job'><small>Marketing Manager</small></p>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            <p><b>Name:</b> John J.</p>
                                            <p><b>Age:</b> 35</p>
                                            <p><b>Profession:</b> Marketing Manager</p>
                                            <p><b>Background:</b> John J. has been working in the marketing industry for the past ten years. He has experience working in various roles such as digital marketing, content marketing, and product marketing. John is a highly skilled marketing professional with excellent communication and leadership skills. He has a passion for innovation and is always looking for ways to improve the marketing strategies of his company.</p>
                                            <p><b>Goals:</b> John's primary goal is to increase the revenue of his company by implementing effective marketing strategies. He wants to achieve this by collaborating with his team and stakeholders efficiently and effectively. John is always on the lookout for new technologies and tools that can help him achieve his goals.</p>
                                            <p><b>Challenges:</b> John faces several challenges in his role as a marketing manager. One of the most significant challenges is managing his team's workload and ensuring that they are working collaboratively and effectively. He also struggles with keeping up with the latest trends and technologies in the industry and ensuring that his team is utilizing them effectively.</p>
                                            <p><b>Persona:</b> John is a highly motivated and driven individual who is always looking for ways to improve his work and the work of his team. He is a strategic thinker who is not afraid to take risks and try new things. John is an excellent communicator and is always willing to listen to his team's ideas and feedback. He values collaboration and believes that working together is the key to success.</p>
                                            <p>John is highly tech-savvy and is always on the lookout for new technologies and tools that can help him achieve his goals. He is a quick learner and is not afraid to experiment with new technologies to see how they can benefit his team and the company.</p>
                                            <p>Overall, John is a dedicated marketing professional who is always looking for ways to improve his work and the work of his team. He is a natural leader and collaborator who values innovation and is always willing to try new things to achieve success.</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>

                                <Card>
                                    <Card.Img className='w-100' variant="top" src="" />
                                    <Card.Body>
                                        <Card.Title className='primary-title'>
                                            <Row>
                                                <Col className='col-auto'>
                                                    <img src={require("../img/collaboration/avatars/julia.png")} className="avatars" alt='Image' />

                                                </Col>
                                                <Col className='col-auto'>
                                                    Julia Romes
                                                    <p className='avatars-job'><small>Sales Director</small></p>
                                                </Col>
                                            </Row>
                                        </Card.Title>
                                        <Card.Text>
                                            <p><b>Name:</b> Julia Romes</p>
                                            <p><b>Age:</b> 30</p>
                                            <p><b>Profession:</b> Sales Director</p>
                                            <p> <b>Background:</b> Julia has been working in sales for the past 5 years and has a proven track record of success. She has worked for several companies in the past and has experience in various sales roles, including sales representative, sales manager, and sales director. Julia is a highly skilled sales professional with excellent communication, leadership, and organizational skills. She is dedicated to achieving her sales targets and growing her team.</p>
                                            <p><b>Goals:</b> Julia's primary goal is to increase the sales revenue of her company by implementing effective sales strategies. She wants to achieve this by collaborating with her team and stakeholders efficiently and effectively. Julia is always on the lookout for new technologies and tools that can help her achieve her goals.</p>
                                            <p><b>Challenges:</b> Julia faces several challenges in her role as a sales director. One of the most significant challenges is managing her team's workload and ensuring that they are working collaboratively and effectively. She also struggles with keeping up with the latest trends and technologies in the industry and ensuring that her team is utilizing them effectively.</p>
                                            <p><b>Persona:</b> Julia is a highly driven and results-oriented sales professional who is always looking for ways to improve her work and the work of her team. She is a strategic thinker who is not afraid to take risks and try new things. Julia is an excellent communicator and is always willing to listen to her team's ideas and feedback. She values collaboration and believes that working together is the key to success.</p>
                                            <p>Julia is always on the go, and she needs a mobile application that is simple and easy to use to stay connected with her team and stakeholders. She wants a platform that allows her to communicate with her team, share files, and manage tasks on the go. Julia values her time and wants a platform that is quick and easy to use, so she can focus on achieving her sales targets.</p>
                                            <p>Overall, Julia is a dedicated sales professional who is always looking for ways to improve her work and the work of her team. She is a natural leader and collaborator who values innovation and is always willing to try new things to achieve success. Julia needs a simple and easy to use mobile application that can help her stay connected with her team and stakeholders while she is on the go.</p>

                                        </Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Product Requirements</h3>
                            </div>

                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <ol className='mb-5'>
                                    <li className='list-text-style'>
                                        <b>Team-to-team and team-to-customer communication:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Develop a clear and efficient communication system that facilitates seamless collaboration between teams working on different levels of service complexity.
                                            </li>
                                            <li>
                                                Implement communication channels and tools that enable effective information sharing, such as chat platforms, project management systems, and regular team meetings.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-text-style'>
                                        <b>User research and feedback:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Conduct user research activities involving both simple and advanced users to gain insights into their needs, preferences, and pain points.
                                            </li>
                                            <li>
                                                Establish channels for gathering user feedback, such as surveys, interviews, or feedback forms, to capture valuable data that guides decision-making during the development process.
                                            </li>
                                            <li>
                                                Utilize user feedback to prioritize feature inclusion or simplification, ensuring that the product addresses the diverse requirements of different user groups effectively.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-text-style'>
                                        <b>Training:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Develop comprehensive training materials and resources for advanced users to support and guide basic users in utilizing the service.
                                            </li>
                                            <li>
                                                Create training programs or workshops that enable advanced users to effectively communicate and collaborate with basic users, fostering a productive and inclusive environment.
                                            </li>
                                            <li>
                                                Ensure that training materials and resources are accessible and easily understandable for users across different levels of technical proficiency.
                                            </li>
                                        </ul>
                                    </li>
                                    <li className='list-text-style'>
                                        <b>Documentation and support:</b>
                                        <ul className='mb-3'>
                                            <li>
                                                Provide comprehensive and user-friendly documentation that covers all aspects of the service, including instructions, troubleshooting guides, and FAQs.
                                            </li>
                                            <li>
                                                Regularly update documentation and support resources based on user feedback and evolving service requirements, ensuring accuracy and relevance.
                                            </li>
                                        </ul>
                                    </li>
                                </ol>
                            </div>
                        </div>
                    </div>

                    <div className='custom-bg p-5 text-center'>
                        <h2 className='primary-title primary-title-color'>Develope Phase</h2>
                        <div class="titleUnderLineBrand"></div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Epic</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>It can be challenging to find a platform that offers a comprehensive end-to-end solution while also catering to the diverse needs of users across different levels of complexity. Such a platform must strike a delicate balance between sophistication and simplicity to meet the expectations of various user groups.</p>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Journey</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>Inprogress</p>
                                <img src={require('../img/collaboration/Collaboration-Workflow-UJ.jpg')} className='mt-4 rounded-5 w-100' alt='Image'></img>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>User Testing</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p><b>User Testing Scenario:</b></p>
                                <p>
                                    <b>Objective:</b> To evaluate the effectiveness of the solution in terms of creativity, user-friendliness, color choices, and accessibility, based on the feedback from users.
                                    <ul>
                                        <li>
                                            <b>Scenario:</b> You are a participant in a user testing session for a solution that encompasses various configurations across different operating systems. The solution aims to streamline the experience for users with limited technical knowledge while adhering to design principles and considering accessibility.</li>
                                        <li>
                                            <b>Task:</b> You have been provided with a prototype of the solution and are asked to perform the following task:</li>
                                        <ul>
                                            <li>Imagine you need to configure a new device on the solution. Please explore the interface and perform the necessary steps to configure the device according to your preferences. As you go through the process, pay attention to the design, intuitiveness, color choices, and any accessibility features that might be present.</li>
                                            <li>Think aloud as you navigate through the interface, explaining your actions, thoughts, and any challenges you encounter. Feel free to provide feedback, suggestions, or any improvements you think could enhance the user experience.</li>
                                            <li>Remember, the goal is to evaluate how well the solution incorporates creativity, user-friendliness, color choices, and accessibility.</li>
                                            <li>Once you have completed the task or have explored the interface thoroughly, we will follow up with a short interview to gather additional insights about your experience.</li>
                                        </ul>
                                        <li><b>Note:</b> This user testing session aims to collect valuable feedback and insights to improve the solution. Your opinions and suggestions are highly valuable, so please be honest and provide as much detail as possible.
                                            Finaly, I want to thank you for participating in this user testing session.</li>
                                    </ul>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='custom-bg p-5 text-center'>
                        <h2 className='primary-title primary-title-color'>Deliver Phase</h2>
                        <div class="titleUnderLineBrand"></div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>High Fidelity Prototype</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <Button href="#" target="_blank" variant="primary">High-Fid Prototype (Coming Soon)</Button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Design Reviews</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    We begin with an introduction that covers the design objectives, project background, and constraints.
                                    We present the design systematically, explaining key features and how they address the problem-solving approach and project requirements.
                                </p>
                                <p><b>Key requirements:</b></p>
                                <ul>
                                    <li>Encourage constructive discussion and collect feedback on both positive aspects and areas needing improvement. </li>
                                    <li>Summarize the discussion's key points and share a comprehensive review report with all attendees, documenting the feedback and decisions made.</li>
                                </ul>
                                <b>Still in progress...</b>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Quality Assurance</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    QA in design is vital for ensuring the quality and usability of a design. It helps identify and address potential issues and errors, leading to improved user satisfaction and reduced rework. QA involves activities such as usability testing, evaluation, and functional testing, ensuring the design meets high-quality standards and is compatible across different devices.
                                </p>
                                <b>Still in progress...</b>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Platform Logo</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p><b>Collaboration</b> Plays a <i className='text-decoration-none'> Key</i> Role in Fostering a Seamless <b>Workflow</b>.</p>
                                <img src={require('../img/collaboration/logo-options.png')} className='mt-4 rounded-5 w-100'></img>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid mb-2">
                        <div className="row m-lg-5 m-xs-2 m-sm-2 mt-3">
                            <div className='col-sm-12 col-md-3 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <h3 className='primary-title'>Design Documentation</h3>
                            </div>
                            <div className='col-sm-12 col-md-9 mb-lg-5 mb-xs-2 mb-sm-2'>
                                <p>
                                    Maintaining documentation for sophisticated solutions can be a significant challenge due to the workload and intensive collaboration involved in keeping the design relevant and consistent. However, in the final phase of the design process, creating comprehensive design documentation becomes crucial.
                                    This documentation serves as a valuable point of reference for the future, enabling seamless collaboration and ensuring the ongoing maintenance of the design. By providing clarity on design decisions and their underlying rationale, it fosters effective communication among designers, developers, and team members.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <BackToTopButton />
                <Footer />
            </div>

        );
    }
}

export default App;
