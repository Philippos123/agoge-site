import HeroSection from '../components/Hero-section';
import About from '../components/About-us';
import Footer from '../components/Footer';
import Testimonial from '../components/Testimonial';
import OurMissionmainHomePage from '../components/HomePageAbout';
import LogoClouds from '../components/LogoClouds';
import Products from '../components/Products';




const Home = () => {
  return (
    <>
      <HeroSection />
      <OurMissionmainHomePage />
      <Products />
      <LogoClouds />
      <Testimonial />
      <About />
      <Footer />
    </>
  );
};

export default Home;
