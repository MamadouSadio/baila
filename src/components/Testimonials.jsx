const testimonials = [
  {
    id: 1,
    name: 'Mamadou Diallo',
    title: 'Chef de famille',
    photo: null, // Placeholder pour photo
  },
  {
    id: 2,
    name: 'Fatou Sarr',
    title: 'Administratrice',
    photo: null,
  },
  {
    id: 3,
    name: 'Ibrahima Ndiaye',
    title: 'Membre de la famille',
    photo: null,
  },
]

function PhotoPlaceholder({ size = 'md' }) {
  const isMd = size === 'md'
  return (
    <div
      className={`
        flex items-center justify-center rounded-full bg-slate-200 border-2 border-slate-300
        text-slate-400 overflow-hidden
        ${isMd ? 'w-20 h-20' : 'w-16 h-16'}
      `}
      aria-hidden
    >
      <svg
        className={isMd ? 'w-10 h-10' : 'w-8 h-8'}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
        aria-hidden
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 3.75 3.75 0 017.5 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    </div>
  )
}

function TestimonialCard({ testimonial }) {
  const { name, title, photo } = testimonial
  return (
    <article className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#1A3B8A] hover:shadow-lg transition-all duration-300">
      {photo ? (
        <img
          src={photo}
          alt={name}
          className="w-20 h-20 rounded-full object-cover border-2 border-slate-200 mb-4 group-hover:border-[#1A3B8A] transition-colors"
        />
      ) : (
        <PhotoPlaceholder size="md" className="mb-4" />
      )}
      <h3 className="font-semibold text-lg text-slate-900 mb-1">{name}</h3>
      <p className="text-sm text-slate-600 mb-3">{title}</p>
      <div className="mt-2 inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
        <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-slate-200 text-slate-500">
          <svg
            className="h-3 w-3"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
        <span>Vidéo du témoignage à venir</span>
      </div>
    </article>
  )
}

function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
            Témoignages
          </h2>
          <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto">
            Les vidéos de témoignages des familles utilisatrices de Baïla Généa seront bientôt disponibles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials
