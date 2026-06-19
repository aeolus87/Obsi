import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Artists } from '@/components/Artists'
import { Gallery } from '@/components/Gallery'
import { Services } from '@/components/Services'
import { BookingCTA } from '@/components/BookingCTA'
import { Reviews } from '@/components/Reviews'
import { Contact } from '@/components/Contact'
import { Footer } from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-ink-900 text-skin-100" data-testid="home-root">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Artists />
        <Gallery />
        <Services />
        <BookingCTA />
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
