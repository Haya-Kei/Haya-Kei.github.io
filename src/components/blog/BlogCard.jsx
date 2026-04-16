import { Link } from "react-router-dom";
import "../../styles/BlogCard.css";

function BlogCard({ post }) {
  return (
    <Link to={`/blog/${post.slug}`} className="blog-card">
      <article className="blog-card__inner">
        {post.thumbnail && (
          <figure className="blog-card__thumbnail">
            <img src={post.thumbnail} alt={post.title} loading="lazy" />
          </figure>
        )}
        <div className="blog-card__content">
          <time className="blog-card__date">{post.date}</time>
          <h3 className="blog-card__title">{post.title}</h3>
          <p className="blog-card__excerpt">{post.excerpt}</p>
          {post.tags && post.tags.length > 0 && (
            <div className="blog-card__tags">
              {post.tags.map((tag) => (
                <span key={tag} className="blog-card__tag">
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </article>
    </Link>
  );
}

export default BlogCard;
