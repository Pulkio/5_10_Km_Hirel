/* eslint-disable no-irregular-whitespace */
import React from "react";
import * as Components from "../../components/index";
import "./Accueil.css";

const Accueil = () => {
  return (
    <>
      <Components.Header />
      <Components.PageContent hostpage>
        <Components.Hero/>
        <Components.Section color="blue">
          <h2>Le dimanche 3 aout 2025</h2>
          <p>
            Hirel vous attend pour une matinée de course à pied mémorable (et
            sans trop de souffrance en montée 😉) !
          </p>
          <Components.Card>
            <strong>Programme de la matinée</strong>
            <Components.Gauge color="blue" label="5km" startTime="9h00" />
            <Components.Gauge color="green" label="10km" startTime="10h00" />
          </Components.Card>
        </Components.Section>
        <Components.Section>
          <h2>Imaginez le tableau</h2>
          <p>
            Un soleil radieux ☀️ (On a passé commande !), l'air vivifiant de la
            Baie du Mont Saint-Michel 🌊 juste à côté pour l'ambiance marine, et
            vous, filant comme le vent au cœur de la campagne hireloise
            verdoyante 🌳. Un cadre authentique en Ille-et-Vilaine pour une
            expérience qui change !
          </p>
          <div className="card-grid">
            <Components.Card fullwidth>
              <p>🏃‍♂️</p>
              <strong>Un Parcours 100% plat</strong>
              <p>
                Fini les côtes qui tuent ! 🙃 Ici, c'est tout plat. Parfait pour
                améliorer ses temps ou découvrir la course à pied sans craindre
                les montées interminables.
              </p>
            </Components.Card>

            <Components.Card fullwidth>
              <p>🌾</p>
              <strong>Campagne authentique</strong>
              <p>
                Un parcours 100% champêtre ! Possibilité d'apercevoir des lapins
                et des tracteurs, c'est la nature qui vous accompagne avec ses
                parfums et ses couleurs.
              </p>
            </Components.Card>

            <Components.Card fullwidth>
              <p>🌊</p>
              <strong>Baie du Mont Saint-Michel</strong>
              <p>
                À deux pas de ce joyau du patrimoine mondial ! L'air marin et
                les paysages emblématiques de la baie vous donneront des ailes.
              </p>
            </Components.Card>

            <Components.Card fullwidth>
              <p>🤝</p>
              <strong>Esprit familial</strong>
              <p>
                Première édition = ambiance décontractée et bienveillante ! Que
                vous soyez débutant ou confirmé, l'objectif c'est de passer un
                super moment ensemble.
              </p>
            </Components.Card>

            <Components.Card fullwidth>
              <p>🏘️</p>
              <strong>Organisé localement</strong>
              <p>
                Par des passionnés du coin qui connaissent chaque recoin du
                territoire. De l'amour du terroir dans chaque détail de
                l'organisation !
              </p>
            </Components.Card>

            <Components.Card fullwidth>
              <p>🧦</p>
              <strong>Chaussettes offertes !</strong>
              <p>
                Tous les coureurs repartent avec des chaussettes
                personnalisées aux couleurs de l'événement ! Un souvenir utile
                et stylé de votre première participation.
              </p>
            </Components.Card>
          </div>
          <Components.Card fullwidth color="blue">
            <strong>Alors, prêt(e) pour l'aventure ?</strong>
            <p>
              Rejoignez-nous pour cette première édition qui promet d'être
              mémorable ! Places limitées pour préserver l'esprit convivial.
            </p>
            <Components.InscriptionButton />
          </Components.Card>
        </Components.Section>
        <Components.Section color="blue">
          <div className="section-description">
            <h2> Nos publications </h2>
            <p>
              {" "}
              Découvrez l'événement en images et suivez-nous sur les réseaux
              sociaux pour être au fait des dernières actualités !{" "}
            </p>
          </div>
          <Components.YoutubeSlider />
        </Components.Section>
      </Components.PageContent>
      <Components.Footer />
    </>
  );
};

export default Accueil;
