import React from 'react';
import Reviews from 'components/Reviews/Reviews';
import Cast from 'components/Cast/Cast';

export default function AditionalInfo() {
  return (
    <div>
      <h3> Additional Information</h3>
      <Cast />
      <Reviews />
    </div>
  );
}
