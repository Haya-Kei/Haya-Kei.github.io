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

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return <div data-scroll-container ref={scrollRef}>{children}</div>;
};

export default SmoothScroll;
