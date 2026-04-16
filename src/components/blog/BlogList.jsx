import { useState, useEffect } from "react";
import BlogCard from "./BlogCard";
import "../../styles/BlogList.css";

function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("/blog/posts.json")
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch posts");
        return res.json();
      })
      .then((data) => {
        const sortedPosts = [...data.posts].sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="blog-page">
        <div className="blog-page__loading">Loading...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-page">
        <div className="blog-page__error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <section className="section blog-list-section">
        <div className="section-inner">
          <div className="section-header">
            <p className="eyebrow">Writings</p>
            <h1 className="section-title">Blog</h1>
            <p className="section-subtitle">
              Thoughts on development, design, and creative process.
            </p>
          </div>
          <div className="blog-grid">
            {posts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default BlogList;
