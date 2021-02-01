import React, { useContext, useEffect } from 'react';
import Switch from '../../atoms/Switch';
import './DarkModeSwitch.scss';
import { ThemeContext } from '../../../context/ThemeContext';

const DarkModeSwitch = (): React.ReactElement => {
  const [colorMode, setColorMode] = useContext(ThemeContext);

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    if (colorMode) {
      document.documentElement.setAttribute('data-theme', colorMode);
    }
  }, [colorMode]);

  return (
    <Switch
      className="switch-darkMode"
      checked={colorMode === 'dark'}
      unCheckedChildren="🌞"
      checkedChildren="🌜"
      onClick={darkModeHandling}
    />
  );
};

export default DarkModeSwitch;
