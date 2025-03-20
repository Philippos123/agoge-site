const callouts = [
    {
      name: 'On-boardning',
      description: 'Förbered dina anställda för en smidig start',
      imageSrc: 'https://attensi.com/wp-content/uploads/employee-onboarding-scaled.jpg',
      imageAlt: 'Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug.',
      href: '/onboarding',
    },
    {
      name: 'Utveckling',
      description: 'Systemutveckling och Webbdesign',
      imageSrc: 'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/blogs/22449/images/Ce6jQkHGSiCqnqTn9Yt4_d41586-019-00653-5_16459152_1_.png',
      imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
      href: '/utveckling',
    },
    {
      name: 'Analys',
      description: 'Analysering, visualisering och AI för din data',
      imageSrc: 'https://netnordic.se/app/uploads/sites/2/2024/10/Big-data-analys-1.png',
      imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
      href: '/analys',
    },
  ]
  
  export default function Products() {
    return (
      <div className="bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
            <h2 className="text-4xl font-bold text-white text-center ">Våra olika ben</h2>
  
            <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              {callouts.map((callout) => (
                <div key={callout.name} className="group relative">
                  <img
                    alt={callout.imageAlt}
                    src={callout.imageSrc}
                    className="w-full rounded-lg bg-white object-cover group-hover:opacity-75 max-sm:h-80 sm:aspect-2/1 lg:aspect-square"
                  />
                  <h3 className="mt-6 text-sm text-gray-500">
                    <a href={callout.href}>
                      <span className="absolute inset-0" />
                      {callout.name}
                    </a>
                  </h3>
                  <p className="text-base font-semibold text-white">{callout.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }
  