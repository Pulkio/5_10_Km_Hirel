import React from 'react';
import './Card.css';

export default function Card({ children, fullwidth = false, color }) {
  return (
    <div className={`card ${fullwidth ? 'fullwidth' : ''} ${color}`}>
      {children}
    </div>
  );
}