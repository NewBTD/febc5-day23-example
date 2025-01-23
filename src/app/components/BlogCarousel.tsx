/** @format */

"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { blogPosts } from "../lib/blog-posts";

export default function BlogCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const highlightedPosts = blogPosts.slice(0, 6);

  const nextSlide = () => {
    setCurrentSlide((currentSlide + 1) % highlightedPosts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (currentSlide - 1 + highlightedPosts.length) % highlightedPosts.length
    );
  };

  return (
    <div className="relative w-full h-96 overflow-hidden">
      {highlightedPosts.map((post, index) => (
        <div
          key={post.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={post.featureImage}
            alt={post.title}
            layout="fill"
            objectFit="cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 text-white p-4">
            <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
            <p className="mb-2">{post.excerpt}</p>
            <Link
              href={`/blog/${post.id}`}
              className="text-blue-300 hover:underline"
            >
              Read more
            </Link>
          </div>
        </div>
      ))}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
}
