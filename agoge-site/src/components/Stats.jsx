const stats = [
    { id: 1, name: 'Utbildade sedan 2024', value: '230' },
    { id: 2, name: 'Kurser sedan 2024', value: '12' },
    { id: 3, name: 'Snitt betyg för varje del', value: '8.8/10' },
  ]
  
  export default function Stats() {
    return (
      <div className=" py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
            {stats.map((stat) => (
              <div key={stat.id} className="mx-auto flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-primary-custom">{stat.name}</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-primary-custom sm:text-5xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  