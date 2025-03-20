import Footer from '../components/Footer';
import OnboardingData from '../components/onboardingData';  
import Navbar from '../components/NavBar';
import About from '../components/About-us';
import Stats from '../components/Stats';
import Kalkylator from '../components/Kalkylator';
import Onboardingcta from '../components/onboardingcta'; 
import LogoClouds from '../components/LogoClouds';



const Onboarding = () => {
  return (
    <>
      <Navbar />
      <Onboardingcta />
      <OnboardingData />
      <LogoClouds />
      <Kalkylator />
      <Stats />
      <About />
      <Footer />
    </>
  );
};

export default Onboarding;
