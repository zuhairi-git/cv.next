import React from 'react';
import Helmet from 'react-helmet';
const HeadTags = (props) => {

    const {
        title = "Circle of Daily Rhythm",
        metaAuthor = "Ali Zuhairi",
        metaWebsite = "https://cvlanes.com",
        metaSiteName = "https://cvlanes.com",
        metaImage = "https://cvlanes.com",
        metaArticle = "https://cvlanes.com",
        metaWidth = "800px",
        metaHeight = "600px",
    } = props;
    return (

        <Helmet>
            <title>{title}</title>
            <meta property='og:type' content={metaArticle} />
            <meta property='article:author' content={metaAuthor} />
            <meta property='article:publisher' content={metaWebsite} />
            <meta property='og:site_name' content={metaSiteName} />
            <meta property="og:image" content={metaImage} />
            <meta property="og:image:width" content={metaWidth} />
            <meta property="og:image:height" content={metaHeight} />
        </Helmet>
    );
};