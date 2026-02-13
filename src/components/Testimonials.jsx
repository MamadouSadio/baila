import { useState } from 'react'

const testimonials = [
  {
    id: 1,
    name: 'Mamadou Diallo',
    title: 'Chef de famille',
    photo: null, // Placeholder pour photo
    videoId: 'dQw4w9WgXcQ', // Exemple - remplacez par les vrais IDs YouTube
  },
  {
    id: 2,
    name: 'Fatou Sarr',
    title: 'Administratrice',
    photo: null,
    videoId: 'dQw4w9WgXcQ', // Exemple
  },
  {
    id: 3,
    name: 'Ibrahima Ndiaye',
    title: 'Membre de la famille',
    photo: null,
    videoId: 'dQw4w9WgXcQ', // Exemple
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

function TestimonialCard({ testimonial, onClick }) {
  const { name, title, photo } = testimonial
  return (
    <button
      type="button"
      onClick={() => onClick(testimonial)}
      className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white border-2 border-slate-200 hover:border-[#1A3B8A] hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#1A3B8A] focus:ring-offset-2"
      aria-label={`Voir le témoignage de ${name}`}
    >
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
      <span className="text-xs text-[#1A3B8A] font-medium group-hover:underline">
        Voir le témoignage →
      </span>
    </button>
  )
}

function VideoModal({ videoId, isOpen, onClose }) {
  if (!isOpen || !videoId) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="Témoignage vidéo"
    >
      <div
        className="relative w-full max-w-4xl bg-black rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-full bg-white/90 hover:bg-white p-2 text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
          aria-label="Fermer la vidéo"
        >
          <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <div className="relative aspect-video">
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
            title="Témoignage vidéo"
            className="absolute inset-0 w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>
    </div>
  )
}

function Testimonials() {
  const [selectedVideo, setSelectedVideo] = useState(null)

  return (
    <>
      <section id="testimonials" className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-slate-900 mb-4">
              Témoignages
            </h2>
            <p className="text-slate-600 text-lg sm:text-xl max-w-2xl mx-auto">
              Découvrez ce que nos utilisateurs disent de Baïla Généa.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard
                key={testimonial.id}
                testimonial={testimonial}
                onClick={setSelectedVideo}
              />
            ))}
          </div>
        </div>
      </section>

      <VideoModal
        videoId={selectedVideo?.videoId}
        isOpen={!!selectedVideo}
        onClose={() => setSelectedVideo(null)}
      />
    </>
  )
}

export default Testimonials
