import React from 'react';
import { Helmet } from 'react-helmet';
import TopNavGeneric from '../pages/TopNavGeneric';
import Footer from '../pages/Footer';
import BlogAuthor from './BlogAuthor';
import ReadingTimeEstimator from './ReadingTimeEstimator';
import content from '../text/blog01.txt';
import BackToTopButton from '../generic/BackToTopButton';
import SocialMeida from '../generic/SocialMedia';

const BlogTest = () => {
    const dateOfPublish = '2023-03-23';
    const blogTitle = "Blog Test";
    const blogTagline = "Testing";
    const imageUrl = "https://cvlanes.com/static/media/Hero-left.e3406a9b4b4d9162f725.png";

    return (
        <div>
            <Helmet>
                <meta property="og:title" content={blogTitle} />
                <meta property="og:description" content={blogTagline} />
                <meta property="og:image" content={imageUrl} />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:type" content="article" />
                <meta property="og:url" content="https://cvlanes.com/blog/0" />
                <meta property="article:published_time" content={dateOfPublish} />
                <meta property="article:author" content="Al Al-Zuhairi" />
                <meta property="og:site_name" content="CV Lanes" />
            </Helmet>
            <h1>{blogTitle}</h1>
            <p>{blogTagline}</p>
            <TopNavGeneric />

            <div className="blogGenricBG" id="blog-test">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-sm-12 col-md-6">
                            <div className="hero-content">
                                <div className="hero-text text-start wow fadeInUp" data-wow-delay="0.2s">
                                    <h1 className='primary-title text-light mt-lg-4 mt-md-3 mt-sm-2 mt-xs-2 text-shadow'>It's blogging time!</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid">
                <div className='blog-width m-5 mx-auto'>
                    <h2 className='primary-title'>{blogTitle}</h2>
                    <BlogAuthor datePublished={dateOfPublish} />
                    <ReadingTimeEstimator filePath={content} />
                    <p className='mb-4'>
                        Are you one of those people who have been experiencing difficulty getting notifications on your iPhone lately? Well, you're not alone! Recently, I went through a similar experience where I was not getting notifications from the Mail app on my iPhone, despite trying various email clients.
                    </p>

                    <SocialMeida />

                </div>

            </div>
            <BackToTopButton />
            <Footer />
        </div>
    );
}

export default BlogTest;