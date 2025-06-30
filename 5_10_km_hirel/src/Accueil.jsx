import React from 'react';

import VideoCarousel from './assets/components/VideoCarousel';

const Accueil = () => {
  // Configuration des vidéos avec vos vrais chemins
  const videos = [
    {
      id: 1,
      mp4Source: "/videos/video1.mp4",        // ← Renommé
      webmSource: "/videos/video1.webm",      // ← Ajouté (optionnel)
      poster: "/images/video1-poster.jpg",    // ← Image de couverture
      title: "Course 5km - Édition 2024",
      description: "Revivez les moments forts"
    },
    {
      id: 2,
      mp4Source: "/videos/video2.mp4",
      webmSource: "/videos/video2.webm",      // ← Optionnel
      poster: "/images/video2-poster.jpg",    // ← Image de couverture  
      title: "Course 10km - Highlights",
      description: "L'ambiance au départ"
    },
    {
      id: 3,
      mp4Source: "/videos/video3.mp4",
      webmSource: "/videos/video3.webm",      // ← Optionnel
      poster: "/images/video3-poster.jpg",    // ← Image de couverture
      title: "Ambiance générale",
      description: "Une journée inoubliable"
    }
  ];

  return (
    <main className="flex-grow pt-24 pb-8">
      {/* Container principal avec fond */}
      <div className="max-w-7xl mx-auto px-4 xl:px-8">
        
        {/* Layout responsive : colonne mobile, ligne desktop */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* BLOC TEXTE - 60% sur desktop */}
          <div className="lg:w-3/5">
            <div className="bg-white bg-opacity-90 rounded-xl shadow-lg p-6 lg:p-8">
              
              {/* Titre principal */}
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-6 text-center">
                Notez bien la date ! 🗓️ <span className="text-blue-600">3 août 2025</span>
              </h2>
              
              {/* Contenu principal */}
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  Préparez-vous pour une expérience sportive <strong>inoubliable</strong> ! 
                  Les <span className="font-semibold text-blue-600">5 & 10km d'Hirel</span> 
                  vous attendent pour une course exceptionnelle au cœur de la baie du Mont-Saint-Michel.
                </p>
                
                <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
                  <h3 className="font-semibold text-blue-800 mb-2">🏃‍♀️ Au programme :</h3>
                  <ul className="space-y-1 text-blue-700">
                    <li><strong>Course 5km</strong> - Parfait pour découvrir !</li>
                    <li><strong>Course 10km</strong> - Le défi sportif !</li>
                    <li><strong>Paysages uniques</strong> - Courez face au Mont-Saint-Michel</li>
                    <li><strong>Ambiance conviviale</strong> - Sport et bonne humeur garantis !</li>
                  </ul>
                </div>
                
                <p>
                  Que vous soyez <strong>coureur débutant</strong> ou <strong>athlète confirmé</strong>, 
                  cette course est faite pour vous ! Venez découvrir les paysages spectaculaires 
                  d'Hirel et vivre un moment sportif exceptionnel.
                </p>
                
                {/* Bouton d'action */}
                <div className="text-center pt-4">
                  <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg shadow-lg transition-colors duration-300">
                    📝 Pré-inscription 2025
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* BLOC AFFICHE + VIDÉOS - 40% sur desktop */}
          <div className="lg:w-2/5 flex flex-col items-center space-y-6">
            
            {/* Affiche officielle */}
            <div className="w-full max-w-sm">
              <img 
                src="/images/Affiche.png" 
                alt="Affiche officielle 5&10km d'Hirel 2025" 
                className="w-full h-auto rounded-lg shadow-xl object-contain hover:shadow-2xl transition-shadow duration-300"
              />
            </div>
            
            {/* Carrousel de vidéos */}
            <div className="w-full">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                🎥 Revivez l'édition précédente
              </h3>
              <VideoCarousel videos={videos} />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Accueil;
