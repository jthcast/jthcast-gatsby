import React, { useCallback, useEffect } from 'react';
import Switch from '../../atoms/Switch';
import { useRecoilState } from 'recoil';
import { initialColorMode } from '../../../recoilStates';
import './DarkModeSwitch.scss';

const DarkModeSwitch = (): React.ReactElement => {
  const [colorMode, setColorMode] = useRecoilState(initialColorMode);

  const checkSystemPreference = useCallback(() => {
    const isClient = typeof window !== 'undefined';
    if (isClient) {
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
      if (systemPreference.matches) {
        setColorMode('dark');
        localStorage.setItem('color-mode', 'dark');
        return;
      }
      setColorMode('light');
      localStorage.setItem('color-mode', 'light');
    }
  }, [setColorMode]);

  const darkModeHandling = () => {
    setColorMode(colorMode === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', colorMode);
    window.localStorage.setItem('color-mode', colorMode);
  }, [colorMode]);

  useEffect(() => {
    const systemPreference = window.matchMedia('(prefers-color-scheme: dark)');
    systemPreference.addEventListener('change', checkSystemPreference);

    return () => {
      systemPreference.removeEventListener('change', checkSystemPreference);
    };
  }, [checkSystemPreference]);

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
