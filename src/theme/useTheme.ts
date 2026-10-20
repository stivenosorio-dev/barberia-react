import { useState } from 'react';
import { siteConfig } from '../config/site.config';

type ThemeMode = 'light' | 'dark';

const getInitialMode = (): ThemeMode => {
  if (typeof document !== 'undefined') {
    return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  }
  return siteConfig.theme.defaultMode === 'dark' ? 'dark' : 'light';
};

export function useTheme() {
  const [mode, setMode] = useState<ThemeMode>(getInitialMode);

  const toggleTheme = () => {
    if (!siteConfig.theme.allowToggle) return;
    const nextMode: ThemeMode = mode === 'dark' ? 'light' : 'dark';
    document.documentElement.classList.toggle('dark', nextMode === 'dark');
    document.documentElement.style.colorScheme = nextMode;
    document.querySelector('meta[name="theme-color"]')?.setAttribute(
      'content',
      siteConfig.theme.colors[nextMode].bg,
    );
    try {
      localStorage.setItem('theme', nextMode);
    } catch {}
    setMode(nextMode);
  };

  return { mode, toggleTheme, allowToggle: siteConfig.theme.allowToggle };
}
