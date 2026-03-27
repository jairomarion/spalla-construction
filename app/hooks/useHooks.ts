"use client";

import { useEffect, useState, useRef } from "react";

export function useScrollReveal(
  threshold = 0.1,
  rootMargin = "0px 0px -50px 0px",
) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the element enters the viewport, set it to visible
        if (entry.isIntersecting) {
          setIsVisible(true);

          // Stop observing once it has revealed (so it doesn't animate out and in repeatedly)
          if (currentRef) {
            observer.unobserve(currentRef);
          }
        }
      },
      {
        threshold,
        rootMargin, // Triggers slightly before the element fully hits the bottom of the screen
      },
    );

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, rootMargin]);

  return { ref, isVisible };
}
