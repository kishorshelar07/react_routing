import React from 'react';  // Importing React library
import './FAQ.css';  // Importing the CSS file for styling

const FAQ = () => {
  // Array of FAQ data with questions and answers
  const faqData = [
    {
      question: 'What services do you offer?',
      answer: 'We provide web development, app development, and digital marketing services.',
    },
    {
      question: 'How can I contact you?',
      answer: 'You can reach us via email at support@example.com or call us at +123456789.',
    },
    {
      question: 'What are your business hours?',
      answer: 'Our business hours are Monday to Friday, 9 AM to 6 PM.',
    },
    {
      question: 'Do you offer custom solutions?',
      answer: 'Yes, we tailor our services to meet your unique requirements.',
    },
    {
      question: 'What is your pricing model?',
      answer: 'We offer competitive pricing based on the scope and complexity of the project.',
    },
    {
      question: 'How experienced is your team?',
      answer: 'Our team comprises professionals with over 10 years of experience in the industry.',
    },
    {
      question: 'Do you provide support after project completion?',
      answer: 'Yes, we offer post-project support to ensure seamless performance.',
    },
    {
      question: 'Can you help with SEO?',
      answer: 'Yes, our digital marketing team specializes in SEO strategies to boost your online visibility.',
    },
  ];

  return (
    <div className="faq-page">  {/* Container for the FAQ page */}
      <h1 className="faq-heading">Frequently Asked Questions</h1>  {/* Main heading of the FAQ page */}
      
      <div className="faq-list">  {/* Container for all the FAQ items */}
        {/* Loop through the faqData array and display each question and answer */}
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>  {/* Each FAQ item with a unique key */}
            <h3>{faq.question}</h3>  {/* Display the question */}
            <p>{faq.answer}</p>  {/* Display the answer */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;  // Export the FAQ component for use in other parts of the app
