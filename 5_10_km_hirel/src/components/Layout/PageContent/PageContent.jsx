import "./PageContent.css";
import InscriptionButton from "../../CTA/InscriptionButton/InscriptionButton";

const PageContent = ({children}) => {
  return (
    <div className="pageContent">
        {children}
    </div>
  );
};

export default PageContent;
