import { CalendarIcon, UserIcon } from '@heroicons/react/20/solid'
import Head from '../components/Header/header'
import Foot from '../components/Foot/footer'

const posts = [
  {
    title: 'How to optimize your product listings for more sales',
    href: '#',
    category: { name: 'Selling Tips', href: '#' },
    description: 'Learn the secrets to creating compelling product descriptions that convert browsers into buyers.',
    date: 'Mar 16, 2024',
    datetime: '2024-03-16',
    author: { name: 'Sarah Chen', href: '#' },
  },
  {
    title: 'Understanding market trends in 2024',
    href: '#',
    category: { name: 'Market Analysis', href: '#' },
    description: 'A comprehensive guide to current market trends and how to leverage them for your business.',
    date: 'Mar 10, 2024',
    datetime: '2024-03-10',
    author: { name: 'Michael Rodriguez', href: '#' },
  },
  {
    title: 'The complete guide to shipping and fulfillment',
    href: '#',
    category: { name: 'Operations', href: '#' },
    description: 'Everything you need to know about shipping, from packaging to international customs.',
    date: 'Feb 28, 2024',
    datetime: '2024-02-28',
    author: { name: 'David Kim', href: '#' },
  },
]

const guides = [
  {
    title: 'Seller Success Handbook',
    description: 'A comprehensive 50-page guide for new sellers',
    downloadLink: '#',
  },
  {
    title: 'Marketing Templates Pack',
    description: 'Ready-to-use templates for promoting your products',
    downloadLink: '#',
  },
  {
    title: 'Tax Guide for Online Sellers',
    description: 'Navigate taxes with confidence',
    downloadLink: '#',
  },
]

export default function ResourcesPage() {
  return (
    <div >
        <Head/>
        <div className="bg-white py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Resources</h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Learn, grow, and succeed with our comprehensive guides and articles.
          </p>
        </div>

        {/* Featured Guides */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Featured Guides</h2>
          <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-12 lg:grid-cols-3">
            {guides.map((guide) => (
              <div key={guide.title} className="rounded-lg bg-gray-50 p-8">
                <h3 className="text-lg font-semibold leading-8 text-gray-900">{guide.title}</h3>
                <p className="mt-2 text-sm leading-6 text-gray-600">{guide.description}</p>
                <a
                  href={guide.downloadLink}
                  className="mt-4 inline-block text-sm font-semibold leading-6 text-indigo-600 hover:text-indigo-500"
                >
                  Download PDF <span aria-hidden="true">→</span>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Blog Posts */}
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">Latest Articles</h2>
          <div className="mt-6 space-y-12">
            {posts.map((post) => (
              <article key={post.title} className="flex flex-col gap-4 border-b border-gray-200 pb-8 last:border-0">
                <div className="flex items-center gap-x-4 text-xs">
                  <time dateTime={post.datetime} className="text-gray-500">
                    {post.date}
                  </time>
                  <a
                    href={post.category.href}
                    className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                  >
                    {post.category.name}
                  </a>
                </div>
                <div className="group relative">
                  <h3 className="text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                    <a href={post.href}>
                      <span className="absolute inset-0" />
                      {post.title}
                    </a>
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-gray-600">{post.description}</p>
                </div>
                <div className="relative flex items-center gap-x-4">
                  <div className="text-sm leading-6">
                    <p className="font-semibold text-gray-900">
                      <a href={post.author.href}>
                        <span className="absolute inset-0" />
                        {post.author.name}
                      </a>
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
      </div>
      <Foot/>
    </div>
  )
}