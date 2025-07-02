import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

const partners = [
  { name: 'Intermarché St Méloir des Ondes', logo: null, category: 'Alimentation' },
  { name: 'Auto Premium 35', logo: null, category: 'Automobile' },
  { name: 'Nextrun', logo: null, category: 'Running' },
  { name: 'Finishers', logo: null, category: 'Sport' },
  { name: 'Letanoux', logo: null, category: 'Local' },
  { name: 'Maman Cédric', logo: null, category: 'Local' },
];

export default function Remerciements() {
  return (
    <>
      <Header />
      
      {/* Hero Section moderne - fond clair et éléments subtils */}
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
            
            {/* Titre principal moderne et lumineux */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-[color:var(--color-bleu)]">
                Nos <span className="bg-gradient-to-r from-blue-500 to-blue-700 bg-clip-text text-transparent">Partenaires</span>
              </h1>
              {/* Sous-titre */}
              <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Merci à tous nos partenaires pour leur confiance et leur engagement à nos côtés.<br />
                <span className="text-orange-600 font-semibold">
                  Leur soutien rend cet événement possible et unique !
                </span>
              </p>
            </div>

            {/* Section remerciements */}
            <div className="mb-16">
              <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="text-5xl animate-bounce">🤝</span>
                  <h2 className="text-3xl font-bold text-gray-800"><span className="text-gray-800">Un grand merci !</span></h2>
                  <span className="text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>❤️</span>
                </div>
                <p className="text-lg text-gray-700 text-center max-w-3xl mx-auto">
                  Chaque partenaire contribue à faire de cet événement une réussite. 
                  Grâce à eux, nous pouvons offrir une expérience exceptionnelle à tous les participants !
                </p>
              </div>
            </div>

            {/* Grille des partenaires */}
            <div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-8">
                <span className="text-gray-800">Ils nous font confiance</span>
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="group relative"
                  >
                    {/* Carte partenaire */}
                    <div className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md group-hover:shadow-xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                      {/* Badge catégorie */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-yellow-200 to-orange-200 text-orange-700 font-bold rounded-full text-xs border border-yellow-300">
                          {partner.category}
                        </span>
                      </div>
                      {/* Zone logo (placeholder stylé) */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-yellow-50 to-orange-50 rounded-xl border border-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl opacity-60">🏢</span>
                      </div>
                      {/* Nom du partenaire */}
                      <h4 className="text-lg font-bold text-gray-800 text-center mb-2 group-hover:text-orange-600 transition-colors duration-300">
                        {partner.name}
                      </h4>
                      {/* Ligne décorative */}
                      <div className="w-12 h-1 bg-gradient-to-r from-orange-400 to-transparent mx-auto rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action pour nouveaux partenaires */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-3xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  <span className="text-gray-800">Vous souhaitez devenir partenaire ?</span>
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  Rejoignez notre aventure et soutenez un événement sportif qui rassemble toute la communauté !
                </p>
                <a 
                  href="mailto:contact.gmj.events@gmail.com" 
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-yellow-300"
                >
                  <span>✉️</span>
                  <span>Nous contacter</span>
                </a>
              </div>
            </div>
          </div>
        </main>
      </section>
      
      <Footer />

      {/* Animations CSS */}
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
          0%, 100% { 
            text-shadow: 0 0 20px rgba(255, 193, 7, 0.5), 0 0 40px rgba(255, 193, 7, 0.3);
          }
          50% { 
            text-shadow: 0 0 40px rgba(255, 193, 7, 0.8), 0 0 60px rgba(255, 193, 7, 0.5);
          }
        }
        .animate-glow {
          animation: glow 3s ease-in-out infinite;
        }
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fade-in-card {
          from {
            opacity: 0;
            transform: translateY(30px) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
        .animate-slide-up {
          animation: slide-up 1s ease-out 0.3s forwards;
          opacity: 0;
        }
        .animate-fade-in-up {
          animation: fade-in 1s ease-out forwards;
          opacity: 0;
        }
        .animate-fade-in-card {
          animation: fade-in-card 0.8s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </>
  );
}
