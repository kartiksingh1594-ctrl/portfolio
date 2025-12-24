import { Peacock } from './Peacock';
import { useTheme } from '../contexts/ThemeContext';
import { ArrowDown } from 'lucide-react';

export const HomeSection = () => {
  const { theme, setSection } = useTheme();

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center px-4 py-20 transition-all duration-500 ${
      theme === 'dark'
        ? 'bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900'
        : 'bg-gradient-to-br from-amber-100 via-orange-100 to-rose-100'
    }`}>
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-8 animate-fade-in">
          <p className={`text-sm font-medium tracking-widest mb-4 ${
            theme === 'dark' ? 'text-blue-300' : 'text-amber-700'
          }`}>
            PAINT THE PEACOCK BELOW
          </p>
          <Peacock />
        </div>

        <div className="animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h1 className={`text-6xl md:text-8xl font-bold mb-6 ${
            theme === 'dark'
              ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400'
              : 'text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-600 to-rose-600'
          }`}>
            Pushpak Jadhav
          </h1>

          <p className={`text-2xl md:text-3xl mb-8 font-light ${
            theme === 'dark' ? 'text-gray-300' : 'text-gray-700'
          }`}>
            Developer • Artist • Creator
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button
              onClick={() => setSection('art')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/50'
                  : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-lg shadow-amber-500/50'
              }`}
            >
              Explore My Art
            </button>

            <button
              onClick={() => setSection('tech')}
              className={`px-8 py-4 rounded-full font-medium transition-all duration-300 hover:scale-105 ${
                theme === 'dark'
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
                  : 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/50'
              }`}
            >
              View My Work
            </button>
          </div>

          <div className="animate-bounce">
            <ArrowDown className={`w-8 h-8 mx-auto ${
              theme === 'dark' ? 'text-blue-400' : 'text-amber-600'
            }`} />
          </div>
        </div>
      </div>

      <div className={`absolute bottom-0 left-0 right-0 h-32 ${
        theme === 'dark'
          ? 'bg-gradient-to-t from-gray-900 to-transparent'
          : 'bg-gradient-to-t from-amber-50 to-transparent'
      }`} />
    </div>
  );
};
