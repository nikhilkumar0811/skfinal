import React, { useState } from "react";

function Reviews() {
  const [reviews] = useState([
    { id: 1, name: "John Doe", feedback: "Excellent service!" },
    {
      id: 2,
      name: "Jane Smith",
      feedback: "Very professional and quick repair.",
    },
  ]);

  return (
    <div className="container">
      <h2 className="section-title">Customer Reviews</h2>
      <ul>
        {reviews.map((review) => (
          <li key={review.id} style={{ marginBottom: "1rem" }}>
            <strong>{review.name}:</strong> {review.feedback}
          </li>
        ))}
      </ul>
      <p>
        If you’ve worked with us, we’d love to hear from you! Feel free to leave
        your feedback.
      </p>
    </div>
  );
}

export default Reviews;
