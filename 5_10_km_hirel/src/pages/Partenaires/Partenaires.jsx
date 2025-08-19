import React from "react";
import * as Components from "../../components/index";
import './Partenaires.css';
import mail from "../../assets/logos/mail.svg";

const partners = [
  {
    name: "Intermarché St Méloir des Ondes",
    logo: "intermarché.png",
    category: "Alimentation",
  },
  {
    name: "Auto Premium 35",
    logo: "autopremium35.png",
    category: "Automobile",
  },
  { name: "Nextrun", logo: "nextrun.png", category: "Sport" },
  { name: "Letanoux", logo: "Letanoux.webp", category: "Local" },
  { name: "Laiterie Malo", logo: "malo.png", category: "Alimentation" },
  { name: "Lodi Group", logo: "lodi-group.png", category: "Local" },
  { name: "Sobhi Sport Rennes", logo: "Sobhi.png", category: "Sport" },
  { name: "Atome Floral (St Méloir Des Ondes)", logo: "atome-floral.webp", category: "Fleuriste" },
  { name: "Les galettes de St Malo", logo: "galettes_de_st_malo.png", category: "Alimentation" },
  { name: "Crédit agricole", logo: "credit-agricole.jpg", category: "Banque" },
  { name: "Fleurs et nature (La Richardais)", logo: "fleurs_et_nature.jpg", category: "Fleuriste" },
  { name: "La Cancalaise", logo: "la_cancalaise.png", category: "Alimentation" },
  { name: "La Buvette des bains", logo: "la_buvette_des_bains.jpeg", category: "Alimentation" },


];

export default function Partenaires() {
  return (
    <>
      <Components.Header />
      <Components.PageContent>
        <Components.Section color="blue">
          <h2>🤝 Un grand merci ! ❤️</h2>
          <Components.Card>
            <p>
              Chaque partenaire contribue à faire de cet événement une réussite.
              Grâce à eux, nous pouvons offrir une expérience exceptionnelle à
              tous les participants !
            </p>
          </Components.Card>
        </Components.Section>
        <Components.Section>
          <h2>Ils nous font confiance ...</h2>
          <div className="partners-grid">
            {partners.map((partner) => (
              <Components.Card fullwidth tag={partner.category}>
                <img src={`/images/${partner.logo}`} alt={partner.name} />
                <strong>{partner.name}</strong>
              </Components.Card>
            ))}
          </div>
        </Components.Section>
        <Components.Section color="blue">
          <h2>Vous souhaitez devenir partenaire <span>?</span></h2>
          <Components.Card>
            <p>
              Rejoignez notre aventure et soutenez un événement sportif qui
              rassemble toute la communauté !
            </p>
            <Components.ContactButton label="Nous contacter" href="mailto:contact.gmj.events@gmail.com" color="blue" logo={mail}/>
          </Components.Card>
        </Components.Section>
      </Components.PageContent>
      <Components.Footer />
    </>
  );
}
