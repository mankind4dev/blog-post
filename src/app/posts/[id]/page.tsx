"use client";
import PostCard from "@/app/components/PostCard";
import { postsData } from "@/app/datas/posts";
import Image from "next/image";
import { notFound } from "next/navigation";
import React, { use } from "react";

type PostProps = {
  params: Promise<{ id: string }>;
};

const PostPage = ({ params }: PostProps) => {
  const param = use(params);
  const rawId = param.id.split("-")[0];

  const post = postsData.find((p) => p.id === rawId);

  if (!post) return notFound();

  return (
    <>
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
        <Image
          src={post.image}
          alt={post.title}
          width={800}
          height={400}
          className="rounded mb-6 object-cover w-full"
        />
        <p className="text-gray-200 leading-relaxed">{post.snippet}</p>
      </div>
      <div className="mt-4">
        <PostCard params={params} />
      </div>
    </>
  );
};

export default PostPage;
