import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // If Lenis is present (exposed by SmoothScroll), use its smooth scroll to go to top.
    try {
      // @ts-expect-error window augmentation
      const lenis = window.__lenis;
      if (lenis && typeof lenis.scrollTo === 'function') {
        lenis.scrollTo(0, { duration: 0.6 });
        return;
      }
    } catch (e) {
      // fall back below
    }

    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
