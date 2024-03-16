"use client";
import React, { useState } from "react";

interface Post {
  id: number;
  title: string;
  content: string;
  category: string;
  imageUrl: string;
}

const Blog: React.FC = () => {
  const posts: Post[] = [
    {
      id: 1,
      title: "Tech Post 1",
      content: "Content of tech post 1",
      category: "tech",
      imageUrl: "https://example.com/image1.jpg",
    },
    {
      id: 2,
      title: "Tech Post 2",
      content: "Content of tech post 2",
      category: "tech",
      imageUrl: "https://example.com/image2.jpg",
    },
    {
      id: 3,
      title: "Tech Post 3",
      content: "Content of tech post 3",
      category: "tech",
      imageUrl: "https://example.com/image3.jpg",
    },
    {
      id: 4,
      title: "Tech Post 4",
      content:
        "Long content of tech post 4. This is a long content of tech post 4. This is a long content of tech post 4.",
      category: "tech",
      imageUrl: "https://example.com/image4.jpg",
    },
  ];

  const [expandedPostId, setExpandedPostId] = useState<number | null>(null);

  const handleReadMore = (postId: number) => {
    setExpandedPostId(postId);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-full ">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white shadow-md rounded-lg overflow-hidden"
        >
          <img src={post.imageUrl} alt={post.title} className="w-full h-auto" />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p
              className={expandedPostId === post.id ? "block" : "line-clamp-3"}
            >
              {post.content}
            </p>
            {post.content.length > 100 && (
              <button
                className="mt-2 text-blue-500 hover:underline focus:outline-none"
                onClick={() => handleReadMore(post.id)}
              >
                {expandedPostId === post.id ? "Show Less" : "Read More"}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blog;
