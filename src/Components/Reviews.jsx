import React, { useState } from "react";
import './DataDisplay.css'; // Import the CSS file

const Reviews = () => {
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState(null);

  const handleTextChange = (e) => {
    setReviewText(e.target.value);
  };

  const handleRatingChange = (e) => {
    setReviewRating(parseInt(e.target.value, 10));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!reviewText.trim() || reviewRating < 1 || reviewRating > 5) {
      setError("Please enter a valid review text and rating (1-5).");
      return;
    }

    try {
      const response = await fetch("https://project22.vercel.app/vehicles", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ text: reviewText, rating: reviewRating }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const newReview = await response.json();
      setReviews((prevReviews) => [...prevReviews, newReview]);
      setReviewText("");
      setReviewRating(0);
      setError(null);
    } catch (error) {
      setError("There was a problem with the fetch operation.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="reviews-container">
      <form onSubmit={handleSubmit} className="review-form">
        <h1 className="form-title">Submit a Review</h1>
        <label htmlFor="reviewText" className="form-label">Review Text:</label>
        <textarea
          id="reviewText"
          value={reviewText}
          onChange={handleTextChange}
          className="form-input"
          rows="4"
        />
        <label htmlFor="reviewRating" className="form-label">Rating (1-5):</label>
        <input
          id="reviewRating"
          type="number"
          min="1"
          max="5"
          value={reviewRating}
          onChange={handleRatingChange}
          className="form-input"
        />
        <button type="submit" className="submit-button">Submit</button>
        {error && <p className="error-message">{error}</p>}
      </form>
      <div className="current-review">
        <h2>Current Review:</h2>
        <p><strong>Text:</strong> {reviewText}</p>
        <p><strong>Rating:</strong> {reviewRating}</p>
      </div>
      <div className="all-reviews">
        <h2>All Reviews:</h2>
        <ul className="review-list">
          {reviews.map((review, index) => (
            <li key={index} className="review-item">
              <p><strong>Text:</strong> {review.text}</p>
              <p><strong>Rating:</strong> {review.rating}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Reviews;
