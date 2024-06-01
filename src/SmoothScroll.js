import React, { useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const SmoothScroll = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      getDirection: true,
      reloadOnContextChange: true,
    });

    // アンカージャンプのサポート
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
      link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          scroll.scrollTo(targetElement);
        }
      });
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <div data-scroll-container ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
