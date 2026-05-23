import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const SELECTOR = [
  "section",
  "article",
  "aside",
  ".card",
  ".hero",
  ".banner",
  ".feature",
  ".testimonial",
  ".pricing",
  "[data-animate]",
].join(", ");

const ScrollAnimationProvider = ({ children }) => {
  const location = useLocation();
  const observerRef = useRef(null);

  useEffect(() => {
    // Kill previous observer on route change
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const timer = setTimeout(() => {
      const elements = Array.from(document.querySelectorAll(SELECTOR));

      // Reset all elements to hidden
      elements.forEach((el) => {
        el.style.cssText = `
          opacity: 0;
          transform: translateY(24px);
          transition: opacity 550ms cubic-bezier(0.22, 1, 0.36, 1),
                      transform 550ms cubic-bezier(0.22, 1, 0.36, 1);
          will-change: opacity, transform;
        `;
        delete el.dataset.scrollAnimated;
      });

      observerRef.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Use requestAnimationFrame for buttery smooth paint
              requestAnimationFrame(() => {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0px)";
                entry.target.style.willChange = "auto";
              });
              observerRef.current?.unobserve(entry.target);
            }
          });
        },
        {
          threshold: 0.08,
          rootMargin: "0px 0px -50px 0px",
        }
      );

      elements.forEach((el) => observerRef.current?.observe(el));
    }, 80); // small wait for DOM to paint after route change

    return () => {
      clearTimeout(timer);
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [location.pathname]); // re-run on every page change

  return children;
};

export default ScrollAnimationProvider;