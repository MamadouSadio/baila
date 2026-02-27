const features = [
  {
    title: 'Arbre généalogique',
    description: 'Créez et visualisez votre arbre généalogique.',
    icon: '🌳',
  },
  {
    title: 'Recherche par localité',
    description: 'Recherchez des parents dans une localité quelconque, partout dans le monde (régions, départements, communes).',
    icon: '📍',
  },
  {
    title: 'Lien de parenté',
    description: 'Recherchez le lien de parenté entre deux membres quelconques de la famille et visualisez les relations.',
    icon: '🔗',
  },
  {
    title: 'Compétences professionnelles',
    description: 'Recherchez une compétence professionnelle dans la famille (enseignement, santé, artisanat, mécanique, BTP, agriculture…).',
    icon: '💼',
  },
  {
    title: 'Musée familial',
    description: 'Disposez d\'un musée familial présentant l\'image d\'objets symboliques appartenant à toute la famille ou à un membre.',
    icon: '🏛️',
  },
  {
    title: 'Cérémonies familiales',
    description: 'Publiez et gérez les cérémonies familiales : ziar (date, lieu, comptabilité), tour de famille, mariage (mariés, parrain, marraine, belles-sœurs…), autres cérémonies.',
    icon: '🎉',
  },
]

function Features() {
  return (
    <section id="features" className="py-16 sm:py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Baïla Généa vous donne les possibilités suivantes
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Généalogie, recherche de proches, compétences, musée familial et gestion des cérémonies — tout en un.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {features.map((feature, i) => (
            <article
              key={feature.title}
              className="group relative p-6 sm:p-8 rounded-2xl bg-slate-50 border border-slate-200/80 hover:border-[#3F72B5]/40 hover:shadow-lg hover:shadow-[#3F72B5]/10 transition-all duration-300"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="text-3xl sm:text-4xl mb-4">{feature.icon}</div>
              <h3 className="font-display font-semibold text-xl text-slate-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-slate-600 leading-relaxed">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Features
