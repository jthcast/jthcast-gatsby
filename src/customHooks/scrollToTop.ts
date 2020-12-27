import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = (): null => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    if (pathname) {
      window.scrollTo(0, 0);
    }
  });

  return null;
};

export default ScrollToTop;
