import React, { useContext } from 'react';
import './HeaderMessage.scss';
import Button from '../Button';
import { IconTimes } from '../Icons';
import { HeaderMessageContext } from '../../../context/HeaderMessageContext';

interface HeaderMessageProps {
  allowClose?: boolean;
  children?: React.ReactElement;
  className?: string;
}

const HeaderMessage = ({
  allowClose = true,
  children,
  className,
}: HeaderMessageProps): React.ReactElement => {
  const [isMessageShow, setMessageShow] = useContext(HeaderMessageContext);

  const closeHandling = () => {
    setMessageShow(false);
  };

  return (
    <>
      {children && isMessageShow && (
        <div className={`jth-headerMessage${className ? ` ${className}` : ``}`}>
          <div className="jth-headerMessage-container">
            <span className="jth-headerMessage-content">{children}</span>
            {allowClose && (
              <Button
                ariaLabel="close"
                lineType="none"
                onClick={closeHandling}
                className="jth-headerMessage-allowClose"
              >
                <IconTimes />
              </Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderMessage;
