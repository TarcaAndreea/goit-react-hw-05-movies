import React from 'react';
import '../Button-back/buttonback-module.css';
import { useNavigate } from 'react-router-dom';

export default function Buttonback() {
  const navigate = useNavigate();
  return (
    <button className="button" onClick={() => navigate('/')}>
      <i className="fa fa-arrow-left" aria-hidden="true"></i> Back
    </button>
  );
}
