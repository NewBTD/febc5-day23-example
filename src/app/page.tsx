import Layout from './components/Layout'
import ItemList from './components/ItemList'
import BlogCarousel from './components/BlogCarousel'
import HookExamples from './components/HookExamples'

export default function Home() {
  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Welcome to Next.js Full Features Demo</h1>
      <p className="mb-4">This project demonstrates various Next.js features including routing, data fetching, and API routes.</p>
      <BlogCarousel />
      <div className="mt-8">
        <ItemList />
      </div>
      <HookExamples />
    </Layout>
  )
}
