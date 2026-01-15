import React, { useEffect, useRef } from "react";

const SmoothScroll = ({ children, speed = 0.1 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) return;

    let scrollY = 0;
    let translateY = 0;
    let rafId = null;

    const resize = () => {
      const height = Math.max(container.scrollHeight, container.clientHeight);
      document.body.style.height = `${height}px`;
    };

    const render = () => {
      const nextY = translateY + (scrollY - translateY) * speed;
      const isNear = Math.abs(scrollY - nextY) <= 0.1;
      translateY = isNear ? scrollY : nextY;

      const roundedY = Math.round(translateY * 100) / 100;
      container.style.transform = `translate3d(0, -${roundedY}px, 0)`;

      if (isNear) {
        rafId = null;
        container.style.willChange = "";
      } else {
        rafId = requestAnimationFrame(render);
      }
    };

    const onScroll = () => {
      scrollY = window.scrollY || window.pageYOffset;
      if (!rafId) {
        container.style.willChange = "transform";
        rafId = requestAnimationFrame(render);
      }
    };

    const setStyles = () => {
      container.style.position = "fixed";
      container.style.width = "100%";
      container.style.top = "0";
      container.style.left = "0";
    };

    const clearStyles = () => {
      document.body.style.height = "";
      container.style.position = "";
      container.style.width = "";
      container.style.top = "";
      container.style.left = "";
      container.style.transform = "";
      container.style.willChange = "";
    };

    setStyles();
    resize();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", resize);
    window.addEventListener("load", resize);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", resize);
      window.removeEventListener("load", resize);
      if (rafId) cancelAnimationFrame(rafId);
      clearStyles();
    };
  }, [speed]);

  return <div ref={containerRef}>{children}</div>;
};

export default SmoothScroll;
