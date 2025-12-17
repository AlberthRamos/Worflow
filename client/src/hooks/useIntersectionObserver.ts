import { useEffect, useRef, useState } from 'react';

interface IntersectionObserverOptions {
  threshold?: number | number[];
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useIntersectionObserver = (
  elementRef: React.RefObject<Element>,
  callback: (entries: IntersectionObserverEntry[]) => void,
  options: IntersectionObserverOptions = {}
) => {
  const { threshold = 0.1, root = null, rootMargin = '0px', triggerOnce = false } = options;
  const [hasTriggered, setHasTriggered] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      if (triggerOnce && hasTriggered) return;
      
      callback(entries);
      
      if (triggerOnce && entries.some(entry => entry.isIntersecting)) {
        setHasTriggered(true);
      }
    };

    observerRef.current = new IntersectionObserver(handleIntersection, {
      threshold,
      root,
      rootMargin,
    });

    observerRef.current.observe(element);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [elementRef, callback, threshold, root, rootMargin, triggerOnce, hasTriggered]);

  return { hasTriggered };
};

// Hook para detectar quando um elemento está em viewport
export const useInViewport = (
  elementRef: React.RefObject<Element>,
  options: IntersectionObserverOptions = {}
) => {
  const [isInViewport, setIsInViewport] = useState(false);
  const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

  const callback = useCallback((entries: IntersectionObserverEntry[]) => {
    const entry = entries[0];
    setIsInViewport(entry.isIntersecting);
    setEntry(entry);
  }, []);

  const { hasTriggered } = useIntersectionObserver(elementRef, callback, options);

  return { isInViewport, entry, hasTriggered };
};

// Hook para animar com base no scroll
export const useScrollAnimation = (
  elementRef: React.RefObject<Element>,
  animationVariants: {
    hidden: any;
    visible: any;
  },
  options: IntersectionObserverOptions = {}
) => {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const { isInViewport } = useInViewport(elementRef, options);

  useEffect(() => {
    if (isInViewport) {
      setShouldAnimate(true);
    }
  }, [isInViewport]);

  return {
    initial: animationVariants.hidden,
    animate: shouldAnimate ? animationVariants.visible : animationVariants.hidden,
    isInViewport,
  };
};