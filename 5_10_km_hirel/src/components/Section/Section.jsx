import "./Section.css";
import InscriptionButton from "../CTA/InscriptionButton/InscriptionButton";

const Section = ({children, color}) => {
  return (
    <div className={`section ${color}`}>
      <div className="section-inner">
        {children}
      </div>
    </div>
  );
};

export default Section;
