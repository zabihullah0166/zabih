import { useEffect, useRef } from 'react';

/**
 * useScrollReveal – IntersectionObserver-based hook.
 * Call it inside any component and attach the returned ref to the container
 * whose children should animate in.
 *
 * Children need the class "reveal-item" – CSS handles the transition.
 * Optionally add "reveal-item--delay-N" (1-5) for staggered siblings.
 *
 * Usage:
 *   const sectionRef = useScrollReveal();
 *   return <section ref={sectionRef}>...</section>;
 */
export function useScrollReveal({ threshold = 0.12, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return; // static for accessibility

    const el = ref.current;
    if (!el) return;

    // Observe the section container itself
    const sectionObserver = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('section-revealed');
          sectionObserver.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );
    sectionObserver.observe(el);

    // Also observe every .reveal-item inside this section
    const items = el.querySelectorAll('.reveal-item');
    const itemObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            itemObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    items.forEach((item) => itemObserver.observe(item));

    return () => {
      sectionObserver.disconnect();
      itemObserver.disconnect();
    };
  }, [threshold, rootMargin]);

  return ref;
}
