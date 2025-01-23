/** @format */

"use client";

import { useState } from "react";
import useSWR from "swr";
import Card from "./Card";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function ItemList() {
  const [page, setPage] = useState(1);
  const [category, setCategory] = useState("");

  const { data, error, isLoading } = useSWR(
    `/api/items?category=${category}&limit=6&page=${page}`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Items</h2>
      <div className="mb-4">
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded p-2"
        >
          <option value="">All Categories</option>
          <option value="books">Books</option>
          <option value="electronics">Electronics</option>
        </select>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.items.map((item: any) => (
          <Card
            key={item.id}
            name={item.name}
            image={item.image}
            price={item.price}
          />
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
        <span>
          Page {data.pagination.currentPage} of {data.pagination.totalPages}
        </span>
        <button
          onClick={() => setPage(page + 1)}
          disabled={page === data.pagination.totalPages}
          className="bg-blue-500 text-white px-4 py-2 rounded disabled:bg-gray-300"
        >
          Next
        </button>
      </div>
    </div>
  );
}
