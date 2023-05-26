import React from 'react';

const LoadingAnimation = ({ loading }) => (
  <div>
    {loading && (
      <div className="loading-animation">
        <div className="spinner"></div>
        <p>Loading more students...</p>
      </div>
    )}
  </div>
);

export default LoadingAnimation;
