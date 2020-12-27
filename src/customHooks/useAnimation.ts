import { useEffect } from 'react';

const useAnimation = (root = null, rootMargin = '', threshold = 0.3): void => {
  useEffect(() => {
    const observerObj = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (
              entry.target instanceof HTMLElement ||
              entry.target instanceof SVGElement
            ) {
              const { animationtype } = entry.target.dataset;
              if (animationtype) {
                entry.target.classList.add(
                  `jth-animation-${animationtype}-show`
                );
              }
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { root, rootMargin, threshold }
    );

    const animationItems = Array.from(
      document.querySelectorAll('.jth-animation')
    );

    animationItems.forEach((element: Element) => {
      observerObj.observe(element);
    });

    return () => observerObj.disconnect();
  }, [root, rootMargin, threshold]);
};

export default useAnimation;
