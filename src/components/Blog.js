import React from 'react';  // Importing React library
import './Blog.css';  // Importing the CSS file for styling

const Blog = () => {
  // Sample blog post data in an array of objects
  const blogPosts = [
    { title: 'How to Build a Website', description: 'Learn the essentials of web development in this step-by-step guide.' },
    { title: 'Top 10 Marketing Strategies', description: 'Boost your business with these tried-and-tested marketing tips.' },
    { title: 'The Future of AI', description: 'Explore the potential of AI in transforming industries.' },
    { title: 'Mastering React', description: 'Learn advanced concepts to build dynamic and scalable apps.' },
    { title: 'SEO Best Practices', description: 'Increase your website traffic with these SEO techniques.' },
    { title: 'UI/UX Design Tips', description: 'Create stunning and user-friendly designs with these tips.' },
  ];

  return (
    <div className="blog-page">  {/* Container div for the whole blog page */}
      <h1 className="blog-heading">Our Blog</h1>  {/* Heading for the blog page */}
      
      <div className="blog-posts">  {/* Container div for the list of blog posts */}
        {/* Loop through each blog post and render a blog post element */}
        {blogPosts.map((post, index) => (
          <div className="blog-post" key={index}>  {/* Each blog post wrapped in a div with a unique key */}
            <div className="blog-content">  {/* Container for the content of each blog post */}
              <h3>{post.title}</h3>  {/* Blog post title */}
              <p>{post.description}</p>  {/* Blog post description */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;  // Export the Blog component so it can be used in other parts of the app
