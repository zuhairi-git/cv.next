import { Route, Routes } from "react-router-dom";
import { Helmet } from "react-helmet"; // Import Helmet
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Jobseeking from "./portfolio/Jobseeking";
import Collaboration from "./portfolio/Collaboration";
import Blog from "./pages/Blog";
import Blog01 from "./blogs/Blog01";
import Blog02 from "./blogs/Blog02";
import Blog03 from "./blogs/Blog03";
import Blog04 from "./blogs/Blog04";
import Blog05 from "./blogs/Blog05";
import BlogTest from "./blogs/BlogTest"; // Updated blog name

function App() {
  return (
    <>
      <Helmet>
        <title>My Blog - Insights and Stories</title>
        <meta name="description" content="Welcome to My Blog, where we share insights and stories on various topics." />
        <meta property="og:site_name" content="My Blog" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="My Blog - Insights and Stories" />
        <meta property="og:description" content="Explore insightful articles and stories on various topics." />
        <meta property="og:image" content="http://localhost:3000/static/media/ai04.511e2f5d5e913df6680c.jpg" />
        <meta property="og:url" content="https://cvlanes.com/" />
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
        <Route path="/blogs/claude-ai" element={<Blog04 />} />
        <Route path="/blogs/hiring-process" element={<Blog05 />} />
        <Route path="/blogs/blog-test" element={<BlogTest />} />

      </Routes>
    </>
  );
}

export default App;
