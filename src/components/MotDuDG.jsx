function MotDuDG() {
  return (
    <section id="mot-du-dg" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Le Mot du DG
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Photo du DG */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="w-48 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/dg-photo.png"
                alt="Directeur Général - Cabinet Sahel Focus Management"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-slate-600 mt-4 font-medium">
              Directeur Général
            </p>
            <p className="text-center text-sm text-slate-500">
              Cabinet Sahel Focus Management
            </p>
          </div>

          {/* Texte */}
          <div className="flex-1 prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base sm:prose-p:text-lg">
            <p>
              En Afrique de l&apos;Ouest, face aux contraintes socio-économiques actuelles, la famille et la parentalité vivent un glissement vers un autre type de famille et de parentalité qu&apos;on pourrait appeler « famille nucléaire stricte ». La grande cour familiale a cédé la place à la « villa aux chambres restreintes ».
            </p>
            <p>
              Cette mutation n&apos;a pas épargné le rôle du griot généalogiste qui, lors de ses visites inopinées ou lors des cérémonies familiales, nous retrace notre généalogie, dans un discours élogieux. Maître de la parole, fidèle gardien de la tradition orale, conservateur incontesté des us et coutumes ancestraux, le griot est devenu une espèce en voie de disparition dans la société africaine. De cette mutation que subit la famille africaine et de cette disparition qui menace les griots, les liens généalogiques, facteurs de régulation sociale, vont beaucoup en pâtir.
            </p>
            <p>
              Cependant, l&apos;avènement des technologies de l&apos;information et de la communication constitue un réel palliatif par rapport à ce fléau qui guette la parentalité. En effet, des applications comme WhatsApp, Telegram et autres ont beaucoup renforcé les échanges et discussions entre les membres de la famille à travers la création de groupes. Mais ces échanges, malgré leur intensité, n&apos;édifient pas les acteurs sur leurs réels liens de parenté.
            </p>
            <p className="font-semibold text-slate-900">
              C&apos;est dans le but de pallier à ce manquement que le cabinet SAHFCOM a créé Baïla Généa.
            </p>
            <p>
              Baïla Généa est donc une application informatique qui permet à chaque famille de créer son arbre généalogique.
            </p>
            <p>
              Il se trouve que les principales fonctionnalités de Baïla Généa concernent particulièrement les membres de la famille qui sont toujours en vie. Aussi, il serait nécessaire pour chaque famille, en plus du grand arbre qui remonte à des générations, de créer des sous-arbres généalogiques dès la troisième génération.
            </p>
            <p className="font-medium text-slate-900 italic">
              En espérant que Baïla Généa serait la pièce qui manquait au puzzle pour redorer le blason des relations et liens familiaux, nous resterons très attentifs à vos commentaires et suggestions.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default MotDuDG
