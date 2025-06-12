import Footer from '../components/Footer';
import OnboardingData from '../components/onboardingData';  
import Navbar from '../components/NavBar';
import About from '../components/About-us';
import Kalkylator from '../components/Kalkylator';
import { HeroSectionOne } from '../components/CTA';
import { HeroScrollDemo } from '../components/hero-scroll';
import { DualViewTabs } from '../components/DuelViewTabs';
import { AppleCardsCarouselDemo } from '../components/apple-card-carousel';


const Onboarding = () => {
  return (
    <>
      <Navbar />
      <HeroScrollDemo />
      <DualViewTabs />
      <AppleCardsCarouselDemo />
      <HeroSectionOne />
      <OnboardingData />
      <Kalkylator />
      <About />
      <Footer />
    </>
  );
};

export default Onboarding;
