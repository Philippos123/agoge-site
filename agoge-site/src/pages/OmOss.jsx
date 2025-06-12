
import About from '../components/About-us';
import Footer from '../components/Footer';
import OurMission from '../components/OurMission';
import Navbar from '../components/NavBar';
import { LampDemo } from '../components/ui/lamp';
import { TimelineDemo } from "../components/TimelineDemo";
import { GlowingEffectDemoSecond } from '../components/GlowingEffectDemoSecond';


const OmOss = () => {
  return (
    <>
      <Navbar />
      <LampDemo />
      <OurMission />
      <GlowingEffectDemoSecond />
      <TimelineDemo/>
      <About />
      <Footer />
    </>
  );
};

export default OmOss;
