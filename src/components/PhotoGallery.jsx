import { useEffect, useRef } from "react";
import "../styles/PhotoGallery.css";
import heroPhoto from "../img/DSC06673_1.45.1.png";
import stackPhotoA from "../img/DSC06673_1.37.1.png";
import stackPhotoB from "../img/DSC06673_1.33.1.png";
import gridPhotoA from "../img/DSC06673_1.24.1.png";
import gridPhotoB from "../img/hiyoshi_image.JPG";
import gridPhotoC from "../img/tree_image.PNG";
import gridPhotoD from "../img/Untitled_1.11.1.png";

const gridPhotos = [
  { src: gridPhotoA, alt: "Selected photograph 01", size: "wide", speed: 0.05 },
  { src: gridPhotoB, alt: "Selected photograph 02", size: "tall", speed: 0.08 },
  { src: gridPhotoC, alt: "Selected photograph 03", size: "square", speed: 0.04 },
  { src: gridPhotoD, alt: "Selected photograph 04", size: "wide", speed: 0.06 }
];

function PhotoGallery() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cards = Array.from(root.querySelectorAll(".photo-card"));
    if (!cards.length) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      cards.forEach((card) => card.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      { rootMargin: "0px 0px -15% 0px", threshold: 0.2 }
    );

    cards.forEach((card) => observer.observe(card));

    let rafId = null;
    const updateParallax = () => {
      rafId = null;
      const viewportCenter = window.innerHeight * 0.5;
      cards.forEach((card) => {
        const speed = Number(card.dataset.speed || 0);
        const inner = card.querySelector(".photo-card__inner");
        if (!inner) return;
        const rect = card.getBoundingClientRect();
        const offset = (rect.top - viewportCenter) * speed;
        inner.style.setProperty("--parallax-offset", `${offset}px`);
      });
    };

    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(updateParallax);
    };

    updateParallax();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <main className="portfolio" ref={rootRef}>
      <section className="portfolio-hero">
        <div className="portfolio-hero__copy">
          <p className="portfolio-eyebrow">Selected Photography</p>
          <h1 className="portfolio-title">Frames &amp; Atmosphere</h1>
        </div>
        <div className="portfolio-hero__media">
          <figure className="photo-card photo-card--hero" data-speed="0.1">
            <div className="photo-card__inner">
              <img src={heroPhoto} alt="Featured photograph" loading="eager" />
            </div>
          </figure>
          <div className="photo-stack">
            <figure className="photo-card photo-card--stack" data-speed="0.06">
              <div className="photo-card__inner">
                <img src={stackPhotoA} alt="Detail photograph" loading="lazy" />
              </div>
            </figure>
            <figure className="photo-card photo-card--stack" data-speed="0.04">
              <div className="photo-card__inner">
                <img src={stackPhotoB} alt="Detail photograph" loading="lazy" />
              </div>
            </figure>
          </div>
        </div>
      </section>

      <section className="portfolio-grid">
        {gridPhotos.map((photo) => (
          <figure
            className={`photo-card photo-card--${photo.size}`}
            data-speed={photo.speed}
            key={photo.src}
          >
            <div className="photo-card__inner">
              <img src={photo.src} alt={photo.alt} loading="lazy" />
            </div>
          </figure>
        ))}
      </section>
    </main>
  );
}

export default PhotoGallery;
