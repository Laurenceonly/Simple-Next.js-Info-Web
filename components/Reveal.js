"use client";

import { useEffect, useRef } from "react";

export default function Reveal({ as: Element = "div", children, ...props }) {
  const elementRef = useRef(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    element.dataset.revealManaged = "";

    if (
      window.matchMedia("(prefers-reduced-motion: reduce)").matches ||
      !("IntersectionObserver" in window)
    ) {
      element.dataset.revealed = "";
      return;
    }

    element.dataset.revealPending = "";

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        delete element.dataset.revealPending;
        element.dataset.revealed = "";
        observer.unobserve(element);
      },
      { threshold: 0.12, rootMargin: "0px 0px -48px 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <Element ref={elementRef} {...props}>
      {children}
    </Element>
  );
}
