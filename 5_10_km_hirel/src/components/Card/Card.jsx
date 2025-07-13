import React from "react";
import "./Card.css";

export default function Card({ children, fullwidth = false, color, tag }) {
  return (
    <div className={`card ${fullwidth ? "fullwidth" : ""} ${color}`}>
      {children}
      {tag && <div className="tag">{tag}</div>}
    </div>
  );
}
