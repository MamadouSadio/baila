import { useLanguage } from '../LanguageContext'

function Footer({ onOpenCGU }) {
  const { lang } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 sm:py-10 px-4 sm:px-6 lg:px-8 bg-slate-900 text-slate-400">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="text-center sm:text-left">
          <p className="text-slate-500 text-sm font-medium">
            République du Sénégal — Un Peuple - Un but - Une Foi
          </p>
          <p className="text-slate-500 text-sm mt-0.5">
            Ministère.............
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-700/50">
          <p className="text-sm">
            © {year} Baïla Généa · Cabinet Sahel Focus Management
          </p>
          <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-sm">
            <a
              href="https://senaskane.vercel.app/login"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors font-medium"
            >
              {lang === 'fr' ? "Accéder à l'application" : 'Open the app'}
            </a>
            <a href="#features" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Fonctionnalités' : 'Features'}
            </a>
            <a href="#arbre" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Arbre généalogique' : 'Family tree'}
            </a>
            <a href="#testimonials" className="hover:text-white transition-colors">
              {lang === 'fr' ? 'Témoignages' : 'Testimonials'}
            </a>
            <a href="#cta" className="hover:text-white transition-colors">
              {lang === 'fr' ? "Conditions d'accès" : 'Access conditions'}
            </a>
            {onOpenCGU ? (
              <button type="button" onClick={onOpenCGU} className="hover:text-white transition-colors bg-transparent border-none cursor-pointer text-sm font-normal text-inherit p-0">CGU</button>
            ) : (
              <span className="text-sm">CGU</span>
            )}
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
