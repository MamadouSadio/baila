import { useState, useEffect } from 'react'
import { useLanguage } from '../LanguageContext'

const APP_URL = 'https://senaskane.vercel.app/login'

function Nav() {
  const { lang, setLang } = useLanguage()
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    {
      href: APP_URL,
      label: lang === 'fr' ? "Accéder à l'app" : 'Open the app',
      external: true,
    },
    { href: '#features', label: lang === 'fr' ? 'Fonctionnalités' : 'Features', external: false },
    {
      href: '#arbre',
      label: lang === 'fr' ? 'Arbre généalogique' : 'Family tree',
      external: false,
    },
    {
      href: '#testimonials',
      label: lang === 'fr' ? 'Témoignages' : 'Testimonials',
      external: false,
    },
    {
      href: '#cta',
      label: lang === 'fr' ? "Conditions d'accès" : 'Access conditions',
      external: false,
    },
  ]

  const LangSwitcher = ({ variant = 'desktop' }) => {
    const base =
      'inline-flex items-center rounded-full border text-xs font-medium transition-colors'
    const compact = variant === 'desktop'
      ? 'px-2 py-1 border-transparent text-slate-200/80 hover:text-white hover:border-white/40 bg-white/10'
      : 'px-3 py-1 border-slate-300 text-slate-600 bg-white'

    return (
      <div className="inline-flex items-center gap-1 rounded-full bg-black/5 px-1 py-0.5">
        <button
          type="button"
          onClick={() => setLang('fr')}
          className={`${base} ${compact} ${lang === 'fr' ? 'bg-white text-slate-900' : ''}`}
        >
          FR
        </button>
        <button
          type="button"
          onClick={() => setLang('en')}
          className={`${base} ${compact} ${lang === 'en' ? 'bg-white text-slate-900' : ''}`}
        >
          EN
        </button>
      </div>
    )
  }

  return (
    <>
      <nav
        className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? 'bg-white/95 shadow-md backdrop-blur-sm' : 'bg-transparent'
        }`}
        aria-label="Navigation principale"
      >
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
          <a href="#" className="flex-shrink-0 text-lg font-bold text-slate-900">
            {scrolled ? 'Baïla Généa' : <span className="text-white">Baïla Généa</span>}
          </a>

          <ul className="hidden items-center gap-6 sm:flex">
            {navLinks.map(({ href, label, external }) => (
              <li key={href + label}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className={`font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-[#1A3B8A] focus:ring-offset-2 rounded-lg ${
                    scrolled ? 'text-slate-700 hover:text-[#1A3B8A]' : 'text-white/90 hover:text-white'
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <LangSwitcher variant="desktop" />
          </div>

          <button
            type="button"
            className="flex h-10 w-10 flex-col items-center justify-center rounded-lg sm:hidden focus:outline-none focus:ring-2 focus:ring-[#1A3B8A] focus:ring-offset-2"
            onClick={() => setMobileOpen((o) => !o)}
            aria-expanded={mobileOpen}
            aria-label="Menu"
          >
            <span className={`block h-0.5 w-6 rounded ${scrolled ? 'bg-slate-900' : 'bg-white'}`} />
            <span className={`my-1 block h-0.5 w-6 rounded ${scrolled ? 'bg-slate-900' : 'bg-white'}`} />
            <span className={`block h-0.5 w-6 rounded ${scrolled ? 'bg-slate-900' : 'bg-white'}`} />
          </button>
        </div>

        {mobileOpen && (
          <div className="border-t border-slate-200/50 bg-white/98 px-4 py-4 backdrop-blur-sm sm:hidden">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs text-slate-500">
                {lang === 'fr' ? 'Langue du site' : 'Site language'}
              </span>
              <LangSwitcher variant="mobile" />
            </div>
            <ul className="flex flex-col gap-2">
              {navLinks.map(({ href, label, external }) => (
                <li key={href + label}>
                  <a
                    href={href}
                    {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    className="block rounded-lg px-3 py-2 font-medium text-slate-700 hover:bg-slate-100 hover:text-[#1A3B8A]"
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </>
  )
}

export default Nav
