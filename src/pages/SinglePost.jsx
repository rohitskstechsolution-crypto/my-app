import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Helmet } from 'react-helmet-async';
import homeimg from "../assets/images/homeimg.webp";

export default function SinglePost() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json())
      .then((data) => setPost(data));
  }, [id]);

  if (!post) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <>
      <Helmet>
        <title>{post ? `${post.title} | My Blog` : "Loading..."}</title>
        <meta
          name="description"
          content={post ? post.body.slice(0, 150) : "Loading..."}
        />
      </Helmet>
      <div className="max-w-4xl mx-auto px-4 py-12">

        <h1 className="text-4xl font-bold mb-6">
          {post.title}
        </h1>

        <img
          src={homeimg}
          alt={post.title}
          className="w-full h-64 object-cover mb-6"
        />

        <p className="text-gray-700 leading-8">
          {post.body}
        </p>

        <Link
          to="/"
          className="inline-block mt-10 text-blue-600"
        >
          ← Back to Blog
        </Link>
      </div>
    </>
  );
}