import React from 'react';

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "Small Business Owner",
      content: "Groww Capitals has been instrumental in helping me navigate the stock market. Their expert advice has significantly boosted my investment returns.",
      image: "/assets/images/testimonial-1.jpg"
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Retired Professional",
      content: "I'm extremely satisfied with the retirement planning services provided by Groww Capitals. They've given me peace of mind about my financial future.",
      image: "/assets/images/testimonial-2.jpg"
    },
    // Add more testimonials as needed
  ];

  return (
    <div className="testimonials">
      <h2>What Our Clients Say</h2>
      <div className="testimonial-list">
        {testimonials.map(testimonial => (
          <div key={testimonial.id} className="testimonial-item">
            <img src={testimonial.image} alt={testimonial.name} />
            <blockquote>{testimonial.content}</blockquote>
            <p className="testimonial-author">{testimonial.name}</p>
            <p className="testimonial-role">{testimonial.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;