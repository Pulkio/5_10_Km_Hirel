import "./PageContent.css";
import InscriptionButton from "../../CTA/InscriptionButton/InscriptionButton";

const PageContent = ({children, hostpage = false}) => {
  return (
    <div className={`pageContent ${hostpage ? 'hostpage' : ''}`}>
        {children}
    </div>
  );
};

export default PageContent;
