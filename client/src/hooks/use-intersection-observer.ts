import { useEffect, useState, useRef, RefObject } from "react";

interface UseIntersectionObserverProps {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  triggerOnce?: boolean;
}

export const useIntersectionObserver = <T extends Element>({
  root = null,
  rootMargin = "0px",
  threshold = 0.1,
  triggerOnce = false,
}: UseIntersectionObserverProps = {}) => {
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasIntersected, setHasIntersected] = useState(false);
  const elementRef = useRef<T | null>(null);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const currentElement = elementRef.current;

    // Clean up previous observer
    if (observer.current) {
      observer.current.disconnect();
    }

    // Skip if we've already intersected once and triggerOnce is true
    if (triggerOnce && hasIntersected) {
      return;
    }

    if (!currentElement) {
      return;
    }

    observer.current = new IntersectionObserver(
      ([entry]) => {
        setEntry(entry);
        setIsIntersecting(entry.isIntersecting);
        
        if (entry.isIntersecting) {
          setHasIntersected(true);
          
          // If triggerOnce is true, disconnect the observer
          if (triggerOnce && observer.current) {
            observer.current.disconnect();
          }
        }
      },
      { root, rootMargin, threshold }
    );

    observer.current.observe(currentElement);

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, [root, rootMargin, threshold, triggerOnce, hasIntersected]);

  return { ref: elementRef, entry, isIntersecting, hasIntersected };
};
