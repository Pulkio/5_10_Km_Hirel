import React from "react";
import './PhotosResultats.css';
import * as Components from "../../components/index";

const PhotosResultats = () => {
  return (
    <>
      <Components.Header />
      <Components.PageContent>
        <Components.Section>
          <h2>Retrouvez les photos et les résultats !</h2>
          <div className="linkCardDisplay">
            <Components.LinkCard link="https://photos.app.goo.gl/pAY5DYwSTc6WaCR76">
              <p className="smiley">📸</p>
              <strong>Photos 5km</strong>
            </Components.LinkCard>
            <Components.LinkCard link="https://photos.app.goo.gl/JhwCQmSDrYVq6BhL9">
              <p className="smiley">📸</p>
              <strong>Photos 10km</strong>
            </Components.LinkCard>
            <Components.LinkCard color="green" link="https://chronowest.fr/resultats/5-10km-dhirel-2025/">
              <p className="smiley">🏁</p>
              <strong>Résultats officiels</strong>
            </Components.LinkCard>
          </div>
        </Components.Section>
      </Components.PageContent>
      <Components.Footer />
    </>
  );
};

export default PhotosResultats;
