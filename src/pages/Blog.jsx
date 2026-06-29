import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import homeimg from "../assets/images/homeimg.webp";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((res) => res.json())
      .then((data) => setPosts(data.slice(0, 50)));
  }, []);

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">
        Blog
      </h1>

      <div className="grid md:grid-cols-3 gap-6">
        {posts.map((post) => (
          <div
            key={post.id}
            className="border rounded-lg p-5 shadow-sm"
          >
            <img
              src={homeimg}
              alt={post.title}
              className="w-full h-48 object-cover mb-4"
            />
            <h2 className="text-xl font-semibold mb-3">
              {post.title}
            </h2>

            <p className="text-gray-600 mb-4">
              {post.body.substring(0, 80)}...
            </p>

            <Link
              to={`/post/${post.id}`}
              className="text-blue-600 font-medium"
            >
              Read More →
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}