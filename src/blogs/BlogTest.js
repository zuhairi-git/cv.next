import React from 'react';
import { Helmet } from 'react-helmet';

const BlogTest = () => {
    return (
        <>
            <Helmet>
                <title>Circle of Rhythm - My Blog</title>
                <meta property="og:title" content="Circle of Rhythm - My Blog" />
                <meta property="og:description" content="An in-depth look into the rhythm of life and music." />
                <meta property="og:image" content="https://cvlanes.com/static/media/itsmeai.e60725f64d02549f9001.webp" />
                <meta property="og:url" content="https://cvlanes.com/blogs/blog-test" />
                <meta property="og:type" content="article" />
            </Helmet>
            <div>
                <h1>Circle of Rhythm</h1>
                <p>Welcome to my blog about rhythm and life...</p>
            </div>
        </>
    );
};

export default BlogTest;
