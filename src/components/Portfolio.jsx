import { useEffect, useRef } from "react";
import "../styles/Portfolio.css";
import heroPhoto from "../img/DSC06673_1.45.1.png";
import stackPhotoA from "../img/DSC06673_1.37.1.png";
import stackPhotoB from "../img/DSC06673_1.33.1.png";
import gridPhotoA from "../img/DSC06673_1.24.1.png";
import gridPhotoB from "../img/hiyoshi_image.JPG";
import gridPhotoC from "../img/tree_image.PNG";
import gridPhotoD from "../img/Untitled_1.11.1.png";

const galleryPhotos = [
  { src: stackPhotoA, alt: "Selected photograph 01" },
  { src: stackPhotoB, alt: "Selected photograph 02" },
  { src: gridPhotoA, alt: "Selected photograph 03" },
  { src: gridPhotoB, alt: "Selected photograph 04" },
  { src: gridPhotoC, alt: "Selected photograph 05" },
  { src: gridPhotoD, alt: "Selected photograph 06" }
];

const galleryLoop = [...galleryPhotos, ...galleryPhotos];

function Portfolio() {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const lagItems = Array.from(root.querySelectorAll("[data-lag]"));

    let targetScroll = window.scrollY;
    let currentScroll = window.scrollY;
    let rafId = null;

    const render = () => {
      rafId = null;
      if (prefersReducedMotion) {
        currentScroll = targetScroll;
      } else {
        currentScroll += (targetScroll - currentScroll) * 0.08;
      }

      if (!prefersReducedMotion) {
        lagItems.forEach((item) => {
          const speed = Number(item.dataset.lag || 0);
          const offset = currentScroll * speed;
          item.style.transform = `translate3d(0, ${-offset}px, 0)`;
        });
      }

      if (Math.abs(targetScroll - currentScroll) > 0.2) {
        rafId = requestAnimationFrame(render);
      }
    };

    const onScroll = () => {
      targetScroll = window.scrollY;
      if (!rafId) {
        rafId = requestAnimationFrame(render);
      }
    };

    const onResize = () => {
      onScroll();
    };

    render();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="portfolio-page" ref={rootRef}>
      <section className="section intro-section" id="intro">
        <div className="section-inner">
          <div className="intro-grid">
            <div className="intro__content">
              <h1 className="intro__headline" data-lag="0.06">
                Keiichi Hayashi
              </h1>
            </div>
            <figure className="intro__image" data-lag="0.03">
              <img src={heroPhoto} alt="Portrait photograph" loading="eager" />
            </figure>
          </div>
        </div>
      </section>

      <section className="section gallery-section" id="gallery">
        <div className="section-inner">
          <div className="section-header">
            <h2 className="section-title">Photo Gallery</h2>
          </div>
        </div>
        <div className="gallery-scroll" aria-label="Photo carousel">
          <div className="gallery-track" aria-live="off">
            {galleryLoop.map((photo, index) => (
              <figure
                className="gallery-card"
                key={`${photo.src}-${index}`}
                aria-hidden={index >= galleryPhotos.length}
              >
                <img src={photo.src} alt={photo.alt} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="section-inner">
          <div className="contact-links">
            <a
              href="https://www.linkedin.com/in/keiichi-hayashi/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              LinkedIn ↗
            </a>
            <a
              href="https://www.instagram.com/hayakei884/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Instagram ↗
            </a>
            <a
              href="https://www.facebook.com/hayakei884/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              Facebook ↗
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Portfolio;
