import Nav from './components/Nav'
import Hero from './components/Hero'
import MotDuDG from './components/MotDuDG'
import Features from './components/Features'
import ArbreGenealogique from './components/ArbreGenealogique'
import Testimonials from './components/Testimonials'
import CTA from './components/CTA'
import CGU from './components/CGU'
import Footer from './components/Footer'
import BackToTop from './components/BackToTop'

function App() {
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
        <CGU />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}

export default App
