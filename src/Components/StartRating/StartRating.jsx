import React from 'react';

const StarRating = ({ rating }) => {
  // Calculate the number of filled and empty stars
  const filledStars = Math.floor(rating);
  const emptyStars = 5 - filledStars;

  // Create an array to hold the star elements
  const stars = [];

  // Add filled stars to the array
  for (let i = 0; i < filledStars; i++) {
    stars.push(<i className="fas fa-star" key={i}></i>);
  }

  // Add empty stars to the array
  for (let i = 0; i < emptyStars; i++) {
    stars.push(<i className="far fa-star" key={filledStars + i}></i>);
  }

  return <div className="star-rating">{stars}</div>;
};

export default StarRating;