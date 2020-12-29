import React, { useState } from 'react';
import './Chip.scss';
import { IconTimesCircle } from '../Icons';
import Button from '../Button';

interface ChipProps {
  allowClose?: boolean;
  children?: React.ReactElement | Array<any> | string;
  className?: string;
  onClose?: () => void;
  ghost?: boolean;
}

const Chip = ({
  allowClose = true,
  children,
  className,
  onClose,
  ghost = false,
}: ChipProps): React.ReactElement => {
  const [isClose, setIsClose] = useState(false);

  const closeHandling = () => {
    setIsClose(!isClose);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {!isClose && (
        <span
          className={`jth-chip${ghost ? ` jth-chip-ghost` : ``}${className ? ` ${className}` : ``
            }`}
        >
          {children}
          {allowClose && (
            <Button
              lineType="none"
              className="jth-chip-close"
              tabIndex={-1}
              onClick={closeHandling}
            >
              <IconTimesCircle />
            </Button>
          )}
        </span>
      )}
    </>
  );
};

export default Chip;
