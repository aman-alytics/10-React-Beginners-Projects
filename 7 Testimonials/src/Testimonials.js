import { useState } from "react";
import "./style.css";

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonials = [
    {
      quote: "This is the best product I've ever used!",
      author: "Jane Doe",
    },
    {
      quote: "This product exceeded all my expectations. I'm thrilled!",
      author: "Sarah Johnson",
    },
    {
      quote:
        "I've tried many products, but this one takes the top spot. It's outstanding!",
      author: "Michael Anderson",
    },
    {
      quote: "I'm in awe of this product. It's like it was made just for me!",
      author: "Emily Davis",
    },
    {
      quote:
        "I've been searching for the perfect product, and I finally found it. It's a must-have!",
      author: "David Wilson",
    },
  ];

  const handlePrevClick = () => {
    setCurrentIndex(
      (currentIndex + testimonials.length - 1) % testimonials.length
    );
  };
  const handleNextClick = () => {
    setCurrentIndex((currentIndex + 1) % testimonials.length);
  };

  return (
    <div className="testimonials">
      <div className="testimonials-quote">
        {testimonials[currentIndex].quote}
      </div>
      <div className="testimonials-author">
        ~ {testimonials[currentIndex].author}
      </div>
      <div className="testimonials-nav">
        <button onClick={handlePrevClick}>Prev</button>
        <button onClick={handleNextClick}>Next</button>
      </div>
    </div>
  );
}

export default Testimonials;
