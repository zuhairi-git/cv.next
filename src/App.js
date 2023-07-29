import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useRoutes, useLocation } from 'react-router-dom';
import ReactGA from 'react-ga';

import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import Jobseeking from './portfolio/Jobseeking';
import Collaboration from './portfolio/Collaboration';
import Blog from './pages/Blog';
import Blog01 from './blogs/Blog01';
import Blog02 from './blogs/Blog02';
import Blog03 from './blogs/Blog03';
import Blog04 from './blogs/Blog04';

ReactGA.initialize('G-QR6LZ8YSLJ');

const routes = [
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/portfolio',
    element: <Portfolio />
  },
  {
    path: '/portfolio/jobseeking',
    element: <Jobseeking />
  },
  {
    path: '/portfolio/collaboration',
    element: <Collaboration />
  },
  {
    path: '/blog',
    element: <Blog />
  },
  {
    path: '/blogs/circle-of-rhythm',
    element: <Blog01 />
  },
  {
    path: '/blogs/ios-notifications',
    element: <Blog02 />
  },
  {
    path: '/blogs/premitive-human',
    element: <Blog03 />
  },
  {
    path: '/blogs/claude-ai',
    element: <Blog04 />
  }
];

function App() {
  const location = useLocation();

  const getMetaTags = (pathname) => {
    const publicUrl = process.env.PUBLIC_URL;

    const getPageName = (pathname) => {
      const parts = pathname.split('/').filter(Boolean);
      return parts[parts.length - 1];
    };

    switch (location.pathname) {
      case '/':
        return {
          title: 'CV Lanes | Webpage',
          description: 'Professional Product/UI/UX Designer',
          ogTitle: 'CV Lanes | Landing Page',
          ogDescription: 'Professional Product Designer',
          ogType: 'website',
          ogImage: 'https://centerux.com/images/sites/corescene.png',
          ogImageWidth: '1200',
          ogImageHeight: '630',
          twitterCreator: 'Ali Zuhairi',
          twitterCard: 'My CV and Skills',
          ogUrl: window.location.href
        };
      case '/blog':
        return {
          title: 'Blog',
          description: 'To Blog... or not to Blog',
          ogType: 'Page',
          ogImage: `${publicUrl}/img/covers/blog-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          imageAlt: 'Blog',
          ogUrl: window.location.href
        };
      case '/portfolio/jobseeking':
        return {
          title: 'Job Seeking Application',
          description: 'Job Seeking Application',
          ogType: 'Portfolio',
          ogImage: `${publicUrl}/img/covers/portfolio-jobseeking-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          imageAlt: 'Job Seeking Application',
          ogUrl: window.location.href
        };
      case '/portfolio/collaboration':
        return {
          title: 'Collaboration Workflow Platform',
          description: 'Collaboration Workflow Platform',
          ogType: 'Portfolio',
          ogImage: `${publicUrl}/img/covers/portfolio-collaboration-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          imageAlt: 'Collaboration Workflow Platform',
          ogUrl: window.location.href
        };
      case '/blogs/circle-of-rhythm':
        return {
          title: 'Daily Rhythm',
          description: 'Circle of Daily Rhythm',
          ogType: 'article',
          ogImage: `${publicUrl}/img/covers/blogs-circle-of-rhythm-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          imageAlt: 'Daily Rhythm',
          ogUrl: window.location.href
        };
      case '/blogs/ios-notifications':
        return {
          title: 'Notifications on iOS',
          description: 'How to get notifications on iOS with personal focus on?',
          ogType: 'article',
          ogImage: `${publicUrl}/img/covers/blogs-ios-notifications-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          imageAlt: 'Notifications on iOS',
          ogUrl: window.location.href
        };
      case '/blogs/premitive-human':
        return {
          title: 'Embracing the Era of AI',
          description: "Humanity's Journey to Unparalleled Sophistication",
          ogType: 'article',
          ogImage: `${publicUrl}/img/covers/blogs-premitive-human-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          imageAlt: 'Era of AI',
          ogUrl: window.location.href
        };
      default:
        return {
          title: 'CV Lanes | Landing Page',
          description: '.Professional Product Designer',
          ogTitle: 'CV Lanes | Landing Page',
          ogDescription: '..Professional Product Designer',
          ogImage: `${publicUrl}/img/covers/${getPageName(location.pathname)}-default-image.jpg`,
          ogImageWidth: '1200',
          ogImageHeight: '630',
          ogUrl: window.location.href
        };
    }
  };

  const metaTags = getMetaTags(location.pathname);
  const element = useRoutes(routes);

  return (
    <HelmetProvider>
      <Helmet>
        <title>{metaTags.title}</title>
        <meta name="description" content={metaTags.description} />
        {metaTags.ogType && (
          <>
            <meta property="og:type" content={metaTags.ogType} />
            <meta property="og:title" content={metaTags.title} />
            <meta property="og:description" content={metaTags.description} />
            <meta property="og:url" content={metaTags.ogUrl} />
            <meta property="og:image" content={metaTags.ogImage} />
            <meta property="og:image:width" content={metaTags.ogImageWidth} />
            <meta property="og:image:height" content={metaTags.ogImageHeight} />
            <meta name="twitter:title" content={metaTags.title} />
            <meta name="twitter:description" content={metaTags.description} />
            <meta name="twitter:image" content={metaTags.ogImage} />
            <meta name="twitter:card" content="summary_large_image" />
          </>
        )}
        {metaTags.imageAlt && (
          <meta property="image:alt" content={metaTags.imageAlt} />
        )}
      </Helmet>
      {element} {/* Render the element without wrapping it in <BrowserRouter> */}
    </HelmetProvider>
  );
}

export default App;
