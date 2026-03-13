import { useLanguage } from '../LanguageContext'

function MotDuDG() {
  const { lang } = useLanguage()

  return (
    <section id="mot-du-dg" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-slate-50/50">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            {lang === 'fr'
              ? "Mot de l'Administrateur du Cabinet Sahel Focus Management"
              : 'Message from the Administrator of Cabinet Sahel Focus Management'}
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
          {/* Photo du DG */}
          <div className="flex-shrink-0 mx-auto lg:mx-0">
            <div className="w-48 sm:w-56 lg:w-64 aspect-[3/4] rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <img
                src="/dg-photo.png"
                alt={
                  lang === 'fr'
                    ? 'Administrateur du Cabinet Sahel Focus Management'
                    : 'Administrator of Cabinet Sahel Focus Management'
                }
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-center text-sm text-slate-600 mt-4 font-medium">
              Mr Moustapha TALL
            </p>
          </div>

          {/* Texte */}
          <div className="flex-1 prose prose-slate max-w-none prose-p:text-slate-700 prose-p:leading-relaxed prose-p:mb-5 prose-p:text-base sm:prose-p:text-lg">
            {lang === 'fr' ? (
              <>
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
              </>
            ) : (
              <>
                <p>
                  In West Africa, in the face of current socio‑economic constraints, the family and parenthood are shifting toward another type of family model that could be called a “strict nuclear family”. The large family courtyard has given way to the “house with restricted rooms”.
                </p>
                <p>
                  This transformation has not spared the role of the genealogical griot who, during unannounced visits or family ceremonies, used to recount our genealogy in an elogious speech. Master of the spoken word, faithful guardian of oral tradition, undisputed keeper of ancestral customs, the griot has become an endangered figure in African societies. As the African family changes and the griots disappear, genealogical ties – key factors of social regulation – are greatly weakened.
                </p>
                <p>
                  However, the advent of information and communication technologies offers a real remedy to this threat hanging over parenthood. Applications such as WhatsApp, Telegram and others have greatly strengthened exchanges and discussions among family members through the creation of groups. But these exchanges, despite their intensity, do not really enlighten people about their true family relationships.
                </p>
                <p className="font-semibold text-slate-900">
                  It is to address this shortcoming that Cabinet SAHFCOM created Baïla Généa.
                </p>
                <p>
                  Baïla Généa is therefore a digital application that allows every family to create its own family tree.
                </p>
                <p>
                  The main features of Baïla Généa particularly concern the family members who are still alive. For each family, in addition to the large tree that goes back several generations, it is also necessary to create sub‑trees from the third generation onwards.
                </p>
                <p className="font-medium text-slate-900 italic">
                  Hoping that Baïla Généa will be the missing piece of the puzzle to restore and strengthen family relationships and bonds, we remain very attentive to your comments and suggestions.
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MotDuDG
