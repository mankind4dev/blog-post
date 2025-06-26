import { notFound } from "next/navigation";
import React, { use } from "react";
import { postsData } from "../datas/posts";
import Image from "next/image";
import Link from "next/link";

type Props = {
  params: Promise<{ id: string }>;
};

const PostCard = ({ params }: Props) => {
  const param = use(params);
  const rawId = param.id.split("-")[0];
  const post = postsData.find((p) => p.id === rawId);

  if (!post) return notFound();
 
  const relatedPosts = postsData.filter((p) => p.id !== rawId).slice(0, 3);
  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div>
        <h2 className="text-2xl font-semibold mb-6">Related Posts:</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {relatedPosts.map((relPost) => (
            <Link
              key={relPost.id}
              href={`/posts/${relPost.id}-${relPost.title
                .toLowerCase()
                .replace(/\s+/g, "-")}`}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition"
            >
              <Image
                src={relPost.image}
                alt={relPost.title}
                width={400}
                height={200}
                className="w-full h-48 object-cover transition-transform duration-300 ease-in-out transform hover:scale-105"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {relPost.title}
                </h3>
                <p className="text-sm text-gray-600 truncate">
                  {relPost.snippet}
                </p>  
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
