import React from 'react';
import './Blog.css';

const Blog = () => {
  return (
    <div className="blog-page">
      <h1 className="blog-heading">Our Blog</h1>
      <div className="blog-posts">
        <div className="blog-post">
          <h3>How to Build a Website</h3>
          <p>Learn the essentials of web development in this step-by-step guide.</p>
        </div>
        <div className="blog-post">
          <h3>Top 10 Marketing Strategies</h3>
          <p>Boost your business with these tried-and-tested marketing tips.</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
