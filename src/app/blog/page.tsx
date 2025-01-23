'use client'

import { useState } from 'react'
import Layout from '../components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import { blogPosts } from '../lib/blog-posts'

export default function Blog() {
  const [category, setCategory] = useState('')
  const [page, setPage] = useState(1)
  const postsPerPage = 6

  const filteredPosts = category
    ? blogPosts.filter(post => post.category === category)
    : blogPosts

  const totalPages = Math.ceil(filteredPosts.length / postsPerPage)
  const displayedPosts = filteredPosts.slice((page - 1) * postsPerPage, page * postsPerPage)

  return (
    <Layout>
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <div className="mb-4">
        <select 
          value={category} 
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="Technology">Technology</option>
          <option value="Lifestyle">Lifestyle</option>
          {/* Add more categories as needed */}
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {displayedPosts.map(post => (
          <div key={post.id} className="border rounded-lg overflow-hidden shadow-lg">
            <Image src={post.featureImage} alt={post.title} width={300} height={200} className="w-full object-cover h-48" />
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{post.title}</h2>
              <p className="text-gray-700 text-base mb-2">{post.excerpt}</p>
              <Link href={`/blog/${post.id}`} className="text-blue-500 hover:underline">
                Read more
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button 
          onClick={() => setPage(page - 1)} 
          disabled={page === 1}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Previous
        </button>
        <span>Page {page} of {totalPages}</span>
        <button 
          onClick={() => setPage(page + 1)} 
          disabled={page === totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </Layout>
  )
}

