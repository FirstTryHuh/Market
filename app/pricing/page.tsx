import { CheckIcon } from '@heroicons/react/20/solid'
import Head from '../components/Header/header'
import Foot from '../components/Foot/footer'

const tiers = [
  {
    name: 'Starter',
    id: 'tier-starter',
    href: '#',
    price: { monthly: '$29', annually: '$290' },
    description: 'Perfect for individual sellers just getting started.',
    features: [
      'Up to 50 products',
      'Basic analytics',
      'Standard support',
      '5% transaction fee',
      'Basic listing tools',
    ],
    mostPopular: false,
  },
  {
    name: 'Professional',
    id: 'tier-professional',
    href: '#',
    price: { monthly: '$79', annually: '$790' },
    description: 'For growing businesses that need more power.',
    features: [
      'Up to 500 products',
      'Advanced analytics',
      'Priority support',
      '2% transaction fee',
      'Bulk listing tools',
      'API access',
      'Custom branding',
    ],
    mostPopular: true,
  },
  {
    name: 'Enterprise',
    id: 'tier-enterprise',
    href: '#',
    price: { monthly: '$199', annually: '$1,990' },
    description: 'For large operations with custom needs.',
    features: [
      'Unlimited products',
      'Real-time analytics',
      '24/7 phone support',
      '0.5% transaction fee',
      'Custom integration',
      'Dedicated account manager',
      'Wholesale tools',
      'Multi-user access',
    ],
    mostPopular: false,
  },
]

export default function PricingPage() {
  return (
    <div >
        <Head/>
        <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-base font-semibold leading-7 text-indigo-600">Pricing</h1>
          <p className="mt-2 text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
          Start free, upgrade as you grow. All plans include a 14-day trial.
        </p>
        
        {/* Pricing toggle */}
        <div className="mt-16 flex justify-center">
          <div className="flex gap-x-4 rounded-full bg-gray-100 p-1 text-sm font-semibold leading-5">
            <button className="rounded-full bg-white px-6 py-2 text-indigo-600 shadow-sm">
              Monthly
            </button>
            <button className="rounded-full px-6 py-2 text-gray-500">
              Annual <span className="text-indigo-600">(Save 20%)</span>
            </button>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className={`rounded-3xl p-8 ring-1 ring-gray-200 ${
                tier.mostPopular ? 'bg-gray-900 text-white ring-gray-900' : 'bg-white'
              }`}
            >
              <h2 className="text-lg font-semibold leading-8">{tier.name}</h2>
              <p className="mt-4 text-sm leading-6 text-gray-600">{tier.description}</p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight">{tier.price.monthly}</span>
                <span className="text-sm font-semibold leading-6">/month</span>
              </p>
              
              <ul className="mt-8 space-y-3 text-sm leading-6">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon className="h-6 w-5 flex-none text-indigo-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <a
                href={tier.href}
                className={`mt-8 block rounded-md px-3 py-2 text-center text-sm font-semibold leading-6 focus-visible:outline ${
                  tier.mostPopular
                    ? 'bg-white text-gray-900 hover:bg-gray-100'
                    : 'bg-indigo-600 text-white hover:bg-indigo-500'
                }`}
              >
                Start free trial
              </a>
            </div>
          ))}
        </div>
      </div>
      </div>
      <Foot/>
    </div>
  )
}