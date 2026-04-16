import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../styles/BlogCarousel.css";

function BlogCarousel() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/blog/posts.json")
      .then((res) => res.json())
      .then((data) => {
        const sortedPosts = [...data.posts]
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 6);
        setPosts(sortedPosts);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  if (loading || posts.length === 0) {
    return null;
  }

  return (
    <section className="section blog-carousel-section" id="blog">
      <div className="section-inner">
        <div className="section-header">
          <p className="eyebrow">Latest Writings</p>
          <h2 className="section-title">From the Blog</h2>
          <p className="section-subtitle">
            Recent thoughts and explorations in development and design.
          </p>
        </div>
      </div>
      <div className="blog-carousel">
        <div className="blog-carousel__track">
          {posts.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              className="blog-carousel__card"
              key={post.slug}
            >
              <article className="blog-carousel__card-inner">
                <time className="blog-carousel__date">{post.date}</time>
                <h3 className="blog-carousel__title">{post.title}</h3>
                <p className="blog-carousel__excerpt">{post.excerpt}</p>
                <span className="blog-carousel__read-more">Read more &rarr;</span>
              </article>
            </Link>
          ))}
        </div>
      </div>
      <div className="section-inner">
        <Link to="/blog" className="blog-carousel__view-all">
          View all posts &rarr;
        </Link>
      </div>
    </section>
  );
}

export default BlogCarousel;
