import * as Components from "../../components/index";
import instagramLogo from "../../assets/logos/instagram.png";
import facebookLogo from "../../assets/logos/facebook.png";
import "./InfosPratiques.css";

const InfosPratiques = () => {
  return (
    <>
      <Components.Header />
      <Components.PageContent>
        <Components.Section>
          <div>
            <h2>Infos pratiques</h2>
            <p>Tout ce que vous devez savoir pour participer aux 5 & 10 km</p>
          </div>

          <div className="ip-cards-container">
            <Components.Card>
              <strong>🏃 Retrait des dossards</strong>
              <Components.Gauge color="blue" label="Samedi 2 août" startTime="15h à 19h30" />
              <Components.Gauge
                color="green"
                label="Dimanche 3 août"
                startTime="à partir de 7h30"
              />
              <a href="https://www.google.com/maps/search/?api=1&query=36+Rue+des+Alleux,+35120+Hirel" target="_blank">
                <p className="ip-link">
                  📍Salle intergénérationnelle <br /> 36 rue des Alleux, 35120 Hirel
                </p>
              </a>
            </Components.Card>

            <Components.Card>
              <strong>🚗 Parking</strong>
              <strong className="ip-blue-strong">
                300 places disponibles
              </strong>
              <a href="https://www.google.com/maps/search/?api=1&query=8-16+Rue+du+Bord+de+Mer,+35120+Hirel" target="_blank">
                <p className="ip-link">
                  📍Parking du cimetière d'Hirel <br /> 8 rue du Bord de Mer, 35120
                  Hirel
                </p>
              </a>
              <p>À 10 min à pied du départ</p>
              <p>Aucune consigne pour les sacs ne sera proposée.</p>
            </Components.Card>

            <Components.Card>
              <strong>💧 Ravitaillements</strong>
              <p>Hydratez-vous bien avant, pendant et après l'effort.</p>
              
              <strong className="ip-blue-strong">10 km<p>Eau disponible entre le 5ème et 6ème km </p></strong>
              <strong className="ip-blue-strong">Final<p>Eau disponible devant la salle intergénérationnelle </p></strong>
              
            </Components.Card>

            <Components.Card>
              <strong>💡Conseils</strong>
              <p>
                Arrivez au moins 1h avant le départ pour récupérer votre dossard.
              </p>
              <p>
                Merci de respecter et soutenir nos bénévoles qui assurent le bon
                déroulement de l'événement.
              </p>
            </Components.Card>

            <Components.Card color="blue">
              <strong>✉️ Contact </strong>
              <p>Une question ? N'hésitez pas à nous écrire, nous répondons généralement sous 24h </p>

              <div className="ip-contact">
                <Components.ContactButton label="contact.gmj.events@gmail.com" href="mailto:contact.gmj.events@gmail.com" color="white"/>
                
                <div className="ip-rs-container">
                  <Components.ContactButton 
                  label="Instagram" href="https://www.instagram.com/10km_hirel?igsh=eHQ2bnI5amZjbDNw"
                  color="white" logo={instagramLogo} />
                  <Components.ContactButton 
                  label="Facebook" href="https://www.facebook.com/share/1AjPnC8hhE/"
                  color="white" logo={facebookLogo} />
                </div>
              </div>
            </Components.Card>
          </div>
        </Components.Section>
      </Components.PageContent>
      <Components.Footer />
    </>
  );
};

export default InfosPratiques;