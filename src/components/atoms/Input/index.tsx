import React, { useEffect, useState } from 'react';
import './Input.scss';
import { IconEye, IconEyeSlash, IconTimesCircle } from '../Icons';
import useFocus from '../../../customHooks/useFocus';

export interface InputProps {
  allowClear?: boolean;
  ariaLabel?: string;
  className?: string;
  defaultValue?: string;
  disabled?: boolean;
  id?: string;
  maxLength?: number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onPressEnter?: (event: React.KeyboardEvent | React.MouseEvent) => void;
  placeholder?: string;
  prefix?: string | JSX.Element;
  suffix?: string | JSX.Element;
  type?:
    | 'color'
    | 'date'
    | 'email'
    | 'number'
    | 'password'
    | 'search'
    | 'text'
    | 'url';
  value?: string;
}

const Input = ({
  allowClear = false,
  ariaLabel,
  className,
  defaultValue,
  disabled = false,
  id,
  maxLength,
  onChange,
  onKeyDown,
  onPressEnter,
  placeholder,
  prefix,
  suffix,
  type = 'text',
  value,
}: InputProps): JSX.Element => {
  const [inputRef, setFocus] = useFocus();

  const [inputValue, setInputValue] = useState(defaultValue || value || '');
  const clearInput = () => {
    setInputValue('');
    setFocus();
  };

  const [passwordStatus, setPasswordStatus] = useState(type);
  const passwordVisibleHandling = () => {
    setPasswordStatus(passwordStatus === 'password' ? 'text' : 'password');
    setFocus();
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.selectionStart = inputRef.current.value.length;
      inputRef.current.selectionEnd = inputRef.current.value.length;
    }
  }, [passwordStatus, inputRef]);

  const onChangeHandling = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (onChange) {
      onChange(event);
    }
    const currentValue = event.currentTarget.value;
    setInputValue(currentValue);
  };

  const onKeyDownHandling = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (
      allowClear &&
      event.nativeEvent instanceof KeyboardEvent &&
      event.nativeEvent.key === 'Escape'
    ) {
      event.preventDefault();
      clearInput();
    }
    if (onPressEnter) {
      if (
        event.nativeEvent instanceof KeyboardEvent &&
        event.nativeEvent.key === 'Enter'
      ) {
        event.preventDefault();
        onPressEnter(event);
      }
    }
    if (onKeyDown) {
      onKeyDown(event);
    }
  };

  return (
    <>
      <div className={`jth-input${className ? ` ${className}` : ``}`}>
        {prefix && prefix}
        <label htmlFor={id}>
          <input
            aria-label={ariaLabel}
            className={disabled ? ` jth-input-disabled` : ``}
            disabled={disabled}
            id={id}
            maxLength={maxLength}
            onChange={onChangeHandling}
            onKeyDown={onKeyDownHandling}
            placeholder={placeholder}
            ref={inputRef}
            type={type === 'password' ? passwordStatus : type}
            value={inputValue}
          />
        </label>
        {allowClear && inputValue && !disabled && (
          <IconTimesCircle className="jth-input-icon" onClick={clearInput} />
        )}
        {type === 'password' && !disabled && passwordStatus === 'text' && (
          <IconEyeSlash
            className="jth-input-icon"
            aria-label="don't show password"
            onClick={passwordVisibleHandling}
          />
        )}
        {type === 'password' && !disabled && passwordStatus !== 'text' && (
          <IconEye
            className="jth-input-icon"
            aria-label="show password"
            onClick={passwordVisibleHandling}
          />
        )}
        {suffix && suffix}
      </div>
    </>
  );
};

export default Input;
