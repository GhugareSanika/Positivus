import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Services from "@/components/services"
import WorkingProcess from "@/components/working-process"
import Testimonials from "@/components/testimonials"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <WorkingProcess />
      <Testimonials />
      <Footer />
    </main>
  )
}
