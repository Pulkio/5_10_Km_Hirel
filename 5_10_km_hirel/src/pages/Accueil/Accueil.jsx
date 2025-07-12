import React from 'react';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Card from '../../components/Card/Card';
import Hero from '../../components/Hero/Hero';
import YoutubeSlider from '../../components/YoutubeSlider/YoutubeSlider';
import './Accueil.css'

const Accueil = () => {
  return (
    <>
      <Header />
      <Hero/>
      <div className="section blue">
        <h2>Le dimanche 3 aout 2025</h2>
        <p>Hirel vous attend pour une matinée de course à pied mémorable (et sans trop de souffrance en montée 😉) !</p>
      </div>
      <Card>
        <p>Programme de la matinée</p>
        <div className='distance green-white-gradient'>
          <div>
            <p>5km</p>
            <p className='txt-5km start-time'>9h00</p>
          </div>
        </div>
        <div className='distance blue-white-gradient'>
          <div>
            <p>10km</p>
            <p className='txt-10km start-time'>10h00</p>
          </div>
        </div>
      </Card>

      <div className="section blue">
        <div className="section-description">
          <h2> Nos publications </h2>
          <p> Découvrez l'événement en images et suivez-nous sur les réseaux sociaux pour être au fait des dernières actualités ! </p>
        </div>
        <YoutubeSlider />
      </div>
      
      <Footer />
    </>
  );
};

export default Accueil;
