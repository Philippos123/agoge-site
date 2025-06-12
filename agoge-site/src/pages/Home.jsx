import HeroSection from '../components/Hero-section';
import About from '../components/About-us';
import Footer from '../components/Footer';
import { AnimatedTestimonials } from "../components/ui/animated-testimonials";
import { FeaturesSectionDemo } from '../components/Features-lms';
import OnboardingData from '../components/onboardingData';
import { DualViewTabs } from '../components/DuelViewTabs';
import  HomepageHighlight  from '../components/HomepageHighlight';
import { OurMission } from '../components/OurMission';

const testimonials = [
  {
    quote: "The attention to detail and innovative features have completely transformed our workflow. This is exactly what we've been looking for.",
    name: "Daniel Serrander",
    designation: "CEO at CH Industry",
    src: "/daniel-serrander.jpg",
  },
  {
    quote: "Implementation was seamless and the results exceeded our expectations. The platform's flexibility is remarkable.",
    name: "Michael Rodriguez",
    designation: "CTO at InnovateSphere",
    src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop",
  },
  {
    quote: "This solution has significantly improved our team's productivity. The intuitive interface makes complex tasks simple.",
    name: "Emily Watson",
    designation: "Operations Director at CloudScale",
    src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop",
  },
];

const Home = () => {
  return (
    <>
      <HeroSection />
      <HomepageHighlight />
      <OurMission />
      <FeaturesSectionDemo />
      <DualViewTabs />
      <OnboardingData />
      <AnimatedTestimonials testimonials={testimonials} />
      <About />
      <Footer />
    </>
  );
};

export default Home;
