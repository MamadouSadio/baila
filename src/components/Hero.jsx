import SponsorCarousel from './SponsorCarousel'

function Hero() {
  return (
    <header className="relative min-h-[90vh] sm:min-h-screen flex flex-col overflow-hidden bg-gradient-to-b from-[#1A3B8A] to-[#3F72B5] text-white">
      {/* ========== Haut de bannière : Logo + Carousel sponsors (6 slides) ========== */}
      <div className="flex-shrink-0 w-full px-3 sm:px-6 lg:px-8 pt-14 sm:pt-16 pb-4 sm:pb-5 border-b border-white/15">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-6">
          {/* Espace réservé au logo */}
          <div
            className="logo-area flex-shrink-0 flex items-center justify-center w-32 h-14 sm:w-40 sm:h-16 lg:w-48 lg:h-20 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20"
            aria-label="Emplacement du logo"
          >
            <span className="text-white/70 text-xs sm:text-sm text-center px-2">
              Logo
            </span>
          </div>

          {/* Carousel 6 slides sponsors */}
          <SponsorCarousel />
        </div>
      </div>

      {/* Fond décoratif */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-white/30 blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#3F72B5]/40 blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Contexte institutionnel (République du Sénégal, MFS) */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 pt-2">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-blue-100/90 text-xs sm:text-sm">
            <span className="font-semibold text-green-300">République du Sénégal</span>
            {' — '}
            Un Peuple - Un but - Une Foi
          </p>
          <p className="text-blue-100/80 text-xs mt-0.5">
            Ministère de la Famille et des Solidarités (MFS) · Direction de la Famille et de la Protection des Couches Vulnérables
          </p>
        </div>
      </div>

      {/* Contenu principal hero */}
      <div className="relative z-10 flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="font-display font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-tight mb-4 animate-slide-up text-balance">
            Baïla Généa
          </h1>
          <p className="text-lg sm:text-xl text-blue-50/95 max-w-2xl mx-auto mb-4 animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:150ms]">
            Baïla Généa est un outil qui vous permet de créer votre arbre généalogique.
          </p>
          <p className="text-sm sm:text-base text-blue-100/90 max-w-xl mx-auto mb-8 sm:mb-10 animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:200ms]">
            Possibilité d&apos;imprimer l&apos;arbre sur différents supports (papier, vinyle, bâche…) et sur différentes dimensions (A0, A3, grands formats).
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up opacity-0 [animation-fill-mode:forwards] [animation-delay:300ms]">
            <a
              href="https://senaskane.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-white text-[#1A3B8A] shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-200"
            >
              Accéder à l&apos;application
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-white/80 text-white hover:bg-white/10 transition-all duration-200"
            >
              En savoir plus
            </a>
            <a
              href="#cta"
              className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-white/80 text-white hover:bg-white/10 transition-all duration-200"
            >
              Conditions d&apos;accès
            </a>
          </div>
        </div>
      </div>

      {/* Indicateur scroll */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden sm:block pointer-events-none">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/80 animate-bounce" />
        </div>
      </div>
    </header>
  )
}

export default Hero
