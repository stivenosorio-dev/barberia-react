import { useTheme } from './useTheme';

export function ThemeToggle() {
  const { mode, toggleTheme, allowToggle } = useTheme();

  if (!allowToggle) return null;

  return (
    <button type="button" aria-label={mode} aria-pressed={mode === 'dark'} onClick={toggleTheme}>
      {mode}
    </button>
  );
}
