import { UsersIcon, GlobeAltIcon, HeartIcon } from '@heroicons/react/24/outline'

const stats = [
  { label: 'Active Users', value: '50K+' },
  { label: 'Countries Served', value: '30+' },
  { label: 'Products Listed', value: '1M+' },
  { label: 'Happy Sellers', value: '10K+' },
]

const values = [
  {
    name: 'Community First',
    description: 'We believe in building a platform that serves both buyers and sellers equally.',
    icon: UsersIcon,
  },
  {
    name: 'Global Reach',
    description: 'Breaking down barriers to enable cross-border trade for everyone.',
    icon: GlobeAltIcon,
  },
  {
    name: 'Trust & Safety',
    description: 'Creating a secure environment where transactions happen with confidence.',
    icon: HeartIcon,
  },
]

const team = [
  {
    name: 'Alex Johnson',
    role: 'Co-Founder & CEO',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'Maria Garcia',
    role: 'Co-Founder & CTO',
    image: 'https://images.unsplash.com/photo-1494790108777-223fd9f08bbf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: 'James Wilson',
    role: 'Head of Operations',
    image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]

export default function AboutPage() {
  return (
    <>
    <div className="bg-white">
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">About Us</h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We&apos;re on a mission to create the world&apos;s most trusted marketplace for everyone.
            </p>
          </div>
        </div>
      </div>

      {/* Story */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Story</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Founded in 2020, our marketplace began with a simple idea: make buying and selling online 
            easier, safer, and more accessible for everyone. What started as a small local platform 
            has grown into a global community of buyers and sellers.
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Today, we&apos;re proud to serve millions of users worldwide, helping small businesses grow 
            and connecting buyers with unique products they love. Our commitment to innovation and 
            customer satisfaction drives everything we do.
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 lg:px-8">
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.label}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>

      {/* Values */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-indigo-600">Our Values</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            What we believe in
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {values.map((value) => (
              <div key={value.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <value.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {value.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{value.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      {/* Team */}
      <div className="mx-auto mt-24 max-w-7xl px-6 sm:mt-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Team</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Meet the passionate people behind our marketplace.
          </p>
        </div>
        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-14 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {team.map((person) => (
            <li key={person.name}>
              <img className="aspect-[14/13] w-full rounded-2xl object-cover" src={person.image} alt="" />
              <h3 className="mt-6 text-lg font-semibold leading-8 tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-base leading-7 text-gray-600">{person.role}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
    </>
  )
}