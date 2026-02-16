import { useState } from 'react'
import Nav from './components/Nav'
import Hero from './components/Hero'
import MotDuDG from './components/MotDuDG'
import Features from './components/Features'
import ArbreGenealogique from './components/ArbreGenealogique'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'
import CGUModal from './components/CGUModal'

function App() {
  const [cguOpen, setCguOpen] = useState(false)

  return (
    <div className="min-h-screen flex flex-col">
      <Nav />
      <Hero />
      <main id="main">
        <MotDuDG />
        <Features />
        <ArbreGenealogique />
        <Testimonials />
        <CTA />
      </main>
      <Footer onOpenCGU={() => setCguOpen(true)} />
      <BackToTop />
      <CGUModal isOpen={cguOpen} onClose={() => setCguOpen(false)} />
    </div>
  )
}

export default App
