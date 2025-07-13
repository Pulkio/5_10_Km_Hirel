import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Card from "../../components/Card/Card";
import Gauge from "../../components/Gauge/Gauge";
import instagramLogo from "../../assets/logos/instagram.png";
import facebookLogo from "../../assets/logos/facebook.png";
import "./InfosPratiques.css";

const InfosPratiques = () => {
  return (
    <>
      <Header />
      <section className="section ip-main-container">
        <div>
          <h2>Infos pratiques</h2>
          <p>Tout ce que vous devez savoir pour participer aux 5 & 10 km</p>
        </div>

        <div className="ip-container">
          <Card>
            <strong>🏃 Retrait des dossards</strong>
            <Gauge color="blue" label="Samedi 2 août" startTime="15h à 19h30" />
            <Gauge
              color="green"
              label="Dimanche 3 août"
              startTime="à partir de 7h30"
            />
            <p>
              Salle intergénérationnelle <br /> 36 rue des Alleux, 35120 Hirel
            </p>
          </Card>

          <Card>
            <strong>🚗 Parking</strong>
            <strong className="ip-parking-number">
              300 places disponibles
            </strong>
            <p>
              Parking du cimetière d'Hirel <br /> 8 rue du Bord de Mer, 35120
              Hirel
            </p>
            <p>À 10 min à pied du départ</p>
            <p>Aucune consigne pour les sacs ne sera proposée.</p>
          </Card>

          <Card>
            <strong>💧 Ravitaillements</strong>
            <p>
              <strong>10 km :</strong> Eau disponible entre le 5e et 6e km
            </p>
            <p>
              <strong>Final :</strong> Eau disponible devant la salle
              intergénérationnelle
            </p>
            <p>Hydratez-vous bien avant, pendant et après l'effort !</p>
          </Card>

          <Card>
            <strong>💡Conseils</strong>
            <p>
              Arrivez au moins 1h avant le départ pour récupérer votre dossard.
            </p>
            <p>
              Merci de respecter et soutenir nos bénévoles qui assurent le bon
              déroulement de l'événement.
            </p>
          </Card>

          <Card>
            <strong>✉️ Contact</strong>
            <p>Une question ? N'hésitez pas à nous écrire, nous répondons généralement sous 24h </p>

            <div className="ip-contact-container">
              <div className="ip-contact-button">
                <a href="mailto:contact.gmj.events@gmail.com">
                  contact.gmj.events@gmail.com
                </a>
              </div>

              <div className="ip-rs-container">
                <a href="https://www.instagram.com/ton_compte" target="_blank" className="ip-rs-button">
                  <img src={instagramLogo} alt="Logo Instagram" />
                  <p>Instagram</p>
                </a>
                <a href="https://www.facebook.com/ton_compte" target="_blank" className="ip-rs-button">
                  <img src={facebookLogo} alt="Logo Facebook" />
                  <p>Facebook</p>
                </a>
              </div>
            </div>
          </Card>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default InfosPratiques;