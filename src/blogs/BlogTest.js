import React from 'react';
import { Helmet } from 'react-helmet';

const BlogTest = () => {
    return (
        <>
            <Helmet>
                <title>Circle of Rhythm - My Blog</title>
                <meta property="og:title" content="Circle of Rhythm - My Blog" />
                <meta property="og:description" content="An in-depth look into the rhythm of life and music." />
                <meta property="og:image" content="http://localhost:3000/static/media/ai04.511e2f5d5e913df6680c.jpg" />
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
