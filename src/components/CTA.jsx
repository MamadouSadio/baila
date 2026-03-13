import { useLanguage } from '../LanguageContext'

function CTA() {
  const { lang, setLang } = useLanguage()

  return (
    <section id="cta" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-6 text-center">
          {lang === 'fr' ? "Conditions d'accès à Baïla Généa" : 'Access conditions for Baïla Généa'}
        </h2>

        <div className="flex justify-center mb-6">
          <div className="inline-flex rounded-full bg-slate-800/80 p-1">
            <button
              type="button"
              onClick={() => setLang('fr')}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-colors ${
                lang === 'fr' ? 'bg-white text-slate-900' : 'text-slate-200 hover:text-white'
              }`}
            >
              Français
            </button>
            <button
              type="button"
              onClick={() => setLang('en')}
              className={`px-3 py-1.5 text-xs sm:text-sm rounded-full font-medium transition-colors ${
                lang === 'en' ? 'bg-white text-slate-900' : 'text-slate-200 hover:text-white'
              }`}
            >
              English
            </button>
          </div>
        </div>

        {lang === 'fr' ? (
          <ul className="space-y-4 mb-10 text-slate-200">
            <li className="flex gap-3">
              <span className="text-green-400 shrink-0" aria-hidden>▸</span>
              <span>
                Vous avez la possibilité de tester Baïla Généa avec des enregistrements limités&nbsp;:
              </span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>20 membres</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>1 cérémonie</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>5 objets dans le musée</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>20 personnes pour les cotisations.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 shrink-0" aria-hidden>▸</span>
              <span>
                Le payement de la redevance annuelle vous enlève toutes les restrictions.
              </span>
            </li>
            <li className="flex gap-3 text-slate-400 text-sm">
              <span className="shrink-0" aria-hidden>▸</span>
              <span>Pour plus d&apos;informations nous vous invitons à consulter les CGU.</span>
            </li>
          </ul>
        ) : (
          <ul className="space-y-4 mb-10 text-slate-200">
            <li className="flex gap-3">
              <span className="text-green-400 shrink-0" aria-hidden>▸</span>
              <span>
                You can try Baïla Généa with a limited number of records:
              </span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>20 family members</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>1 ceremony</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>5 objects in the family museum</span>
            </li>
            <li className="flex gap-3 pl-6">
              <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
              <span>20 people for contributions.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-green-400 shrink-0" aria-hidden>▸</span>
              <span>
                Payment of the annual fee removes all these restrictions.
              </span>
            </li>
            <li className="flex gap-3 text-slate-400 text-sm">
              <span className="shrink-0" aria-hidden>▸</span>
              <span>For more information, please consult the Terms of Use (CGU).</span>
            </li>
          </ul>
        )}

        <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
          <a
            href="https://senaskane.vercel.app/login"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold bg-[#1A3B8A] text-white hover:bg-[#3F72B5] transition-colors"
          >
            Accéder à l&apos;application
          </a>
          <a
            href="mailto:contact@sahelfocus.com"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
          >
            Nous contacter
          </a>
          <a
            href="#redevance"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
          >
            {lang === 'fr' ? "S'inscrire / Payer la redevance" : 'Register / Pay the fee'}
          </a>
          <a
            href="https://drive.google.com/file/d/1b2PVVqxdoSPvJCap8JAJdd76xjpV7st3/view?usp=drivesdk"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-dashed border-white/50 text-white/90 hover:bg-white/10 hover:text-white transition-colors"
          >
            {lang === 'fr'
              ? 'Télécharger le bulletin de souscription'
              : 'Download the subscription form'}
          </a>
        </div>
        <div id="redevance" className="mt-10 text-sm sm:text-base text-slate-200 leading-relaxed">
          {lang === 'fr' ? (
            <p>
              Payement de la redevance annuelle de <strong>30&nbsp;000&nbsp;F&nbsp;CFA / 46&nbsp;€ / 55&nbsp;$</strong>{' '}
              par Wave ou Orange Money au numéro <strong>00&nbsp;221&nbsp;77&nbsp;640&nbsp;32&nbsp;31</strong> au nom
              de <strong>Moustapha Sall</strong>. Prière de mentionner votre identifiant pour l&apos;activation de votre
              compte.
            </p>
          ) : (
            <p>
              Payment of the annual fee of <strong>30,000 CFA / 46&nbsp;€ / 55&nbsp;$</strong> via Wave or Orange Money
              to the number <strong>00&nbsp;221&nbsp;77&nbsp;640&nbsp;32&nbsp;31</strong> in the name of{' '}
              <strong>Moustapha Sall</strong>. Please include your identifier so that your account can be activated.
            </p>
          )}
        </div>
      </div>
    </section>
  )
}

export default CTA
