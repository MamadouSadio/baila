function CTA() {
  return (
    <section id="cta" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display font-bold text-3xl sm:text-4xl mb-8 text-center">
          Conditions d&apos;accès à Baïla Généa
        </h2>

        <ul className="space-y-4 mb-10 text-slate-200">
          <li className="flex gap-3">
            <span className="text-green-400 shrink-0" aria-hidden>▸</span>
            <span>
              <strong className="text-white">Une famille :</strong> un compte, un administrateur, un arbre.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-[#3F72B5] shrink-0" aria-hidden>▸</span>
            <span>
              Après paiement de la redevance annuelle par <strong className="text-white">Orange Money</strong> ou <strong className="text-white">Wave</strong>, un login et un mot de passe seront envoyés à l&apos;administrateur du compte familial dans les <strong className="text-white">72 heures</strong> qui suivent. Ce dernier aura la possibilité de modifier ces codes d&apos;accès.
            </span>
          </li>
          <li className="flex gap-3 text-slate-400 text-sm">
            <span className="shrink-0" aria-hidden>▸</span>
            <span>
              Le Cabinet Sahel Focus Management n&apos;est responsable en quoi que ce soit des données diffusées dans votre compte familial.
            </span>
          </li>
        </ul>

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
            href="#"
            className="inline-flex items-center justify-center px-6 py-3.5 rounded-xl font-semibold border-2 border-white/60 text-white hover:bg-white/10 transition-colors"
          >
            S&apos;inscrire / Payer la redevance
          </a>
        </div>
      </div>
    </section>
  )
}

export default CTA
