import React from 'react';

const LoadingAnimation = ({ loading }) => (
  <>
    {loading && (
      <div className="loading-animation">
        <div className="spinner" />
        <p>Loading more students...</p>
      </div>
    )}
  </>
);

export default LoadingAnimation;
