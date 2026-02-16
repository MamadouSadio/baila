function CGUModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Conditions générales d'utilisation"
    >
      <div
        className="relative w-full max-w-3xl max-h-[90vh] flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex-shrink-0 flex items-center justify-between gap-4 px-6 py-4 border-b border-slate-200 bg-slate-50">
          <h2 className="font-display font-bold text-xl text-slate-900">
            Conditions générales d&apos;utilisation — Baïla Généa
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="shrink-0 rounded-full p-2 text-slate-600 hover:bg-slate-200 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#1A3B8A]"
            aria-label="Fermer"
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-6 sm:px-8 sm:py-8">
          <div className="prose prose-slate max-w-none prose-headings:font-display prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-700 prose-li:text-slate-700 prose-strong:text-slate-900 prose-headings:text-xl">
            <article className="space-y-6">
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 1 : Objet</h3>
                <p className="mb-2 text-sm sm:text-base">
                  Les présentes « conditions générales d&apos;utilisation » ont pour objet l&apos;encadrement juridique de l&apos;utilisation de la plateforme Baïla Généa. Ce contrat est conclu entre le gérant de l&apos;application, ci-après désigné « l&apos;Éditeur », et toute personne physique ou morale souhaitant accéder au site et à ses services, ci-après appelée « l&apos;Utilisateur ». Les conditions générales d&apos;utilisation doivent être acceptées par tout Utilisateur, et son accès au site vaut acceptation de ces conditions.
                </p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 2 : Mentions légales</h3>
                <p className="mb-2 text-sm sm:text-base">
                  La plateforme Baïlagénéa est développée par la société <strong>Sahel Focus Management (SAHFCOM)</strong>, entreprise individuelle dont le siège est au <strong>110 Sicap Foire - Dakar</strong>. La société est représentée par <strong>Moustapha SALL</strong>.
                </p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 3 : Accès aux services</h3>
                <p className="mb-2 text-sm sm:text-base">L&apos;Utilisateur de la plateforme Baïla Généa a accès aux services suivants : création de compte personnel, création et consultation de l&apos;arbre généalogique familial, recherche du lien de parenté, musée familial virtuel, recherche de compétences et de parents par localité, gestion des cérémonies familiales (notamment trésorerie). Chaque membre d&apos;une famille peut accéder à l&apos;application après paiement de la redevance familiale annuelle. Chaque famille désigne un administrateur, seul autorisé à créer ou modifier l&apos;arbre ; les autres membres consultent via un lien partagé. Après expiration d&apos;un an, le compte peut être suspendu puis supprimé définitivement au bout de trois mois. La plateforme peut être interrompue ou suspendue par l&apos;Éditeur, notamment pour maintenance, sans préavis ni justification.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 4 : Responsabilité de l&apos;Utilisateur</h3>
                <p className="mb-2 text-sm sm:text-base">L&apos;Utilisateur est responsable des risques liés à l&apos;utilisation de son identifiant et de son mot de passe ; en cas de divulgation, l&apos;Éditeur décline toute responsabilité. L&apos;Utilisateur assume l&apos;entière responsabilité de l&apos;utilisation des informations et contenus présents sur la plateforme. Tout usage ayant pour conséquence des dommages doit faire l&apos;objet d&apos;une indemnisation au profit du site. Les partenaires de SAHFCOM peuvent faire passer des messages ; ils s&apos;engagent à tenir des propos respectueux et acceptent que les publications soient modérées ou refusées par l&apos;Éditeur. L&apos;Éditeur s&apos;engage à citer le partenaire en cas d&apos;utilisation de sa publication.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 5 : Responsabilité de l&apos;Éditeur</h3>
                <p className="mb-2 text-sm sm:text-base">Tout dysfonctionnement du serveur ou du réseau, ainsi que la force majeure ou le fait d&apos;un tiers, ne peuvent engager la responsabilité de l&apos;Éditeur. Le cabinet SAHFCOM s&apos;engage à mettre en œuvre les moyens nécessaires pour garantir la sécurité et la confidentialité des données, sans garantir une sécurité totale. L&apos;Éditeur se réserve la faculté de ne pas garantir la fiabilité des sources.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 6 : Propriété intellectuelle</h3>
                <p className="mb-2 text-sm sm:text-base">Les contenus de la plateforme Baïla Généa sont protégés par le droit d&apos;auteur. L&apos;utilisateur devra obtenir l&apos;autorisation du cabinet Sahfcom avant toute reproduction, copie ou publication de ces contenus ; il reste libre d&apos;exploiter les informations qui concernent sa famille. L&apos;utilisateur est entièrement responsable du contenu qu&apos;il met en ligne et s&apos;engage à ne pas porter atteinte à un tiers.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 7 : Données personnelles</h3>
                <p className="mb-2 text-sm sm:text-base">L&apos;Utilisateur doit fournir des informations personnelles pour son inscription. L&apos;e-mail pourra être utilisée par le Cabinet Sahfcom pour la communication et la gestion du compte. Le cabinet garantit le respect de la vie privée conformément à la loi relative à l&apos;informatique, aux fichiers et aux libertés. Le site est déclaré auprès de la Commission Nationale de Protection des Données Personnelles.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 8 : Liens hypertextes</h3>
                <p className="mb-2 text-sm sm:text-base">Le contenu des domaines vers lesquels mènent les liens hypertextes réservés aux partenaires n&apos;engage pas la responsabilité du cabinet Sahfcom.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 9 : Evolution des CGU</h3>
                <p className="mb-2 text-sm sm:text-base">Le cabinet Sahfcom se réserve le droit de modifier les clauses de ces conditions générales d&apos;utilisation à tout moment et sans justification.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 10 : Durée du contrat</h3>
                <p className="mb-2 text-sm sm:text-base">La durée du contrat est indéterminée. Le contrat produit ses effets à compter du début de l&apos;utilisation du service.</p>
              </section>
              <section>
                <h3 className="text-lg font-display font-bold text-slate-900 mb-3">ARTICLE 11 : Droit applicable et juridiction compétente</h3>
                <p className="mb-2 text-sm sm:text-base">Le présent contrat dépend de la législation sénégalaise. En cas de litige non résolu à l&apos;amiable, les tribunaux du Sénégal sont compétents.</p>
              </section>
            </article>
          </div>
        </div>
        <div className="flex-shrink-0 px-6 py-4 border-t border-slate-200 bg-slate-50">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2.5 rounded-xl font-semibold bg-[#1A3B8A] text-white hover:bg-[#3F72B5] transition-colors"
          >
            Fermer
          </button>
        </div>
      </div>
    </div>
  )
}

export default CGUModal
