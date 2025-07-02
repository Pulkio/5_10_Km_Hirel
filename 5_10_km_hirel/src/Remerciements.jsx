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
      
      {/* Hero Section moderne */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 overflow-hidden">
        
        {/* Background Pattern - Même style que les autres pages */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Particules flottantes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-[color:var(--color-jaune)] rounded-full animate-float opacity-60"></div>
          <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-[color:var(--color-vert)] rounded-full animate-float-delay opacity-40"></div>
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-white rounded-full animate-float opacity-30"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-[color:var(--color-jaune)] rounded-full animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-float opacity-50"></div>
          <div className="absolute top-2/3 left-1/4 w-1 h-1 bg-purple-300 rounded-full animate-float-delay opacity-40"></div>
        </div>

        {/* Gradients décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[color:var(--color-bleu)]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[color:var(--color-vert)]/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-64 h-64 bg-gradient-to-bl from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"></div>

        <main className="relative pt-32 pb-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            
            {/* Titre principal moderne */}
            <div className="text-center mb-16 animate-fade-in">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-black mb-6">
                <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
                  Nos
                </span>
                <br />
                <span className="text-[color:var(--color-jaune)] animate-glow">
                  Partenaires
                </span>
              </h1>
              
              {/* Sous-titre avec animation */}
              <p className="text-xl md:text-2xl text-white/80 max-w-4xl mx-auto leading-relaxed animate-slide-up">
                Merci à tous nos partenaires pour leur confiance et leur engagement à nos côtés.<br />
                <span className="text-[color:var(--color-jaune)] font-semibold">
                  Leur soutien rend cet événement possible et unique !
                </span>
              </p>
            </div>

            {/* Section remerciements */}
            <div className="mb-16 animate-fade-in-up">
              <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl rounded-3xl p-8 border border-white/20 shadow-2xl">
                <div className="flex items-center justify-center space-x-4 mb-6">
                  <span className="text-5xl animate-bounce">🤝</span>
                  <h2 className="text-3xl font-bold text-white"><span className="text-white">Un grand merci !</span></h2>
                  <span className="text-5xl animate-bounce" style={{animationDelay: '0.5s'}}>❤️</span>
                </div>
                <p className="text-lg text-white/90 text-center max-w-3xl mx-auto">
                  Chaque partenaire contribue à faire de cet événement une réussite. 
                  Grâce à eux, nous pouvons offrir une expérience exceptionnelle à tous les participants !
                </p>
              </div>
            </div>

            {/* Grille des partenaires */}
            <div className="animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <h3 className="text-2xl font-bold text-white text-center mb-8">
                <span className="text-white">Ils nous font confiance</span>
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {partners.map((partner, idx) => (
                  <div 
                    key={idx} 
                    className="group relative animate-fade-in-card"
                    style={{animationDelay: `${idx * 0.1}s`}}
                  >
                    {/* Background gradient animé */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-jaune)] via-pink-500 to-purple-500 rounded-2xl opacity-20 group-hover:opacity-40 blur-sm transition-all duration-300"></div>
                    
                    {/* Carte partenaire */}
                    <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-xl group-hover:shadow-2xl transition-all duration-300 group-hover:transform group-hover:-translate-y-2">
                      
                      {/* Badge catégorie - TEXTE EN BLANC */}
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-gradient-to-r from-[color:var(--color-jaune)]/80 to-yellow-400/80 text-black font-bold rounded-full text-xs border border-white/20">
                          {partner.category}
                        </span>
                      </div>

                      {/* Zone logo (placeholder stylé) */}
                      <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-white/20 to-white/5 rounded-xl border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <span className="text-3xl opacity-60">🏢</span>
                      </div>

                      {/* Nom du partenaire - DÉJÀ EN BLANC */}
                      <h4 className="text-lg font-bold text-white text-center mb-2 group-hover:text-[color:var(--color-jaune)] transition-colors duration-300">
                        <span className="text-white">{partner.name}</span>
                      </h4>

                      {/* Ligne décorative */}
                      <div className="w-12 h-1 bg-gradient-to-r from-[color:var(--color-jaune)] to-transparent mx-auto rounded-full group-hover:w-full transition-all duration-500"></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to action pour nouveaux partenaires */}
            <div className="mt-16 text-center animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <div className="bg-gradient-to-r from-[color:var(--color-vert)]/20 to-[color:var(--color-bleu)]/20 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4">
                  <span className="text-white">Vous souhaitez devenir partenaire ?</span>
                </h3>
                <p className="text-white/80 mb-6 max-w-2xl mx-auto">
                  Rejoignez notre aventure et soutenez un événement sportif qui rassemble toute la communauté !
                </p>
                <a 
                  href="mailto:contact.gmj.events@gmail.com" 
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 text-white font-bold rounded-2xl shadow-xl hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 border border-white/20"
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
