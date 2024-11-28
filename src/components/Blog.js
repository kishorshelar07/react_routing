import React from 'react';
import './Blog.css';

const Blog = () => {
  const blogPosts = [
    { title: 'How to Build a Website', description: 'Learn the essentials of web development in this step-by-step guide.' },
    { title: 'Top 10 Marketing Strategies', description: 'Boost your business with these tried-and-tested marketing tips.' },
    { title: 'The Future of AI', description: 'Explore the potential of AI in transforming industries.' },
    { title: 'Mastering React', description: 'Learn advanced concepts to build dynamic and scalable apps.' },
    { title: 'SEO Best Practices', description: 'Increase your website traffic with these SEO techniques.' },
    { title: 'UI/UX Design Tips', description: 'Create stunning and user-friendly designs with these tips.' },
  ];

  return (
    <div className="blog-page">
      <h1 className="blog-heading">Our Blog</h1>
      <div className="blog-posts">
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>
            <div className="blog-content">
              <h3>{post.title}</h3>
              <p>{post.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
