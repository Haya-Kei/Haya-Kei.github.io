import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "../../styles/BlogPost.css";

function BlogPost() {
  const { slug } = useParams();
  const [content, setContent] = useState("");
  const [meta, setMeta] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const metaRes = await fetch("/blog/posts.json");
        if (!metaRes.ok) throw new Error("Failed to fetch post metadata");
        const metaData = await metaRes.json();
        const postMeta = metaData.posts.find((p) => p.slug === slug);

        if (!postMeta) {
          throw new Error("Post not found");
        }
        setMeta(postMeta);

        const contentRes = await fetch(`/blog/posts/${slug}.md`);
        if (!contentRes.ok) throw new Error("Failed to fetch post content");
        const markdown = await contentRes.text();
        setContent(markdown);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPost();
  }, [slug]);

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
        <div className="blog-page__error">
          <p>Error: {error}</p>
          <Link to="/blog" className="blog-post__back">
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-page">
      <article className="blog-post">
        <div className="blog-post__header">
          <Link to="/blog" className="blog-post__back">
            &larr; Back to Blog
          </Link>
          <div className="blog-post__meta">
            <time className="blog-post__date">{meta.date}</time>
            {meta.tags && meta.tags.length > 0 && (
              <div className="blog-post__tags">
                {meta.tags.map((tag) => (
                  <span key={tag} className="blog-post__tag">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="blog-post__content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
      </article>
    </div>
  );
}

export default BlogPost;
