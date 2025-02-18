import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const PlanetHeader = () => {
  const headerRef = useRef();  // Referens till h2-elementet

  useEffect(() => {
    // Animering med ScrollTrigger
    gsap.fromTo(
      headerRef.current,
      {
        opacity: 0,
        y: -100,  // Startposition (kommer uppifrån)
      },
      {
        opacity: 1,
        y: 0,  // Slutposition (där h2 ska landa)
        scrollTrigger: {
          trigger: headerRef.current, // Elementet som ska trigga animationen
          start: "top 80%",  // Animationen börjar när h2 är 80% ner på skärmen
          end: "top 30%",    // Animationen slutar när h2 når 30% av skärmen
          scrub: true,       // Gör att animationen följer skrollningen
          markers: false,    // Om du vill se start- och slutposition kan du sätta den till true
        },
      }
    );
  }, []);
  

  return (
    <h2 ref={headerRef} style={{ textAlign: 'center', color: 'gray', fontSize: '40px' }}>
      Planet Data Network
    </h2>
  );
};

export default PlanetHeader;
