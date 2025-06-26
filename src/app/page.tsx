"use client";
import { useState, useEffect } from "react";
import { postsData } from "./datas/posts";
import SearchBar from "./components/SearchBar";
import BlogCard from "./components/BlogCard";

interface PostType {
  id: string;
  title: string;
  image: string;
  snippet: string;
  content: string;
}

export default function Page() {
  const [search, setSearch] = useState<string>("");
  const [filtered, setFiltered] = useState<PostType[]>([...postsData]); // ✅ FIX

  useEffect(() => {
    const result = postsData.filter((post) =>
      post.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search]);

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <p className="flex text-2xl font-bold text-gray-200 mb-6">
        Mentor<span className="text-red-400 mr-2">Led</span> <span>Blog Posts</span>
      </p>
      <SearchBar value={search} onChange={setSearch} />
      <div className="flex flex-wrap gap-6">
        {filtered.length > 0 ? (
          filtered.map((post) => (
            <BlogCard
              key={post.id}
              id={post.id}
              title={post.title}
              image={post.image}
              snippet={post.snippet}
            />
          ))
        ) : (
          <p className="text-gray-500">No posts found.</p>
        )}
      </div>
    </div>
  );
}
