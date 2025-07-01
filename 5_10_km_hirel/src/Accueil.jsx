import React from 'react';
import VideoCarousel from './assets/components/VideoCarousel';

const Accueil = () => {
  // Configuration des vidéos
  const videos = [
    {
      id: 1,
      mp4Source: "/videos/video1.mp4",
      poster: "/images/video1-poster.jpg",
      title: "Course 5km - Édition 2024"
    },
    {
      id: 2,
      mp4Source: "/videos/video2.mp4",
      poster: "/images/video2-poster.jpg",
      title: "Course 10km - Highlights"
    },
    {
      id: 3,
      mp4Source: "/videos/video3.mp4",
      poster: "/images/video3-poster.jpg",
      title: "Ambiance générale"
    }
  ];

  return (
    <main className="flex-grow pt-24 pb-8 font-sans text-lg">
      {/* Container plus large sur grands écrans */}
      <div className="max-w-8xl mx-auto px-4 xl:px-12 2xl:px-16">
        
        {/* SECTION 1 : Texte + Affiche - Layout optimisé pour grands écrans */}
        <div className="flex flex-col xl:flex-row gap-8 lg:gap-12 mb-12">
          
          {/* BLOC TEXTE - Plus d'espace sur grands écrans - AVEC EFFET HOVER */}
          <div className="xl:w-2/3 2xl:w-3/4">
            <div className="bg-white bg-opacity-95 rounded-xl shadow-lg hover:shadow-2xl hover:bg-opacity-100 transition-all duration-300 p-6 lg:p-8 xl:p-10 group">
              
              {/* 🏆 BADGE PREMIÈRE ÉDITION - Intégré naturellement */}
              <div className="flex items-center justify-between mb-6 xl:mb-8 pb-4 border-b border-gray-200 group-hover:border-gray-300 transition-colors">
                <div className="flex items-center space-x-3">
                  {/* Badge élégant */}
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 xl:px-6 xl:py-3 rounded-full shadow-lg hover:scale-105 transition-transform group-hover:from-blue-700 group-hover:to-indigo-700">
                    <span className="text-lg font-semibold tracking-wide">
                      🏆 PREMIÈRE ÉDITION
                    </span>
                  </div>
                  {/* Texte d'accompagnement */}
                  <div className="hidden sm:block">
                    <p className="text-lg text-gray-600 font-medium group-hover:text-gray-700 transition-colors">
                      Vous êtes les pionniers !
                    </p>
                  </div>
                </div>
                
                {/* Date mise en avant */}
                <div className="text-right">
                  <div className="text-2xl xl:text-3xl font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    3 AOÛT
                  </div>
                  <div className="text-lg text-gray-500 font-medium">
                    2025
                  </div>
                </div>
              </div>
              
              {/* Titre principal - VERSION SIMPLIFIÉE ET CLEAN */}
              <h1 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors mb-6 xl:mb-8 leading-tight">
                <span className="block mb-2">
                  Hirel vous attend pour une matinée de course à pied mémorable
                </span>
                <span className="block text-base lg:text-lg xl:text-xl font-normal text-green-600 group-hover:text-green-700 transition-colors mt-2">
                  (et sans trop de souffrance en montée 😉) ✨
                </span>
              </h1>
              
              {/* Message spécial première édition */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 border-l-4 border-blue-500 p-4 xl:p-6 mb-6 xl:mb-8 rounded-r-lg transition-all duration-300">
                <div className="flex items-start space-x-3">
                  <div className="text-2xl">📍</div>
                  <div>
                    <h3 className="text-lg xl:text-xl font-bold text-blue-800 mb-2">
                      Une histoire qui commence
                    </h3>
                    <p className="text-blue-700 text-lg leading-relaxed text-justify">
                      Vous avez la chance unique de participer à la toute première édition des courses d'Hirel. 
                      Dans quelques années, vous pourrez dire : <em>"J'y étais dès le début !"</em>
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Contenu principal avec le vrai texte - TEXTE HARMONISÉ */}
              <div className="space-y-4 xl:space-y-6 text-lg text-gray-700 group-hover:text-gray-800 transition-colors leading-relaxed text-justify">
                
                {/* Paragraphe d'introduction */}
                <p>
                  <strong>Imaginez le tableau :</strong> Un soleil radieux ☀️ <em>(On a passé commande !)</em>, 
                  l'air vivifiant de la <strong>Baie du Mont Saint-Michel</strong> 🌊 juste à côté, 
                  et vous, en train de fouler le bitume d'<strong>Hirel</strong> dans une ambiance 
                  <span className="text-green-600 font-semibold group-hover:text-green-700 transition-colors"> conviviale et détendue</span>. 
                  Ça vous tente ?
                </p>

                {/* Ce qui vous attend */}
                <div className="bg-green-50 group-hover:bg-green-100 transition-colors p-4 xl:p-6 rounded-lg border-l-4 border-green-400">
                  <h3 className="font-bold text-green-800 text-xl xl:text-2xl mb-3">
                    🏃‍♂️ Ce qui vous attend :
                  </h3>
                  <ul className="space-y-2 text-green-700 text-lg">
                    <li className="flex items-start">
                      <span className="mr-3 text-green-500">✓</span>
                      Des parcours <strong>adaptés à tous les niveaux</strong> (5km et 10km)
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-green-500">✓</span>
                      Un <strong>ravitaillement digne de ce nom</strong> à l'arrivée
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-green-500">✓</span>
                      Des <strong>récompenses</strong> pour tous les participants
                    </li>
                    <li className="flex items-start">
                      <span className="mr-3 text-green-500">✓</span>
                      Une <strong>ambiance familiale</strong> garantie sans prise de tête
                    </li>
                  </ul>
                </div>

                {/* Nouveaux paragraphes */}
                <p>
                  Que vous soyez un <strong>coureur aguerri</strong> en quête de performance 
                  ou quelqu'un qui veut simplement <em>se faire plaisir</em> en découvrant 
                  de nouveaux horizons, nos parcours sauront vous séduire. 
                  Le <strong>5km</strong> ? Parfait pour une première approche ou une sortie en famille. 
                  Le <strong>10km</strong> ? Idéal pour se challenger tout en profitant du paysage !
                </p>

                <p>
                  Et puis, il y a cette <span className="text-blue-600 font-semibold group-hover:text-blue-700 transition-colors">magie particulière</span> 
                  des petits événements sportifs : on se connaît tous, on s'encourage, 
                  on partage un café après l'effort... Bref, exactement ce qu'il faut 
                  pour <strong>commencer la journée du bon pied</strong> ! 😊
                </p>
              </div>

              {/* 🚀 NOUVEAU : APPEL À L'ACTION INSCRIPTION - BOUTON AMÉLIORÉ */}
              <div className="mt-8 xl:mt-12 pt-6 xl:pt-8 border-t border-gray-200 group-hover:border-gray-300 transition-colors">
                <div className="bg-gradient-to-r from-slate-50 to-gray-50 group-hover:from-slate-100 group-hover:to-gray-100 border border-slate-200 group-hover:border-slate-300 rounded-2xl p-8 xl:p-10 transition-all duration-300">
                  
                  {/* Titre élégant centré */}
                  <div className="text-center mb-6">
                    <div className="inline-flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center">
                        <span className="text-2xl">🏃‍♂️</span>
                      </div>
                      <div className="text-left">
                        <h3 className="font-bold text-gray-800 text-lg">
                          Rejoignez l'aventure
                        </h3>
                        <p className="font-medium text-blue-600 text-lg">
                          Places disponibles sur NextRun
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Message centré et sobre - TEXTE HARMONISÉ */}
                  <p className="text-gray-600 mb-8 leading-relaxed text-center max-w-2xl mx-auto text-lg">
                    Profitez des tarifs préférentiels pour les inscriptions anticipées. 
                    Une première édition historique vous attend !
                  </p>
                  
                  {/* Bouton moderne et élégant - NOUVELLE COULEUR ET PLUS LISIBLE */}
                  <div className="text-center">
                    <a 
                      href="https://www.nextrun.fr/course/inscriptions-avis/sport/4554/5-10-km-d-hirel/2025" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 hover:text-gray-900 font-black py-5 px-10 xl:py-6 xl:px-14 rounded-full text-xl xl:text-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 group/btn border-2 border-yellow-500 hover:border-yellow-400"
                    >
                      <span className="mr-3 !text-gray-900">Je m'inscris !</span>
                      <span className="text-2xl group-hover/btn:translate-x-2 transition-transform duration-300">🎯</span>
                    </a>
                  </div>
                  
                  {/* Info discrète - TEXTE HARMONISÉ */}
                  <div className="mt-6 text-center text-lg text-gray-500">
                    <span className="inline-flex items-center space-x-2">
                      <span>⚡</span>
                      <span>Inscription sécurisée en quelques clics</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* AFFICHE - Taille adaptée - AVEC EFFET HOVER AMÉLIORÉ */}
          <div className="xl:w-1/3 2xl:w-1/4 flex justify-center xl:justify-end">
            <div className="w-full max-w-md xl:max-w-none group/affiche">
              <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 group-hover/affiche:-translate-y-1 group-hover/affiche:translate-x-1">
                {/* Overlay subtil au hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover/affiche:opacity-100 transition-opacity duration-300 z-10"></div>
                
                {/* Image sans zoom */}
                <img 
                  src="/images/Affiche.png" 
                  alt="Affiche Course Hirel 2025" 
                  className="w-full h-auto transition-transform duration-700 ease-out"
                />
              </div>
            </div>
          </div>
        </div>

        {/* ENCADRÉS INFO + MÉTÉO avec effets hover améliorés - VERSION MODERNE */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 xl:gap-12 mb-12 xl:mb-16">
          
          {/* Météo commandée avec hover effect - VERSION SOBRE */}
          <div className="group bg-white border border-blue-200 hover:border-blue-300 p-6 xl:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-blue-100 to-sky-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl xl:text-3xl">🌤️</div>
              </div>
              <h3 className="font-bold text-gray-800 text-lg">
                Météo Commandée !
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              Nous avons passé commande spéciale auprès de Météo France : 
              <strong> soleil garanti</strong>, température idéale, et juste ce qu'il faut 
              de petite brise marine pour vous rafraîchir pendant l'effort ! 
              <em>(Ou presque...)</em> 😉
            </p>
          </div>

          {/* Info express avec hover effect - VERSION SOBRE */}
          <div className="group bg-white border border-green-200 hover:border-green-300 p-6 xl:p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-14 h-14 bg-gradient-to-br from-green-100 to-emerald-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <div className="text-2xl xl:text-3xl">📍</div>
              </div>
              <h3 className="font-bold text-gray-800 text-lg">
                Informations pratiques
              </h3>
            </div>
            <p className="text-gray-600 leading-relaxed text-justify text-lg">
              <strong>Départ à 9h30</strong> précises depuis la place du bourg d'Hirel. 
              Vestiaires et douches disponibles, parking gratuit. 
              Remise des dossards dès 8h30 sur place. 
              <span className="text-green-600 font-semibold">Tout est prévu pour votre confort !</span> 🏃‍♀️
            </p>
          </div>
        </div>

        {/* SECTION 2 : Carrousel vidéo */}
        <div className="mb-16 xl:mb-20">
          <h2 className="text-2xl lg:text-3xl xl:text-4xl font-bold text-center text-gray-800 mb-8 xl:mb-12">
            🎥 Revivez l'édition précédente
          </h2>
          <p className="text-center text-gray-600 mb-8 xl:mb-12 max-w-3xl mx-auto leading-relaxed text-lg">
            Découvrez l'ambiance unique de nos courses ! Sourires, dépassement de soi, 
            et cette satisfaction incomparable d'avoir couru dans un cadre exceptionnel. 
            Ces images vous donneront encore plus envie de nous rejoindre cette année !
          </p>
          
          {/* Carrousel avec plus d'espace sur grands écrans */}
          <div className="max-w-5xl xl:max-w-6xl 2xl:max-w-7xl mx-auto">
            <VideoCarousel videos={videos} />
          </div>
        </div>
        
        {/* SECTION 3 : Stats avec mention première édition */}
        <div className="mt-16 xl:mt-20 bg-gray-50 rounded-xl p-8 xl:p-12">
          <div className="text-center mb-8 xl:mb-12">
            <div className="inline-block bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-2 rounded-full text-lg font-semibold mb-4 hover:scale-105 transition-transform">
              🏆 PREMIÈRE ÉDITION HISTORIQUE
            </div>
            <h3 className="text-2xl xl:text-3xl font-bold text-gray-800">
              📊 Quelques stats qui donnent le sourire
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 xl:gap-8">
            {/* Nouvelle stat pour première édition */}
            <div className="text-center p-6 xl:p-8 bg-gradient-to-br from-yellow-400 to-amber-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <div className="text-4xl xl:text-5xl font-bold mb-3">1ère</div>
              <div className="text-lg font-semibold">Édition historique</div>
            </div>
            
            <div className="text-center p-6 xl:p-8 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-4xl xl:text-5xl font-bold text-blue-600 mb-3">98%</div>
              <div className="text-gray-600 text-lg">de sourires à l'arrivée</div>
            </div>
            <div className="text-center p-6 xl:p-8 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-4xl xl:text-5xl font-bold text-green-600 mb-3">2m</div>
              <div className="text-gray-600 text-lg">de dénivelé total (on exagère un peu)</div>
            </div>
            <div className="text-center p-6 xl:p-8 bg-white rounded-lg shadow hover:shadow-lg transition-shadow">
              <div className="text-4xl xl:text-5xl font-bold text-purple-600 mb-3">∞</div>
              <div className="text-gray-600 text-lg">souvenirs mémorables</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Accueil;
