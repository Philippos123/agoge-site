import { useEffect } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const teamMembers = [
  {
    name: "Philip Samaras",
    role: "CEO & Founder",
    imageUrl: "https://media.licdn.com/dms/image/v2/D4D03AQHol1KFdfzZQw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1722599513771?e=2147483647&v=beta&t=-DIw3gXI0tjWGc0sCo-_Lyjrv1J7a2DAcbtpEHkyeCE",
    bio: "Digital transformation expert with 10+ years in EdTech innovation"
  },
  {
    name: "Maria Fischer",
    role: "Co-Founder & CTO",
    imageUrl: "/Maria.jpg",
    bio: "Learning experience designer passionate about cognitive science"
  }
];

export default function About() {
  useGSAP(() => {
    gsap.to('.moving-shape', {
      duration: 8,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      clipPath: 'polygon(10% 60%, 90% 60%, 80% 70%, 40% 80%, 10% 60%)',
      background: 'linear-gradient(to top right, #f3a701, #2563eb)',
    });
  });

  return (
    <div className=" py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-4xl font-bold tracking-tight text-agoge-500 sm:text-5xl">
            The Agoge Team
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            We're a passionate team of learning innovators on a mission to transform how people develop skills. 
            Our approach combines cutting-edge technology with proven pedagogical methods to create experiences 
            that don't just teach—they inspire lasting curiosity and growth.
          </p>
          <div className="mt-10">
            <div className="relative isolate">
              <div
                aria-hidden="true"
                className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
              >
                <div
                  className="moving-shape relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                />
              </div>
            </div>
          </div>
        </div>
        
        <ul className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {teamMembers.map((member) => (
            <li key={member.name} className="group">
              <div className="flex items-start gap-x-6">
                <div className="relative h-24 w-24 overflow-hidden rounded-2xl">
                  <img 
                    src={member.imageUrl} 
                    alt="" 
                    className="h-full w-full object-cover transition-all duration-300 group-hover:scale-105" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-300/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold leading-tight text-gray-400">{member.name}</h3>
                  <p className="text-sm font-medium text-agoge-500">{member.role}</p>
                  <p className="mt-2 text-sm text-gray-300">{member.bio}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="mx-auto mt-24 max-w-7xl px-6 lg:px-8">
        <div className="rounded-2xl  p-8 sm:p-12">
          <h3 className="text-2xl font-semibold text-agoge-500">Our Philosophy</h3>
          <div className="mt-6 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div>
              <h4 className="text-lg font-medium text-primary">Learning as Transformation</h4>
              <p className="mt-2 text-gray-300">
                We believe true learning should fundamentally change how you see the world. 
                Our programs are designed to create those "aha" moments that reshape perspectives.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-medium text-primary">Technology with Purpose</h4>
              <p className="mt-2 text-gray-300">
                While we love innovative tech, we never let it overshadow pedagogy. 
                Every feature serves a clear learning objective and user need.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}