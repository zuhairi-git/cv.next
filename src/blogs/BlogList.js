import React from 'react';
import { Link } from 'react-router-dom';

const BlogPage = ({ id, title, to, image, content, style, readMoreText }) => {
  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <div className="card d-flex flex-column">
        <img src={image} className="card-img-top" alt="Blog Image" />
        <div className="card-body d-flex flex-column">
          <h5 className="card-title" style={style}>{title}</h5>
          <p className="card-text" style={style}>{content}</p>
          <div className="mt-auto">
            <Link to={to} className="btn btn-primary" onClick={handleClick}>
              {readMoreText}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const BlogList = ({ idsToShow, style }) => {
  const blogs = [
    {
      id: 4,
      title: "Quantum AI",
      to: '',
      image: require('../img/blog/Human-AI/ai-quantum.jpg'),
      content: 'Although I lack expertise in physics or scientific matters, the concept of entanglement, where two qubits can be connected instantaneously across vast distances in the universe, is undeniably eerie. Adding artificial intelligence to the equation only further amplifies the sense of spookiness. ',
      hidden: false,
      readMoreText: 'Coming Next',
    },

    {
      id: 3,
      title: "Embracing the Era of AI",
      to: '/blogs/premitive-human',
      image: require('../img/blog/Human-AI/chess-ai.webp'),
      content: 'I have a feeling that with the progress of AI and the advancements in machine learning, our world will reach such a level of sophistication that most humans may appear primitive once more.',
      hidden: false,
      readMoreText: 'Read More',
    },

    {
      id: 2,
      title: 'How to get notifications on iOS with personal focus on?',
      to: '/blogs/ios-notifications',
      image: require('../img/blog/iphone-mail-notifications.jpg'),
      content: 'Are you one of those people who have been experiencing difficulty getting notifications on your iPhone lately?',
      hidden: false,
      readMoreText: 'Read More',
    },

    {
      id: 1,
      title: 'Circle of Daily Rhythm',
      to: '/blogs/circle-of-rhythm',
      image: require('../img/blog-writing.jpg'),
      content: 'The circle of daily rhythm is the pattern of behaviors and activities that one follows throughout a typical day.',
      hidden: false,
      readMoreText: 'Read More',
    },

  ];

  const renderBlogs = () => {
    let filteredBlogs = blogs;
    if (idsToShow) {
      filteredBlogs = blogs.filter(blog => idsToShow.includes(blog.id));
    }

    return filteredBlogs.map((blog) => (
      <div key={blog.id} className={`col-md-4 mb-4 d-flex ${blog.hidden ? 'd-none' : ''}`}>
        <BlogPage
          id={blog.id}
          title={blog.title}
          to={blog.to}
          image={blog.image}
          content={blog.content}
          style={style}
          readMoreText={blog.readMoreText}
        />
      </div>
    ));
  };

  return (
    <div className="container">
      <div className="row">
        {renderBlogs()}
      </div>
    </div>
  );
};

export default BlogList;
