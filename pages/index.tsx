import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Sponsor from '@/components/Sponsor'
import Testimonial from '@/components/Testimonial'
import Tools from '@/components/Tools'
import Product from '@/components/Product'
import Analytic from '@/components/Analytic'
import Resources from '@/components/Resources'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Sponsor />
      <Testimonial />
      <Tools />
      <Product />
      <Analytic />
      <Resources />
      <Footer />
    </div>
  )
}
