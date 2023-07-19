import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';

const DynamicMetaTags = () => {
  const metaTags = window.dynamicMetaTags || {};

  return (
    <HelmetProvider>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        <meta property="og:image" content={metaTags.ogImage} />
        <meta property="og:image:width" content={metaTags.ogImageWidth} />
        <meta property="og:image:height" content={metaTags.ogImageHeight} />
      </Helmet>
    </HelmetProvider>
  );
};

export default DynamicMetaTags;
