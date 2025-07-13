import React from "react";
import "./InscriptionButton.css";

const InscriptionButton = () => {
  return (
    <a
      href="https://www.nextrun.fr/course/inscriptions-avis/sport/4554/5-10-km-d-hirel/2025"
      target="_blank"
    >
      <button>
        <span className="emoji">🏃🏻</span>
        Je m'inscris
      </button>
    </a>
  );
};

export default InscriptionButton;
