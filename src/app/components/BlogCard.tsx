"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  id: string;
  title: string;
  image: string;
  snippet: string;
};

const BlogCard = ({ id, title, image, snippet }: Props) => {
  return (
    <>
      <Link
        href={`/posts/${id}-${title.replace(/\s+/g, "-").toLowerCase()}`}
        className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition w-full md:w-[48%] lg:w-[30%]"
      >
        <Image
          src={image}
          alt={title}
          width={600}
          height={300}
          className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold mb-2 text-gray-900 hover:underline">
            {title}
          </h2>
          <p className="text-gray-600 text-sm truncate">{snippet}</p>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;
