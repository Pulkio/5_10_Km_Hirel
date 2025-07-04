import React from 'react';
import './styles/photos-resultats.css';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

const PhotosResultats = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-green-50 flex flex-col justify-center items-center py-24">

        {/* Particules flottantes subtiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[color:var(--color-jaune)] rounded-full animate-bounce opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[color:var(--color-vert)] rounded-full animate-pulse opacity-15"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[color:var(--color-bleu)] rounded-full animate-bounce opacity-10"></div>
        </div>

        {/* Gradients décoratifs subtils */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[color:var(--color-bleu)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[color:var(--color-vert)]/5 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-2xl w-full mx-auto px-4 text-center animate-fade-in">
          {/* Titre moderne et lumineux */}
          <h1 className="text-5xl md:text-6xl font-bold mb-8 text-[color:var(--color-bleu)]">
            Photos{' '}
            <span className="bg-gradient-to-r from-[color:var(--color-bleu)] to-blue-700 bg-clip-text text-transparent">&amp; Résultats</span>
          </h1>

          {/* Carte principale claire */}
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            {/* Message d'attente avec icône animée */}
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-bounce">📅</div>
              <p className="text-xl md:text-2xl text-gray-700 mb-6 leading-relaxed">
                La course n'a pas encore eu lieu.<br />
                Les liens vers les photos officielles et la page de résultats seront affichés ici après les courses !
              </p>
            </div>

            {/* Date de l'événement */}
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 rounded-2xl p-6 mb-8 border border-yellow-200">
              <p className="text-lg text-gray-700 font-semibold mb-2">📆 Rendez-vous le</p>
              <p className="text-3xl font-black text-orange-500">Dimanche 3 Août 2025</p>
            </div>

            {/* Boutons désactivés stylés */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              {/* Bouton Photos */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-yellow-200 to-orange-200 rounded-2xl opacity-30 blur-sm"></div>
                <span className="relative inline-flex items-center space-x-3 px-6 py-4 bg-white text-gray-700 font-bold rounded-2xl shadow-lg text-lg cursor-not-allowed border border-gray-100">
                  <span className="text-2xl">📸</span>
                  <span>Photos officielles</span>
                  <span className="text-sm opacity-60">(à venir)</span>
                </span>
              </div>
              {/* Bouton Résultats */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-100 to-green-100 rounded-2xl opacity-30 blur-sm"></div>
                <span className="relative inline-flex items-center space-x-3 px-6 py-4 bg-white text-gray-700 font-bold rounded-2xl shadow-lg text-lg cursor-not-allowed border border-gray-100">
                  <span className="text-2xl">🏁</span>
                  <span>Résultats officiels</span>
                  <span className="text-sm opacity-60">(à venir)</span>
                </span>
              </div>
            </div>

            {/* Information supplémentaire */}
            <div className="mt-8 p-4 bg-blue-50 rounded-xl border border-blue-100">
              <div className="flex items-center justify-center space-x-2 text-blue-700">
                <span className="text-xl">💡</span>
                <p className="text-sm">
                  Vous serez notifiés dès la publication des résultats et photos !
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />

      {/* Animations CSS déplacées dans photos-resultats.css */}
    </>
  );
};

export default PhotosResultats;
