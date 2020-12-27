import React, { useRef } from 'react';

const useFocus = (
  ref?: React.RefObject<HTMLInputElement | undefined>
): [React.RefObject<HTMLInputElement>, () => void] => {
  const htmlElRef = useRef<HTMLInputElement>(
    ref && ref.current ? ref.current : null
  );

  const setFocus = () => {
    const currentEl = htmlElRef.current;
    if (currentEl) {
      currentEl.focus();
    }
  };

  return [htmlElRef, setFocus];
};

export default useFocus;
