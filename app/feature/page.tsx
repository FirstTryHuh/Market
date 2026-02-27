import { 
  RocketLaunchIcon, 
  ShieldCheckIcon, 
  ChartBarIcon,
  CurrencyDollarIcon,
  MagnifyingGlassIcon,
  TruckIcon 
} from '@heroicons/react/24/outline'
import Head from '../components/Header/header'
import Foot from '../components/Foot/footer'

const features = [
  {
    name: 'Easy Listing Management',
    description: 'List your products in minutes with our intuitive dashboard. Bulk upload, edit, and manage inventory seamlessly.',
    icon: RocketLaunchIcon,
  },
  {
    name: 'Secure Payments',
    description: 'End-to-end encrypted transactions with multiple payment options. Your money is always safe with us.',
    icon: ShieldCheckIcon,
  },
  {
    name: 'Advanced Analytics',
    description: 'Track sales, customer behavior, and market trends with real-time data visualization.',
    icon: ChartBarIcon,
  },
  {
    name: 'Smart Pricing',
    description: 'AI-powered pricing suggestions to help you maximize profits while staying competitive.',
    icon: CurrencyDollarIcon,
  },
  {
    name: 'Advanced Search',
    description: 'Powerful search and filtering options help buyers find exactly what they\'re looking for.',
    icon: MagnifyingGlassIcon,
  },
  {
    name: 'Global Shipping',
    description: 'Integrated shipping solutions with real-time tracking and automated label generation.',
    icon: TruckIcon,
  },
]

export default function FeaturesPage() {
  return (
    <div className="bg-white">
      <Head/>
      {/* Header */}
      <div className="relative isolate overflow-hidden bg-gradient-to-b from-indigo-100/20">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              Everything you need to succeed
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Powerful features designed to help buyers and sellers connect, transact, and grow together.
            </p>
          </div>
        </div>
      </div>

      {/* Features grid */}
      <div className="mx-auto max-w-7xl px-6 pb-24 sm:pb-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.name} className="flex flex-col">
                <dt className="text-base font-semibold leading-7 text-gray-900">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                    <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{feature.description}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
      <Foot/>
    </div>
  )
}