import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Technologies from '../components/Technologies';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#0a0a14]">
      <Navbar />
      <Hero />
      <Services />
      <Technologies />
      <Stats />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
};
  
export default Home;