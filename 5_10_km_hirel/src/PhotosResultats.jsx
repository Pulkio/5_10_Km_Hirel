import React from 'react';
import Header from './assets/components/Header';
import Footer from './assets/components/Footer';

const PhotosResultats = () => {
  return (
    <>
      <Header />
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex flex-col justify-center items-center py-24">
        
        {/* Background Pattern - Cohérent avec les autres pages */}
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
        </div>

        {/* Gradients décoratifs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-[color:var(--color-bleu)]/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-[color:var(--color-vert)]/20 to-transparent rounded-full blur-3xl"></div>

        <div className="relative max-w-2xl w-full mx-auto px-4 text-center animate-fade-in">
          
          {/* Titre avec glow fixé */}
          <h1 className="text-5xl md:text-7xl font-black mb-8">
            <span className="bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              Photos
            </span>
            <span className="text-white"> & </span>
            <span className="text-[color:var(--color-jaune)] animate-glow">
              Résultats
            </span>
          </h1>
          
          {/* Carte principale */}
          <div className="bg-white/10 rounded-3xl p-8 shadow-xl border border-white/20 backdrop-blur-xl">
            
            {/* Message d'attente avec icône animée */}
            <div className="mb-8">
              <div className="text-6xl mb-4 animate-bounce">📅</div>
              <p className="text-xl md:text-2xl text-white/90 mb-6 leading-relaxed">
                La course n'a pas encore eu lieu.<br />
                Les liens vers les photos officielles et la page de résultats seront affichés ici après les courses !
              </p>
            </div>

            {/* Date de l'événement */}
            <div className="bg-gradient-to-r from-[color:var(--color-jaune)]/20 to-yellow-400/20 rounded-2xl p-6 mb-8 border border-[color:var(--color-jaune)]/30">
              <p className="text-lg text-white font-semibold mb-2">📆 Rendez-vous le</p>
              <p className="text-3xl font-black text-[color:var(--color-jaune)]">Dimanche 3 Août 2025</p>
            </div>
            
            {/* Boutons désactivés stylés */}
            <div className="flex flex-col md:flex-row items-center gap-4 justify-center">
              
              {/* Bouton Photos */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-[color:var(--color-jaune)] to-yellow-400 rounded-2xl opacity-30 blur-sm"></div>
                <span className="relative inline-flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl shadow-lg text-lg cursor-not-allowed border border-white/20">
                  <span className="text-2xl">📸</span>
                  <span>Photos officielles</span>
                  <span className="text-sm opacity-60">(à venir)</span>
                </span>
              </div>

              {/* Bouton Résultats */}
              <div className="group relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-blue-400 rounded-2xl opacity-30 blur-sm"></div>
                <span className="relative inline-flex items-center space-x-3 px-6 py-4 bg-white/10 backdrop-blur-sm text-white font-bold rounded-2xl shadow-lg text-lg cursor-not-allowed border border-white/20">
                  <span className="text-2xl">🏁</span>
                  <span>Résultats officiels</span>
                  <span className="text-sm opacity-60">(à venir)</span>
                </span>
              </div>
            </div>

            {/* Information supplémentaire */}
            <div className="mt-8 p-4 bg-blue-500/20 rounded-xl border border-blue-400/30">
              <div className="flex items-center justify-center space-x-2 text-blue-200">
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

      {/* Animations CSS fixes */}
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
            text-shadow: 0 0 40px rgba(255, 193, 7, 0.8), 0 0 60px rgba(255, 193, 7, 0.5), 0 0 80px rgba(255, 193, 7, 0.3);
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
        .animate-fade-in {
          animation: fade-in 1s ease-out forwards;
        }
      `}</style>
    </>
  );
};

export default PhotosResultats;
