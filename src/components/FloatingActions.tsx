import { ThemeToggle } from './ThemeToggle';

export const FloatingActions = () => {
  return (
    <div className="fixed top-6 right-4 z-50 flex gap-2">
      <ThemeToggle />
    </div>
  );
};