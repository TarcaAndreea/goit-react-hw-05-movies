import React from 'react';
import '../Button-back/buttonback-module.css';
import { useNavigate } from 'react-router-dom';

export default function Buttonback() {
  const navigate = useNavigate();
  return <button onClick={() => navigate('/')}>Go Back</button>;
}
