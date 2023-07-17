import { Route, Routes, useLocation } from "react-router-dom";
import { HelmetProvider, Helmet } from "react-helmet-async";

import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Jobseeking from "./portfolio/Jobseeking";
import Collaboration from "./portfolio/Collaboration";
import Blog from "./pages/Blog";
import Blog01 from "./blogs/Blog01";
import Blog02 from "./blogs/Blog02";
import Blog03 from "./blogs/Blog03";

function App() {
  const location = useLocation();

  const getMetaTags = () => {
    const publicUrl = process.env.PUBLIC_URL;

    const getPageName = (pathname) => {
      const parts = pathname.split("/").filter(Boolean);
      return parts[parts.length - 1];
    };

    switch (location.pathname) {
      case "/":
        return {
          title: "CV Lanes | Landing Page",
          description: "Professional Product Designer",
          ogTitle: "CV Lanes | Landing Page",
          ogDescription: "Professional Product Designer",
          ogType: "website",
          ogImage: `${publicUrl}/img/covers/default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          twitterCreator: "Ali Zuhairi",
          twitterCard: "My CV and Skills",
        };
      case "/portfolio":
        return {
          title: "Portfolio",
          description: "Where Magic Happens",
          ogType: "Page",
          ogImage: `${publicUrl}/img/covers/portfolio-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Portfolio",
        };
      case "/blog":
        return {
          title: "Blog",
          description: "To Blog... or not to Blog",
          ogType: "Page",
          ogImage: `${publicUrl}/img/covers/blog-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Blog",
        };
      case "/portfolio/jobseeking":
        return {
          title: "Job Seeking Application",
          description: "Job Seeking Application",
          ogType: "Portfolio",
          ogImage: `${publicUrl}/img/covers/portfolio-jobseeking-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Job Seeking Application",
        };

      case "/portfolio/collaboration":
        return {
          title: "Collaboration Workflow Platform",
          description: "Collaboration Workflow Platform",
          ogType: "Portfolio",
          ogImage: `${publicUrl}/img/covers/portfolio-collaboration-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Collaboration Workflow Platform",
        };

      case "/blogs/circle-of-rhythm":
        return {
          title: "Daily Rhythm",
          description: "Circle of Daily Rhythm",
          ogType: "article",
          ogImage: `${publicUrl}/img/covers/blogs-circle-of-rhythm-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Daily Rhythm",
        };

      case "/blogs/ios-notifications":
        return {
          title: "Notifications on iOS",
          description: "How to get notifications on iOS with personal focus on?",
          ogType: "article",
          ogImage: `${publicUrl}/img/covers/blogs-ios-notifications-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Notifications on iOS",
        };

      case "/blogs/premitive-human":
        return {
          title: "Embracing the Era of AI",
          description: "Humanity's Journey to Unparalleled Sophistication",
          ogType: "article",
          ogImage: `${publicUrl}/img/covers/blogs-premitive-human-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
          imageAlt: "Era of AI",
        };

      default:
        return {
          title: "CV Lanes | Landing Page",
          description: "Professional Product Designer",
          ogTitle: "CV Lanes | Landing Page",
          ogDescription: "Professional Product Designer",
          ogImage: `${publicUrl}/img/covers/blogs-premitive-human-default-image.jpg`,
          ogImageWidth: "1200",
          ogImageHeight: "630",
        };
    }
  };

  const metaTags = getMetaTags();

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
          </>
        )}
        {metaTags.imageAlt && (
          <meta property="image:alt" content={metaTags.imageAlt} />
        )}
        {/* Add other meta tags based on the metaTags object */}
      </Helmet>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/jobseeking" element={<Jobseeking />} />
        <Route path="/portfolio/collaboration" element={<Collaboration />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blogs/circle-of-rhythm" element={<Blog01 />} />
        <Route path="/blogs/ios-notifications" element={<Blog02 />} />
        <Route path="/blogs/premitive-human" element={<Blog03 />} />
      </Routes>
    </HelmetProvider>
  );
}

export default App;
