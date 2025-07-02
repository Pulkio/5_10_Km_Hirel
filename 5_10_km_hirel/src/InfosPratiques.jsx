import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

const InfosPratiques = () => {
  return (
    <>
      <Header />
      
      {/* Hero Section moderne */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        
        {/* Background Pattern - Même style que l'accueil */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Particules flottantes - Style accueil */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[color:var(--color-jaune)] rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[color:var(--color-vert)] rounded-full animate-float-delay opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-float opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[color:var(--color-jaune)] rounded-full animate-pulse"></div>
        </div>

        {/* Gradients décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[color:var(--color-bleu)]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[color:var(--color-vert)]/20 to-transparent rounded-full blur-3xl"></div>

        <main className="relative pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Titre principal moderne */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Infos
                </span>{' '}
                <span className="text-[color:var(--color-jaune)] animate-glow">
                  Pratiques
                </span>
              </h1>
              <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light">
                Tout ce que vous devez savoir pour participer aux{' '}
                <span className="text-[color:var(--color-jaune)] font-semibold">5 & 10 Km d'Hirel</span>
              </p>
            </div>

            {/* Grid des cartes d'informations */}
            <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
              
              {/* Carte Dossards */}
              <div className="group relative animate-slide-up">
                <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-jaune)] via-yellow-400 to-[color:var(--color-jaune)] rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-none"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300">
                  
                  {/* Header avec icône */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🎽
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Retrait des dossards</h2>
                  </div>

                  {/* Contenu */}
                  <div className="space-y-6">
                    <div className="bg-gray-50 rounded-2xl p-6">
                      <div className="space-y-4">
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                          <span className="font-bold text-gray-900">Samedi 2 août</span>
                          <span className="px-4 py-2 bg-[color:var(--color-jaune)] text-white font-bold rounded-lg">
                            15h à 18h
                          </span>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-white rounded-xl shadow-sm">
                          <span className="font-bold text-gray-900">Dimanche 3 août</span>
                          <span className="px-4 py-2 bg-[color:var(--color-jaune)] text-white font-bold rounded-lg">
                            à partir de 7h30
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6">
                      <div className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-[color:var(--color-bleu)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                          📍
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">Salle intergénérationnelle d'Hirel</h3>
                          <p className="text-gray-600">36 Rue des Alleux, 35120 Hirel</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Parkings */}
              <div className="group relative animate-slide-up delay-100">
                <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-vert)] via-green-400 to-[color:var(--color-vert)] rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-none"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300">
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[color:var(--color-vert)] to-green-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      🅿️
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Parkings</h2>
                  </div>

                  <div className="space-y-6">
                    <div className="bg-green-50 rounded-2xl p-6">
                      <div className="text-center mb-4">
                        <span className="text-4xl font-black text-[color:var(--color-vert)]">300</span>
                        <p className="text-gray-700 font-semibold">places disponibles</p>
                      </div>
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-[color:var(--color-vert)] rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0 mt-1">
                            📍
                          </div>
                          <div>
                            <p className="font-bold text-gray-900">8-16 Rue du Bord de Mer, 35120 Hirel</p>
                            <p className="text-sm text-gray-600 mt-1">⏱️ À 10 min à pied du départ</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="bg-red-50 rounded-2xl p-6 border-2 border-red-200">
                      <div className="flex items-center space-x-3">
                        <span className="text-2xl">⚠️</span>
                        <p className="font-bold text-red-700">Aucune consigne pour les sacs ne sera proposée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Ravitaillements */}
              <div className="group relative animate-slide-up delay-200">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-blue-400 to-blue-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-none"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300">
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      💧
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Ravitaillements</h2>
                  </div>

                  <div className="space-y-4">
                    <div className="bg-blue-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-2 bg-blue-500 text-white font-bold rounded-lg text-lg">10 KM</span>
                        <span className="font-semibold text-gray-900">Ravitaillement en cours</span>
                      </div>
                      <p className="text-gray-700 ml-2">💧 Eau disponible entre le <span className="font-bold text-blue-600">5ème et 6ème km</span></p>
                    </div>
                    
                    <div className="bg-green-50 rounded-2xl p-6">
                      <div className="flex items-center space-x-4 mb-3">
                        <span className="px-3 py-2 bg-green-500 text-white font-bold rounded-lg text-lg">ARRIVÉE</span>
                        <span className="font-semibold text-gray-900">Ravitaillement final</span>
                      </div>
                      <p className="text-gray-700 ml-2">🥤 Devant la salle intergénérationnelle d'Hirel</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Carte Contact */}
              <div className="group relative animate-slide-up delay-300">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 rounded-3xl opacity-75 group-hover:opacity-100 transition-all duration-300 blur-sm group-hover:blur-none"></div>
                <div className="relative bg-white/95 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 hover:bg-white transition-all duration-300">
                  
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center text-3xl shadow-lg">
                      📧
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900">Contact</h2>
                  </div>

                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6">
                    <p className="text-lg text-gray-700 mb-4 text-center">Pour toute question, n'hésitez pas à nous contacter</p>
                    <div className="text-center">
                      <a 
                        href="mailto:contact.gmj.events@gmail.com" 
                        className="inline-flex items-center space-x-3 px-6 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                      >
                        <span className="text-xl">✉️</span>
                        <span>contact.gmj.events@gmail.com</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section bonus - Conseils pratiques */}
            <div className="mt-16 animate-slide-up delay-400">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <div className="text-center mb-8">
                  <h3 className="text-3xl font-bold text-white mb-4">💡 Conseils pratiques</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl mb-3">👟</div>
                      <h4 className="font-bold text-white mb-2">Équipement</h4>
                      <p className="text-white/80 text-sm">Chaussures de trail recommandées pour le terrain varié</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl mb-3">🌡️</div>
                      <h4 className="font-bold text-white mb-2">Météo</h4>
                      <p className="text-white/80 text-sm">Vérifiez les conditions météo et adaptez votre tenue</p>
                    </div>
                    <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                      <div className="text-4xl mb-3">⏰</div>
                      <h4 className="font-bold text-white mb-2">Ponctualité</h4>
                      <p className="text-white/80 text-sm">Arrivez 30 min avant le départ pour l'échauffement</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </section>
      
      <Footer />

      {/* Animations personnalisées */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(-180deg); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delay {
          animation: float-delay 8s ease-in-out infinite;
        }
        @keyframes glow {
          0%, 100% { text-shadow: 0 0 20px rgba(255, 193, 7, 0.5); }
          50% { text-shadow: 0 0 40px rgba(255, 193, 7, 0.8), 0 0 60px rgba(255, 193, 7, 0.3); }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
      `}</style>
    </>
  );
};

export default InfosPratiques;
