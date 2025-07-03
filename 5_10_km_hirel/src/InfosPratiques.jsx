import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

const InfosPratiques = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section moderne - fond clair conservé */}
      <section className="relative min-h-screen bg-gradient-to-br from-blue-50 to-green-50 overflow-hidden">

        {/* Particules flottantes subtiles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[color:var(--color-jaune)] rounded-full animate-bounce opacity-20"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[color:var(--color-vert)] rounded-full animate-pulse opacity-15"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-[color:var(--color-bleu)] rounded-full animate-bounce opacity-10"></div>
        </div>

        {/* Gradients décoratifs subtils */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[color:var(--color-bleu)]/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[color:var(--color-vert)]/5 to-transparent rounded-full blur-3xl"></div>

        <main className="relative pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Titre principal moderne avec couleurs plus pêchues */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[color:var(--color-bleu)]">
                Infos{' '}
                <span className="bg-gradient-to-r from-[color:var(--color-bleu)] to-blue-700 bg-clip-text text-transparent">
                  Pratiques
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
                Tout ce que vous devez savoir pour participer aux{' '}
                <span className="text-orange-600 font-semibold">5 & 10 Km d'Hirel</span>
              </p>
            </div>

            {/* Grid des cartes d'informations - Design naturel avec effets hover */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Carte Dossards */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 transition-all duration-300 border border-gray-100 cursor-pointer group">
                
                {/* Header avec icône */}
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    🎽
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Retrait des dossards</h2>
                </div>

                {/* Contenu */}
                <div className="space-y-6">
                  <div className="bg-gray-50 rounded-xl p-6">
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                        <span className="font-semibold text-gray-800">Samedi 2 août</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                          15h à 18h
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm border border-gray-100">
                        <span className="font-semibold text-gray-800">Dimanche 3 août</span>
                        <span className="px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-semibold rounded-lg group-hover:from-orange-500 group-hover:to-red-500 transition-all duration-300">
                          à partir de 7h30
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start space-x-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                        📍
                      </div>
                      <div>
                        <a
                          href="https://www.google.com/maps/search/?api=1&query=36+Rue+des+Alleux,+35120+Hirel"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block group cursor-pointer"
                        >
                          <h3 className="font-semibold text-gray-800 mb-2 underline group-hover:text-blue-600 transition-colors duration-200">Salle intergénérationnelle d'Hirel</h3>
                          <p className="text-gray-600 underline group-hover:text-blue-600 transition-colors duration-200">36 Rue des Alleux, 35120 Hirel</p>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Parkings */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 transition-all duration-300 border border-gray-100 cursor-pointer group">
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-green-500 to-teal-600 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    🅿️
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-teal-600 transition-colors duration-300">Parkings</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="text-center mb-4">
                      <span className="text-4xl font-bold text-gradient bg-gradient-to-r from-green-600 to-teal-700 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-green-700 transition-all duration-300">300</span>
                      <p className="text-gray-700 font-medium">places disponibles</p>
                    </div>
                    <div className="bg-white rounded-lg p-4 shadow-sm border border-gray-100">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-teal-600 rounded-full flex items-center justify-center text-white text-sm flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300">
                          📍
                        </div>
                        <div>
                          <a
                            href="https://www.google.com/maps/search/?api=1&query=8-16+Rue+du+Bord+de+Mer,+35120+Hirel"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="block group cursor-pointer"
                          >
                            <p className="font-semibold text-gray-800 underline group-hover:text-blue-600 transition-colors duration-200">Parking du cimetière d'Hirel</p>
                            <p className="text-gray-600 text-sm underline group-hover:text-blue-600 transition-colors duration-200">Cimetière, 8-16 Rue du Bord de Mer, 35120 Hirel</p>
                          </a>
                          <p className="text-sm text-gray-500 mt-1">⏱️ À 10 min à pied du départ</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-red-50 rounded-xl p-6 border border-red-200">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">⚠️</span>
                      <p className="font-semibold text-red-700">Aucune consigne pour les sacs ne sera proposée</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Ravitaillements */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 border border-gray-100 cursor-pointer group">
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    💧
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-indigo-600 transition-colors duration-300">Ravitaillements</h2>
                </div>

                <div className="space-y-4">
                  <div className="bg-blue-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-2 bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold rounded-lg group-hover:from-indigo-500 group-hover:to-purple-600 transition-all duration-300">10 KM</span>
                      <span className="font-medium text-gray-800">Ravitaillement en cours</span>
                    </div>
                    <p className="text-gray-700">💧 Eau disponible entre le <span className="font-semibold text-blue-600">5ème et 6ème km</span></p>
                  </div>
                  
                  <div className="bg-green-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-center space-x-4 mb-3">
                      <span className="px-3 py-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white font-semibold rounded-lg group-hover:from-emerald-500 group-hover:to-teal-600 transition-all duration-300">ARRIVÉE</span>
                      <span className="font-medium text-gray-800">Ravitaillement final</span>
                    </div>
                    <p className="text-gray-700">🥤 Devant la salle intergénérationnelle d'Hirel</p>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="flex items-center space-x-3">
                      <span className="text-xl">💪</span>
                      <p className="text-gray-700 font-medium">Hydratez-vous bien avant, pendant et après l'effort !</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Contact */}
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 hover:bg-gradient-to-br hover:from-purple-50 hover:to-pink-50 transition-all duration-300 border border-gray-100 cursor-pointer group">
                
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center text-2xl shadow-md group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                    📧
                  </div>
                  <h2 className="text-2xl font-bold text-gray-800 group-hover:text-purple-600 transition-colors duration-300">Contact</h2>
                </div>

                <div className="space-y-6">
                  <div className="bg-purple-50 rounded-xl p-6 border border-purple-100">
                    <p className="text-gray-700 mb-6 text-center">Pour toute question, n'hésitez pas à nous contacter</p>
                    <div className="text-center">
                      <a 
                        href="mailto:contact.gmj.events@gmail.com" 
                        className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-lg shadow-md hover:shadow-lg hover:from-pink-500 hover:to-purple-600 hover:scale-105 transition-all duration-300"
                      >
                        <span>✉️</span>
                        <span>contact.gmj.events@gmail.com</span>
                      </a>
                    </div>
                  </div>

                  <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center space-x-2">
                        <span className="text-lg">⚡</span>
                        <span className="font-semibold text-gray-800">Réponse rapide</span>
                      </div>
                      <p className="text-gray-600 text-sm">Nous répondons généralement sous 24h</p>
                    </div>
                  </div>

                  <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6 border border-gray-100">
                    <div className="text-center space-y-2">
                      <div className="flex items-center justify-center space-x-2 mb-2">
                        <span className="text-lg">📱</span>
                        <span className="font-semibold text-gray-800">Informations en temps réel</span>
                      </div>
                      <p className="text-gray-600 text-sm mb-3">Suivez-nous pour les dernières actualités :</p>
                      <div className="flex items-center justify-center gap-4 mt-2">
                        <a
                          href="https://www.instagram.com/10km_hirel?igsh=eHQ2bnI5amZjbDNw"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-yellow-500 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-yellow-500 hover:to-pink-500 transition-all duration-300"
                        >
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1 0 2a1 1 0 0 1 0-2z"></path></svg>
                          <span>Instagram</span>
                        </a>
                        <a
                          href="https://www.facebook.com/share/1AjPnC8hhE/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-semibold rounded-lg shadow-md hover:scale-105 hover:from-blue-400 hover:to-blue-600 transition-all duration-300"
                        >
                          <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24H12.82v-9.294H9.692v-3.622h3.127V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"></path></svg>
                          <span>Facebook</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section Conseils */}
            <div className="mt-16">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/50">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">💡 Conseils</h3>
                  <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-yellow-50 hover:to-orange-50 hover:scale-105 hover:shadow-xl group">
                      <div className="text-3xl mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">⏰</div>
                      <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-orange-600 transition-colors duration-300">Ponctualité</h4>
                      <p className="text-gray-600 group-hover:text-orange-500 transition-colors duration-300">Arrivez au moins 1h avant votre épreuve, le temps de récupérer les dossards</p>
                    </div>
                    <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100 transition-all duration-300 cursor-pointer hover:bg-gradient-to-br hover:from-green-50 hover:to-teal-50 hover:scale-105 hover:shadow-xl group">
                      <div className="text-3xl mb-3 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-300">🤝</div>
                      <h4 className="font-bold text-gray-800 mb-3 text-xl group-hover:text-teal-600 transition-colors duration-300">Bénévoles</h4>
                      <p className="text-gray-600 group-hover:text-teal-500 transition-colors duration-300">Soyez sympa avec nos bénévoles qui vont tout faire pour que l'événement se passe au mieux</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      
      <Footer />
    </>
  );
};

export default InfosPratiques;