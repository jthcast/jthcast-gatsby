import React, { useEffect, useRef, useState } from 'react';
import './Accordion.scss';
import Button from '../Button';
import { IconAngleDown } from '../Icons';

interface AccordionProps {
  children?: JSX.Element | JSX.Element[];
  className?: string;
  isOpen?: boolean;
  showIcon?: boolean;
  title?: string;
}

const Accordion = ({
  children,
  className,
  isOpen = false,
  showIcon = true,
  title,
}: AccordionProps): JSX.Element => {
  const [isOpenState, setIsOpenState] = useState(isOpen);
  const [heightState, setHeightState] = useState(0);
  const refEl = useRef<HTMLDivElement>(null);
  const refChildren = useRef<HTMLDivElement>(null);

  const openHandling = () => {
    if (refChildren.current) {
      setHeightState(refChildren.current.clientHeight);
    }
    setIsOpenState(!isOpenState);
  };

  const transitionHandling = () => {
    if (refEl.current && isOpenState) {
      refEl.current.removeAttribute(`style`);
    }
  };

  useEffect(() => {
    if (refEl.current) {
      refEl.current.style.height = `0px`;
    }
  }, []);

  useEffect(() => {
    if (refEl.current) {
      if (isOpenState) {
        refEl.current.style.height = `${heightState}px`;
      } else {
        refEl.current.style.height = `${heightState}px`;
        setTimeout(() => {
          if (refEl.current) {
            refEl.current.style.height = `0px`;
          }
        }, 0);
      }
    }
  }, [isOpenState, heightState]);

  return (
    <>
      {title && (
        <div className="jth-accordion-container">
          <Button
            lineType="text"
            onClick={openHandling}
            className={`jth-accordion-title${className ? ` ${className}` : ``}`}
          >
            {title}
          </Button>
          {showIcon && (
            <IconAngleDown
              className={`jth-accordion-icon${
                isOpenState ? ` jth-accordion-icon-reverse` : ``
              }`}
            />
          )}
        </div>
      )}
      {children && (
        <div
          ref={refEl}
          onTransitionEnd={transitionHandling}
          aria-hidden={!isOpenState}
          className="jth-accordion-contents"
        >
          <div ref={refChildren}>{children}</div>
        </div>
      )}
    </>
  );
};

export default Accordion;
