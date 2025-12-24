import { useTheme } from '../contexts/ThemeContext';

export const TransitionQuote = () => {
  const { showTransition } = useTheme();

  if (!showTransition) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm animate-fade-in">
      <div className="text-center px-8">
        <div className="relative">
          <div className="absolute inset-0 blur-xl opacity-50">
            <div className="h-full w-1/2 bg-gradient-to-r from-amber-400 to-transparent"></div>
            <div className="h-full w-1/2 ml-auto bg-gradient-to-l from-blue-400 to-transparent"></div>
          </div>

          <h2 className="relative text-3xl sm:text-5xl md:text-6xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-white to-blue-400 animate-pulse">
              Pushpak codes in dark
            </span>
          </h2>
          <p className="relative text-2xl sm:text-4xl md:text-5xl font-light">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-white to-amber-400">
              but lives in light
            </span>
          </p>

          <div className="mt-8 h-1 w-64 mx-auto rounded-full bg-gradient-to-r from-amber-400 via-white to-blue-400 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};
