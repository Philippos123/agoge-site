import { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)




export default function Testimonial() {

  useEffect(() => {
    // Anpassad animation för både desktop och mobil
    gsap.fromTo(
      '.testimonial',
      {
        opacity: 0,
        y: 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: '.testimonial',
          start: 'top 80%',  // För desktop
          end: 'top 20%',
          scrub: true,
          // Anpassa för mobiler
          onEnter: () => {
            if (window.innerWidth <= 768) {
              gsap.to('.testimonial', {
                opacity: 1,
                y: 0,
                duration: 1,
              });
            }
          }
        },
      }
    );
  }, []);

    return (
      <section className="testimonial relative isolate overflow-hidden bg-gray-950/10 px-6 py-24 sm:py-32 lg:px-8 mt-30 mb-30 rounded-r-2xl  border-primary-custom shadow-lg shadow-primary-custom">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-blue-500),black)] opacity-40" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gradient-to-r 
 to-gray-950/10 ring-1 shadow-xl shadow-blue-800 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        <div className="mx-auto max-w-2xl lg:max-w-7xl">
          <img
            alt=""
            src="/INDUSTRY.png"
            className="mx-auto h-20"
          />
          
          <figure className="mt-5">
            <blockquote className=" text-center text-xl/8   text-white sm:text-2xl/9">
              <p>
  
              Med <span className="text-primary-custom font-semibold">Agoge AB´s </span>Pre/on-boarding-app har vi fått ett fantastiskt verktyg för introduktion och utbildning av praktikanter, sommarjobbare och nyanställda. 
            <p className="pt-5">Med <span className="text-primary-custom font-semibold">fem smarta kapitel </span>täcker vi in värderingar,</p> trivselregler, första dan på jobbet, säkerhetsregler och kvalitetsinformation – allt tillgängligt i mobilen på ett roligt och underfundigt sätt. 
            </p> <p className="pt-5">På köpet fick vi också ett dokumentarkiv med blanketter och information som kan vara svår att komma ihåg</p>
              
            </blockquote>
            <figcaption className="mt-10">
              <img
                alt=""
                src="/daniel-serrander.jpg"
                className="mx-auto size-20 rounded-full"
              />
              <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                <div className="font-semibold text-primary-custom">Daniel Serrander</div>
                <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-primery-custom">
                  <circle r={1} cx={1} cy={1} />
                </svg>
                <div className="text-secondary-custom font-semibold">VD för CH Industry</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
  