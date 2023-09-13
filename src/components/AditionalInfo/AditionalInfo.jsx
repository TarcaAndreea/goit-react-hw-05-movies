import React from 'react';
import Reviews from 'components/Reviews/Reviews';
import Cast from 'components/Cast/Cast';
import '../AditionalInfo/AditionalInfo-module.css';

export default function AditionalInfo() {
  return (
    <div className="aditional-info">
      <h3> Additional Information</h3>
      <Cast />
      <Reviews />
    </div>
  );
}
