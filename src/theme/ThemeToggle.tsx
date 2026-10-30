import { useTheme } from './useTheme';

export function ThemeToggle() {
  const { mode, toggleTheme, allowToggle } = useTheme();

  if (!allowToggle) return null;

  return (
    <button className="inline-flex min-h-11 min-w-11 items-center justify-center" type="button" aria-label={mode} aria-pressed={mode === 'dark'} onClick={toggleTheme}>
      {mode}
    </button>
  );
}
