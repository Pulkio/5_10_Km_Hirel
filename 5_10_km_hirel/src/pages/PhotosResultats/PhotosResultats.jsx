import React from "react";
import './PhotosResultats.css';
import * as Components from "../../components/index";

const PhotosResultats = () => {
  return (
    <>
      <Components.Header />
      <Components.PageContent>
        <Components.Section>
          <strong>
            La course n'a pas encore eu lieu. <br />
            Les liens vers les photos officielles et la page de résultats seront
            affichés ici après les courses !
          </strong>
          <h2>Rendez-vous le Dimanche 3 Août 2025</h2>
          <div className="linkCardDisplay">
            <Components.LinkCard unavailable link="">
              <p className="smiley">📸</p>
              <strong>Photos officielles</strong>
            </Components.LinkCard>
            <Components.LinkCard color="green" unavailable link="">
              <p className="smiley">🏁</p>
              <strong>Résultats officiels</strong>
            </Components.LinkCard>
          </div>
          <p>
            Les participants seront informés via nos réseaux sociaux de la
            publication des photos et résultats.
          </p>
        </Components.Section>
      </Components.PageContent>
      <Components.Footer />
    </>
  );
};

export default PhotosResultats;
