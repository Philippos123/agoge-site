import HeroSection from '../components/Hero-section';
import Features from '../components/Features';
import PlanetHeader from '../components/Planet_header';
import SpaceChart from '../components/SpaceChart';
import Offer from '../components/offers';
import About from '../components/About-us';
import Footer from '../components/Footer';
import Aboutus from '../components/About';


const Home = () => {
  return (
    <>
      <HeroSection />
      <Features />
      <PlanetHeader />
      <SpaceChart />
      <Offer />
      <Aboutus />
      <About />
      <Footer />
    </>
  );
};

export default Home;
