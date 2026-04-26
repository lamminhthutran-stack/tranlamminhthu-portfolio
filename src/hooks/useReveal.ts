import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";

export function useReveal() {
  const location = useLocation();

  useEffect(() => {
    // Wait a brief moment for DOM to be fully rendered
    const timeout = setTimeout(() => {
      const els = document.querySelectorAll<HTMLElement>(".reveal");
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              io.unobserve(e.target);
            }
          });
        },
        { threshold: 0.05, rootMargin: "0px 0px -40px 0px" },
      );
      els.forEach((el) => io.observe(el));
    }, 100);

    return () => clearTimeout(timeout);
  }, [location.pathname]);
}
